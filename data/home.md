## Marp+，前端开发者的生动一课

又轮到我做技术分享，又要再纠结一遍该用哪套工具了。Google Presentation 和 KeyNote 都比较方便（当然，PowerPoint 并不在考虑范围），但这些可视化的演示工具有一个共性的缺陷：手工排版，可定制性过于强大，导致页与页之间的格式常常难以统一，往往一个手滑就把某一页的标题往上串了几像素，或者，为了放一个图片，不得不手动把标题往上串几像素等等。对于强迫症的前端开发者来说，这是一种噩梦。这时候我们都会想到 Markdown，想到 `Reveal.js`，但是这些技术栈太重，搭一次环境累个半死。

办法是有的，那就是两年前在 macOS 社区风靡一时的 Markdown 演示工具 Marp。

用了两年 Marp 的我，对这个软件不能再熟悉，在 Markdown 用分割线分页这个实用功能之外，其他内置的功能基本都是鸡肋，该有的功能全都没有：不支持放映，不支持 Mermaid，不支持页内滚动（页面是固定大小的），不支持方向键翻页（只会跟随光标翻页），不支持主题定制……

感谢原作者的开源贡献，在这次技术分享前，我得以花了一周的时间，把 Marp 重构了。

[进入 Marp+ 官网](https://marp-plus.github.io/)（官网可以在线体验）丨 [GitHub](https://github.com/marp-plus)

---

## 旧作：LoveKit - 寻找迷失的推友

他们曾经是各种各样的人们，现在却散落在不同的地方，没了音讯。登录 [LoveKit](/lovekit)，寻找因为种种原因失散的推友们。

本应用基于 `GitHub Pages` + `StdLib.com` 构建。

---

## 正式入坑 iOS 逆向和插件开发

时隔半年的诈尸更新：

加入鹅厂两个月了，除了平时搬砖之外，也开始开辟一些新世界的大门。

**Rikumi 现已支持 iOS 逆向和插件开发。**

[进入我的 Cydia 源](#/repo)

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

# 2017

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

