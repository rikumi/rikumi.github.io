---
title: 利用 TypeScript 装饰器实现 Electron JSBridge
date: 2019-11-03
summary: 对于前端开发者来说，声明和实现分离显然并不是一种友好的办法，但我们可以利用装饰器语法，将声明和实现「自动」分离。
---

## 背景

最近参与的某 PC 端项目中，团队决定使用 Electron 作为新增业务的 Native 支持层，同时与老业务的 Win32 应用程序无缝共存。熟悉 Electron 的同学可能知道这意味着什么。

Electron 作为 NW.js 的继任者，最大的改动就是将 NW.js 的融合环境（以 HTML 为入口，同时支持前端和 Node 技术的环境）一分为二，变成了一个**纯 Node.js 的主进程（Main process）**加上**一系列默认关闭 Node 支持的前端渲染进程（Renderer process）**。

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8l3aj6x7qj30yq0agmxs.jpg)

如果从 NW.js 和 Electron 同源于 Chromium 的角度来看，NW.js 相当于一个嵌入了 Node.js 支持的单窗口浏览器，每开一个进程就相当于打开了一个新的浏览器窗口；而 Electron 则相当于一个支持多标签页的浏览器，主进程是那个独立于所有标签页之外的那个「看不见的」框架层，渲染进程则相当于在这个浏览器中打开的一个个「看得见的」Tab。

这样的架构设计，可能是为了迫使开发者更多地从逻辑/视图分离的角度来思考，开发出鲁棒性更强的应用程序；因此，脱胎于 Atom 的 Electron 造就了 VS Code、[Hyper](https://hyper.is/)、Discord 等优秀的新一代跨平台桌面应用程序，同时也经常受到开发者的诟病。

诟病的主要原因在于，主进程和渲染进程是两个「进程」，它们之间不存在任何语言层面的资源共享，两者之间的任何交互都必须通过消息来实现。也就是说，只要一个应用程序基于 Electron，里面就至少要有两个进程和一个消息通道。

于是到了上文提到的需求中，我们就有了 **Win32**、**Electron 主进程**、**Electron 渲染进程（Preload 脚本）**、**Electron 渲染进程（页面 JS）** 四个环境，其中最后两个环境属于同一个进程，一共有三个进程，这三个进程**两两之间**都有**相互调用**的需求场景。最极端的情况是，Win32 进程甚至需要调用页面上 JS 提供的某个函数。

Electron 为我们提供了 ipc 库，与 Win32 之间的通信也定好了具体的协议收发方式，但同一个函数的同一个定义可能需要被三个环境当中的任何一个调用，每一种调用方式在调用方和被调用方都需要写一次逻辑，一共就是 6 套不同的处理逻辑。每次增加这样的一个函数，需要浪费在这上面的工作量是惊人的。所以，我希望把这六种逻辑统一封装起来，实现定义一次、处处使用。

## 灵感

这一次的灵感来源于当时经常接触到的 PC 端的 C++ 代码。在 C++ 中，每次实现一个函数都需要先在头文件里写一次声明、在源文件里写一次实现，遇到这样的困难咬咬牙就挺过去了，可是，为什么要这样设计呢？

头文件作为一个「模块」的接口声明，其实承担了两个完全不同的任务：一方面，它被接口的实现方（被调用方）引入，用于准确地实现这些接口；另一方面，它也被接口的依赖方（调用方）引入，用于准确地使用这些接口。**调用方只需要有声明，不需要有实现；被调用方既需要有声明，又需要有实现。**于是，声明和实现顺势分离成两个文件，让调用方只编译头文件，被调用方编译源文件及其头文件即可，这是头文件存在的最主要原因。

我们在项目中使用的是 TypeScript，对于前端开发者来说，声明和实现分离显然并不是一种友好的办法，但我们可以利用装饰器语法，将声明和实现「自动」分离。

我们只需要定义一些装饰器，用于表示某个函数需要在哪个环境执行；用这一套装饰器来修饰一些函数的实现，然后将这些实现在每一个环境中都引入一次；在装饰器中判断当前的环境，如果该函数恰好在当前环境执行，就保留原本的函数体实现；否则，将函数体实现替换为对对应远程函数的调用。

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8l50fj32sj317w0go413.jpg)

这样一来，我们就可以让接口函数定义一次、处处使用。下面一节中，让我们看一下具体的实现代码；同时这样做也带来了一些问题，我们将会在本文末尾展开讨论。

## 实现

注：代码仅作为实现思路演示，有适当删改。

```js
import { ipcMain, ipcRenderer } from 'electron';

let localCallbackSeq = 0;

/**
 * 将主进程函数暴露给渲染进程
 */
const exposeMainFunctionToRenderer = (name, asyncFn) => {
  ipcMain.on('call', (event, seq, method, params) => {
    if (method === name) {
      Promise.resolve(asyncFn(params))
        .then((result) => {
          event.reply('callback', seq, null, result);
        })
        .catch((error) => {
          const { message, code } = error;
          event.reply('callback', seq, { message, code });
        });
    }
  });
};

/**
 * 在渲染进程调用主进程暴露的函数
 */
const callMainFunctionFromRenderer = async (name, params) => {
  return new Promise((resolve, reject) => {
    const localSeq = ++localCallbackSeq;

    const invokeResultHandler = (event, seq, error, result) => {
      if (seq === localSeq) {
        ipcRenderer.removeListener('callback', invokeResultHandler);

        if (error) {
          let { code, message } = error;
          error = new Error(message);
          error.code = code;
          reject(error);
        } else {
          resolve(result);
        }
      }
    };

    ipcRenderer.on('callback', invokeResultHandler);
    ipcRenderer.send('call', localSeq, name, params);
  });
};

/**
 * 将渲染进程函数暴露给主进程
 */
const exposeRendererFunctionToMain = (name, asyncFn) => {
  ipcRenderer.on('call', (event, seq, method, params) => {
    if (method === name) {
      Promise.resolve(asyncFn(params))
        .then((result) => {
          ipcRenderer.send('callback', seq, null, result);
        })
        .catch((error) => {
          const { message, code } = error;
          ipcRenderer.send('callback', seq, { message, code });
        });
    }
  });
};

/**
 * 在主进程调用渲染进程暴露的函数
 */
const callRendererFunctionFromMain = async (name, params) => {
  return new Promise((resolve, reject) => {
    const localSeq = ++localCallbackSeq;

    const invokeResultHandler = (seq, error, result) => {
      if (seq === localSeq) {
        ipcMain.removeListener('callback', invokeResultHandler);

        if (error) {
          let { code, message } = error;
          error = new Error(message);
          error.code = code;
          reject(error);
        } else {
          resolve(result);
        }
      }
    };

    ipcMain.on('callback', invokeResultHandler);
    mainWindow.webContents.send('call', localSeq, name, params);
  });
};

/**
 * 将主进程的函数暴露给 Native 端
 */
const exposeMainFunctionToNative = (name, asyncFn) => {
  // 根据 Native 端的通信协议，进行类似的监听
};

/**
 * 在主进程调用 Native 端提供的函数
 */
const callNativeFunctionFromMain = async (name, params) => {
  // 根据 Native 端的通信协议，进行类似的调用
};

const overrideFn = (target, name, descriptor, value) => {
  if (descriptor) {
    descriptor.value = value;
  } else {
    target[name] = value;
  }
};

/**
 * 装饰器，用于定义 Native 端提供的服务函数，被装饰的函数不需要实现。
 */
const nativeService = (target, name, descriptor) => {
  if (process.type === 'browser') {
    // 主进程
    const serviceFunction = callNativeFunctionFromMain.bind(null, name);
    exposeMainFunctionToRenderer(name, serviceFunction);
    overrideFn(target, name, descriptor, serviceFunction);
  } else {
    // 渲染进程
    overrideFn(
      target,
      name,
      descriptor,
      callMainFunctionFromRenderer.bind(null, name)
    );
  }
};

/**
 * 装饰器，用于定义主进程提供的服务函数。
 */
const electronService = (target, name, descriptor) => {
  let serviceFunction = descriptor ? descriptor.value : target[name];

  if (process.type === 'browser') {
    // 主进程
    exposeMainFunctionToRenderer(name, serviceFunction);
    exposeMainFunctionToNative(name, serviceFunction);
  } else {
    // 渲染进程
    overrideFn(
      target,
      name,
      descriptor,
      callMainFunctionFromRenderer.bind(null, name)
    );
  }
};

/**
 * 装饰器，用于定义渲染进程提供的服务函数。
 */
const pageService = (target, name, descriptor) => {
  let serviceFunction = descriptor ? descriptor.value : target[name];

  if (process.type === 'browser') {
    // 主进程
    let localFunction = callRendererFunctionFromMain.bind(null, name);
    exposeMainFunctionToNative(name, localFunction);
    overrideFn(target, name, descriptor, localFunction);
  } else {
    // 渲染进程
    exposeRendererFunctionToMain(name, serviceFunction);
  }
};

export { nativeService, electronService, pageService };
```

在实现了上述这些装饰器之后，我们就可以利用这些装饰器来声明一个 JSBridge。这个 JSBridge 模块只需要被各个不同进程引入，就可以抹平进程间的差异，让对应的函数只在对应的进程内执行，跨进程则自动封装为异步的远程调用。

```js
import { shell } from 'electron';
import {
  nativeService,
  electronService,
  pageService
} from '@/path/to/decorators';

class JSBridge {
  @nativeService
  async openPhotoViewer(params) {}

  @electronService
  async openFile(filePath) {
    return shell.openItem(filePath);
  }
}

export default new JSBridge();
```

## 讨论与思考

在上面的代码中，我们首先分别实现了在几种不同情况下远程函数的暴露和调用过程，然后分别定义了用于声明 Native 端、主进程、渲染进程所提供的服务函数的装饰器，根据调用端和被调用端的环境差异，执行必要的转发。在这样的设计和实现思路中，你是否发现了以下一些可能存在的问题？

1. 每个函数的暴露都会执行一次 `on()` 监听，同一个事件被监听 11 次以上，会触发 Node.js 的监听器内存泄漏告警，即使监听器的数量仍然是有限的，并不构成内存泄漏，但最好可以将监听统一到一处；
2. 装饰器的执行时机是在运行时的模块加载过程中，并非在编译期就执行。因此让所有进程都引入 JSBridge 定义文件，可能导致依赖被同时带到两个进程里。

对于第二个问题，折中的方法是在主进程利用动态的 `require()`。主进程 import 到的依赖主要是外部的原生模块，并不会被 Webpack 打包，且在运行时会被转换成顶层的 `require()`，我们尽可能将这些主进程用到的 import 改为写在函数体内部的 `require()`，即可避免被渲染进程误加载。

更深层次地讲，这个问题最终极的解决办法仍然需要将声明和实现分离，用一个文件去写声明，用另一个文件写实现，或者允许业务逻辑中给函数动态挂载实现。
