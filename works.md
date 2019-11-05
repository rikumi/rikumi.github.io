---
title: 作品
permalink: works
---

因为时间和精力投入的局限，rkm 的作品主要是对一些新奇想法的探索，对「你的东西很好，可为什么不换一种角度设计呢」的实践。它们也许有很多很多 Bug，不值得你日常使用，但对你日常所使用的那些工具多一些思考，多问几个为什么，总是有意义的。

---

## [deasync-ipc](https://github.com/rikumi/deasync-ipc) - 一个基于文件系统的 Node.js 同步 IPC

![](https://img.shields.io/npm/v/deasync-ipc) ![](https://img.shields.io/github/last-commit/rikumi/deasync-ipc)

在某个框架级项目迁移 NW.js 到 Electron 的过程中，项目中 WebView 内部由于一些不可抗拒原因使用了 `alert()`、`prompt()` 作为 WebView 内部与外部原生代码进行同步调用的桥梁，而 Electron 作为先进的 Web 混合开发框架，对于这些老旧的同步 API 都已经停止支持，例如出现了宿主文档中不再触发 `dialog` 事件、`prompt()` 函数空实现等问题。

同步 IPC 的确是糟糕的设计，但有些时候作为框架的开发者，我们无力改变这些设计问题，只能想办法实现它。因此，利用 Node 的同步文件系统 API，实现了一个简单的同步 IPC，支持在 Client 侧以同步的方式无缝调用 Server 侧的同步/异步 API。

这个项目存在的意义，一个是为了支持上文中提到的很有意义的框架级项目，另一个是希望它的源码能抛砖引玉，给你带来一些有关进程间同步问题的启发。

---

## [Vanessa](https://github.com/rikumi/vanessa) - 基于 Koa 中间件的中间人代理调试工具

![](https://img.shields.io/npm/v/vanessa) ![](https://img.shields.io/github/last-commit/rikumi/vanessa)

我厂的前端开发应该大部分都知道 [Whistle](https://github.com/avwo/whistle)，一款正在活跃维护的中间人代理调试工具。在前端开发中，Whistle 替代了老旧难用、只有 Map Remote/Map Local 两个功能、还要求你把 URL 拆成好几段输入的工业垃圾 Charles，成为前端开发者必备的开发工具。但在实际使用中，Whistle 融入了很多开发者自己设下的规则，所有的配置都需要你去读它的[文档](http://wproxy.org/whistle/rules/)（左边栏向下滚动，看看它制造了多少规则），导致很多人即使从 Charles 转投 Whistle 的怀抱，却仍然只会用那两个功能：换 IP 和换文件。**用户不会用，就是设计的失败。**

拥抱 Koa 中间件语法，拥抱动态运行时，是作为面向开发者的调试工具的一个理想化的设计方向。经过对中间人代理框架 [http-mitm-proxy](https://npmjs.com/http-mitm-proxy) 进行仔细剖析后，在 Koa 基础上进行的重新实现，做出了这份毕业设计作品 Vanessa。Vanessa 实现了对 HTTP/HTTPS 流量进行拦截，经过一系列可自由编写的 Koa 中间件，对请求和响应进行任何修改。

相比 Whistle，Vanessa 的设计理念更加标准化，不需要专门学习冗长且奇怪的配置语法，但由于缺乏维护，在稳定性和性能上还有不少缺陷。

---

## [Marp+](https://marp-plus.github.io) - 前端开发者的生动一课

![](https://img.shields.io/github/last-commit/marp-plus/marp-plus)

这是一款基于 Electron 并被移植到纯 Web 版本的 Markdown 幻灯片制作工具，它在 Marp 的基础上支持了全屏播放，并增加了为幻灯片快速设置 CSS 样式的特性，同时支持 Mermaid 图，支持单页幻灯片内垂直滚动；Web 版本除架构上不分离外，与 Electron 版本没有功能区别，可以日常使用。直接点击[链接](https://marp-plus.github.io)即可在线使用。

Marp+ 在开发一段时间后，进行了一次样式更新，借鉴了参与开发的腾讯文档界面风格。后来，腾讯文档新增了幻灯片支持，如果你是一个不希望安装 Office 套件的「现代人」，且在墙内网络条件不好，或者和我一样厌倦了 Google 和微软的复杂体验，却需要编辑文档/表格/幻灯片的话，[腾讯文档](https://docs.qq.com/desktop/)是一个不错的选择。

---

## [ƒresh shell](https://github.com/rikumi/fresh-shell) - 用 JavaScript REPL 打造的命令外壳

![](https://img.shields.io/npm/v/fresh-shell) ![](https://img.shields.io/github/last-commit/rikumi/fresh-shell)

ƒ 是一个使用 JavaScript 创造命令外壳（Shell）的尝试。与其它一些成熟的 Shell（例如 Zsh、Fish、Xonsh）不同，它利用自动补全的模板语法，把如何解析 Bash 命令的难题仍然交给 Bash，用 JavaScript 作为帮助处理输出的帮手。这有效避免了 Bash 语法与 JavaScript 语法的冲突，像这样：

```javascript
ƒ`git config --global user.name`
rikumi

ƒ`git config --global user.name`.trim().split('').join('|')
r|i|k|u|m|i

// 开头的 'ƒ`' 和结尾的 '`' 会自动添加
ƒ`_
```

当然，ƒ 这样的尝试也有很多问题，例如我们难以解析带有 `cd` 的命令所导致的工作目录变化，而是只能通过静态分析的方式将纯 `cd` 语句转化为 JavaScript 操作；对于交互式执行和隐式执行的区分难以做到百分百准确，导致有的命令会出现穿帮等等。

在放弃这个项目之后，rkm 转投 [xonsh](https://xon.sh) 的怀抱。作为一个基于 Python 的自定义命令外壳，xonsh 没能避开语法冲突的问题，在两种语法环境的探测和转换上花了很多工夫；但作为给学不会 Bash 语法的开发者日常使用的 Shell，xonsh 完全可以胜任。

---

## [LoveKit](https://rikumi.github.io/lovekit) - 别忘记曾经畅所欲言的日子

![](https://img.shields.io/github/last-commit/rikumi/lovekit)

已经忘了做这份作品的直接动机是什么，但它直到现在还仍然有用：也许是因为自己或是众所周知的其它原因，很多推友渐渐从这个平台上消失；LoveKit 基于 GitHub Pages + [StdLib.com](https://stdlib.com) 搭建，帮助你列出这些超过两周不上推的推友。

看到它们的名字，该怀念还是该遗忘，该不该从你的关注中删除，请务必顺从你的内心。

---

## [iOS 越狱插件集合](https://github.com/rikumi/repo/tree/master/debs)

![](https://img.shields.io/github/last-commit/rikumi/repo)

![](https://camo.githubusercontent.com/fcaf1c81800bd2909e13daa926979804092ef0f6/68747470733a2f2f7773342e73696e61696d672e636e2f6c617267652f303036744e625277677931667565753078756270336a33316b773070623469302e6a7067)

这些是 rkm 在 2018 年尝试 iOS 越狱插件开发时留下的一些 Cydia 插件，它们运行在我之前的 iPhone 6s 上，是 iOS 11.3.1 时代的产物，而在今天，可越狱的最高版本已经到了 12.4，不知道这些插件还能否使用，不妨冒险尝试一下（Cydia 地址：`https://rikumi.github.io/repo/`），也可以参见[图中这个 iWidget 的仓库](https://github.com/rikumi/rikumi-iwidget)。

---

## 其它

其它一些早期作品不再列举，可以参见我的 [GitHub 主页](https://github.com/rikumi/)。