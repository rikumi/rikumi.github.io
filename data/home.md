> 本站已支持 Github Pages & ZeroNet 同步发布。

## 你好，ZeroNet

这里是 rikumi，一个默默无闻的蒟蒻，多听少言的观察者，还没有也不太打算女装的全干码姬，混乱中立的 ISTP-A，未名坐标 (1, 1.2, 0.8)。

并没有太多的诉求，只要恰到好处的伙伴，兴趣爱好可以满足，偶尔的表达欲能得到宣泄就好。

第二次尝试 ZeroNet，相比上一次，这个平台已经变成了一个更加活跃的世外桃源。在这里，有形形色色的人，形形色色的声音，也许不能全部理解和接受，但我誓死捍卫他们说话的权利。

在这个不可思议的地方，rikumi 酱开始了它的新一段旅程。

Hello again, ZeroNet.

[进入 ZeroNet 版 rikumi](http://127.0.0.1:43110/1KszWEes3BvxiJyPGccxkB7At16mJ552dJ)丨[还未安装？](https://zeronet.io)

---

## 笔记：在生产环境服务器使用 Deploy Key 进行部署

服务端的 WS3 经常不小心产生更改，于是今天使用 Deploy Key 重新部署了一下，过程中踩了不少坑，在这里记下。[查看文档](#/tech/deploy-key)

---

## 全新 [rikumi]，需要你有个现代的浏览器

你现在所看到的 [rikumi] 重建于 2018 年 2 月 8 日，是一个博客+简历的混合站，它采用了你见过的网站中**最激进的前端技术**：

1. 脚本直接使用 `ES6` 书写，不经过任何转译，浏览器直接执行；
2. `CSS` 直接使用 `Stylus` 书写，不经过任何预编译，使用浏览器端 `Stylus` 库动态编译；
3. 左侧栏直接使用 `YAML` 书写，不经过任何预编译，使用浏览器端 `axios` 获取，`js-yaml` 库动态解析；
4. 右侧文章内容直接使用 `Markdown` 书写，不经过任何预编译，使用浏览器端 `axios` 获取，`marked.js` + `highlight.js` 库动态解析。

根据[这个表格](https://kangax.github.io/compat-table/es6/)，ES6 目前已经被所有现代浏览器支持——这里的「现代浏览器」显然不包括 IE，所以顺手做了个拒绝 IE 的提示。[想看看吗？](javascript:noie%28%29)

前端如果一直依赖 Babel，那么浏览器将停止进步。

---

## 在水平 Flex 布局中使用 `text-overflow: ellipsis`

CSS3 Flex 布局逐渐普及，个人使用 Flex 布局做过大大小小的前端项目，但在水平 Flex 布局中，对于不占满总宽度的文字元素，溢出时的省略号经常无法显示。今天经过实践，终于总结出 `text-overflow: ellipsis` 生效的条件。

1. 文字本身仍然需要 `overflow: hidden` `white-space: nowrap` 两个属性；
2. 文字不能直接放在 Flex 布局中，需要至少套一个容器，该容器作为 Flex 布局的子容器；
3. 容器需要设置 `min-width: 0`；
4. 文字需要设置 `max-width: 100%`；这里的百分比即相对于容器宽度，所以容器和文字元素之间不要有左右边距。

---

## Typora 终极自定义主题：Shizuku「雫」

最近著名的 Markdown 写作应用 Typora 终于更新了简体中文翻译，借此机会，把之前修改的轻量级 Markdown 编辑器 Mead 的主题在 Typora 上进行了复刻，对 Typora 界面和体验上的大量瑕疵进行了修复：

- 界面采用 Avenir Next 字体，Fira Code 连字等宽字体；
- 代码高亮采用黑白灰蓝单色调；
- 去掉代码选择区域丑陋的紫色，去掉界面所有选择区域的跨段落背景；
- 完全重新设计的代码区域…

[项目地址](https://github.com/rikumi/shizuku-typora-theme)

---

## Node.js Koa 轻量全自动文件路由框架：kf-router

kf-router 是一个极简的、在 Koa 上运行的全自动文件路由中间件。只需在主程序中一行代码，即可根据需要的 ReSTful 路由结构，快速开始书写路由处理程序。

```javascript
//: app.js
const koa = require('koa')
const app = new koa()
const kf = require('kf-router')

app.use(kf(module))
app.listen(3000)

//: hello.js
exports.route = {
    async get () {
        return { hello: 'world!' }
    }
}
```

[项目主页](https://github.com/HeraldStudio/kf-router)

---

## 简单操作，为所欲为：记一次 macOS 全套图标替换

![](data/img/2017-12-08-QQ20171208-094343@2x.png)

之前在小猴扛把子群里看到各位 Linux 用户晒出桌面截图，Numix 图标包已经越来越好看，心生羡慕，所以开始了这次图标替换的尝试。本次图标替换采用 [paper-icon-theme](https://github.com/snwh/paper-icon-theme) 图标包；另外，QQ、微信、Safari 浏览器、Xcode、WebStorm、PyCharm、Adobe 全套图标为自己手作。

替换前首先需要关闭 SIP；最初的做法是，每个图标用 [Icon Slate](https://itunes.apple.com/cn/app/icon-slate/id439697913?mt=12) 制作成`icns`图标，并拖动到`app`包的简介窗格中替换；后来在寻找替换全局文件夹图标方法的时候发现了 [LiteIcon](http://freemacsoft.net/liteicon/) 应用，可以直接用`PNG`格式批量替换系统全局文件夹、程序坞图标、设备和卷图标，以及应用程序图标。最后，使用 [Launchpad Manager](http://launchpadmanager.com) 去掉启动台中的多余图标。

---

## 微软兰亭系列 Noble Scarlet 中文字体，iOS/macOS 替换版

微软在最新 Windows 10 17035 中新增了一款名为 Noble Scarlet 的中文字体，中文部分为微软雅黑的修改版，字面明显收窄，字间距非常舒服；英文为原版雅黑英文；标点符号也终于改成了标准的标点符号。

宁静之雨大大制作了这套字体的 iOS 替换版，然而 iOS 已经没人越狱了，亲测 macOS 可用。

macOS 苹方字体替换方法：下载复制 `PingFang.ttc`，放到 `~/Library/Fonts` 中（注意是用户目录中隐藏的资源库，不是根资源库也不是系统资源库；看不到隐藏文件夹的可以按 `command + shift + .` 显示），注销重新登录即可看到效果。另外建议在 `系统偏好设置 → 通用` 中关闭 `使用 LCD 平滑字体（可用时）`。

[原文链接](http://mp.weixin.qq.com/s/XLPx1rwPXPTIeZ1T7JmymA)丨[下载字体](https://pan.baidu.com/s/1bpdckpx)（提取码：njzy）

---

## 开源 iOS 展开跳转+三向滑动返回动效框架 AnyPullBack 发布

今天发布了人生第一个 Pod 项目，一个开源的 iOS 版三向滑动返回动效插件，跳转和返回手势的效果类似36氪和轻芒杂志，使用时只需引入 `AnyPullBackNavigationController` 即可直接使用。项目已发布到 Cocoapods，只需在 Podfile 引入 `pod 'AnyPullBack'` 即可使用。

[项目地址](https://github.com/rikumi/AnyPullBack)

---

## 日系字体「新ゴ」修改英数和符号，iOS/macOS/Win10全套替换

这套字体原作来自宁静之雨，自己做了一些修改，包含 iOS9/10 和 macOS 通用的 PingFang.ttc，macOS 版网易云使用的冬青黑体，以及 Win10 使用的微软雅黑/雅黑UI字体替换。
- iOS替换方法：越狱后用 Filza 或类似的文件管理器复制到 /System/Library/Fonts/LanguageSupport 覆盖；
- macOS替换方法：打开并安装苹方和冬青黑体，然后打开字体册解决重复字体，选择新安装的字体即可；
- Win10替换方法：用 WinPE 或其他系统环境将三个字体文件复制到 /Windows/Fonts 覆盖。

[百度云下载](https://pan.baidu.com/share/link?shareid=826865158&uk=3408869611)丨[原作链接](http://bbs.themex.net/showthread.php?t=16904284)
