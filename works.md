---
title: 作品
permalink: works
---

因为时间和精力投入的局限，rkm 的作品主要是对一些新奇想法的探索，对「你的东西很好，可为什么不换一种角度设计呢」的实践。它们也许有很多很多 Bug，不值得你日常使用，但对你日常所使用的那些工具多一些思考，多问几个为什么，总是有意义的。

---

## [Icon Sur](https://github.com/rikumi/iconsur) - Big Sur is watching you!

![](https://img.shields.io/npm/v/iconsur) ![](https://img.shields.io/github/last-commit/rikumi/iconsur)

![image](https://user-images.githubusercontent.com/5051300/85926574-ebfb9d80-b8d2-11ea-836b-28e38d1f3447.png)

早在 macOS Big Sur 推出之前，我一直在不断更换 macOS 的系统图标和第三方图标，设法让他们看起来一致，至少是形状一致——这样的事情往往费时费力，把工作的时间都占满了，而且用久了也觉得系统很花哨。同时，由于当时经常用的是 Linux 和 Android 图标包，我也曾想过做一款一键脚本，根据 macOS 中需要更换的图标，自动在 Linux 或 Android 图标包中匹配合适的图标，但因为系统之间千差万别，始终没有想到合适的方案，也就一直没有动手去做。

Big Sur 推出之后，macOS 自带的图标放弃了不规则设计，变成了与 iOS 和 iPadOS 一致的自然圆角，这给我们带来了一种新的美化思路：让第三方应用也适配这样的风格，或者直接从 iOS 拿来相同风格的图标。对于极简主义者来说，这是一种绝佳的办法，因为随着时间的推移，需要我们手动处理的图标会越来越少，这些应用会自然而然的往这个方向迭代。

Icon Sur 是一个用于 macOS Big Sur 的自适应图标生成器，具有**自动搜索 iOS App** 和**直接根据原图标生成**两种工作模式，均可以无需手动操作，一条指令更换应用图标。搜索 iOS App 时，可以指定搜索的关键词，也可以直接使用应用本身的名称；根据原图标生成时，可以设置原图标的缩放比例（默认为 0.9）和背景颜色（默认为白色）。

想得到同样简洁优雅的 macOS 界面，让图标们在 Dock 中规范排列，你可以参考 [Icon Sur 的 GitHub 仓库和文档](https://github.com/rikumi/iconsur)，也可以[直接看我自用的配置脚本](https://gist.github.com/rikumi/e2ac39882a7dcd29642f29343da5a54a)。如果项目能达到一定的 Star 数，我还会考虑制作免安装的 GUI 版本。

---

## [IMouse](https://github.com/rikumi/imouse/) - iPad Pro 的鼠标指针，用了又用

![](https://img.shields.io/npm/v/imouse) ![](https://img.shields.io/github/last-commit/rikumi/imouse)

PC（含 Mac）GUI 的世界中，几十年没有改变的设计有两个：一个是窗口，另一个是鼠标指针。传统的鼠标指针设计固然高效，但它经常引起我们的无端思考：为什么是一个箭头？为什么链接的指针是一个手？为什么箭头往左歪？

新 iPad Pro 的触摸板体验（参见[这篇文章](https://sspai.com/post/59569)）让我们眼前一亮，其中就包含了对鼠标指针的重新思考。也许这不是比传统鼠标指针更好的设计，但至少是推翻它的一次大胆尝试。

IMouse 是一个 Web 前端小插件，只需动动手指，就能在你的页面上引入这样的鼠标效果。

[阅读文章 >](/2020/03/21/imouse/)

---

## [Fresh Shell](https://github.com/rikumi/fresh-shell/) - 用 JavaScript REPL 打造的命令外壳

![](https://img.shields.io/npm/v/fresh-shell) ![](https://img.shields.io/github/last-commit/rikumi/fresh-shell)

Fresh 是一个构造极简的 JavaScript Unix Shell。它能在不破坏语法的前提下，让 JavaScript 语法和任意一种标准 Shell 的语法融合，并同时满足你基于 Shell 语法的日常使用和基于 JavaScript 的 Hacking。

[阅读文章 >](/2020/03/06/fresh-shell-3/)

---

## [kbone-svg](https://github.com/rikumi/kbone-svg/) - 让小程序 kbone 环境支持 SVG 渲染

![](https://img.shields.io/npm/v/kbone-svg) ![](https://img.shields.io/github/last-commit/rikumi/kbone-svg)

在一些大型 web-view 项目迁移到 kbone 的过程中，常常会遇到 HTML inline SVG（在 HTML 中直接插入 SVG 标签）这种情况；有的页面还会异步加载一个含有很多小图标（`<symbol>`）的大 SVG、在页面上用 `<use xlink:href="#symbol-id">` 的方式，实现 SVG 的 Sprite 化。

本文针对单个页面上出现大量 HTML inline SVG 的实战场景，通过识别并转换成 `background-image`，来实现小程序 kbone 对 SVG 的支持。[阅读文章 >](/2019/11/27/kbone-svg/)

---

## [vuepress-theme-journal](https://github.com/rikumi/vuepress-theme-journal) - 适用于 VuePress 的 Journal 主题

![](https://img.shields.io/npm/v/vuepress-theme-journal) ![](https://img.shields.io/github/last-commit/rikumi/vuepress-theme-journal)

这是「[Journal.](https://github.com/SumiMakito/hexo-theme-journal)」主题的 VuePress 移植版，主要保留框架结构的样式，部分细节问题例如 Tag 页面暂时没有实现；Markdown 的样式主要保留了 vuepress-theme-blog 的样式。

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
