(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{315:function(t,s,a){"use strict";a.r(s);var v=a(7),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("项目主页："),a("a",{attrs:{href:"https://github.com/rikumi/imouse",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rikumi/imouse"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.shields.io/npm/v/imouse",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/github/last-commit/rikumi/imouse",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("PC（含 Mac）GUI 的世界中，几十年没有改变的设计有两个：一个是窗口，另一个是鼠标指针。传统的鼠标指针设计固然高效，但它经常引起我们的无端思考：为什么是一个箭头？为什么链接的指针是一个手？为什么箭头往左歪？")]),t._v(" "),a("p",[t._v("新 iPad Pro 的触摸板体验（参见"),a("a",{attrs:{href:"https://sspai.com/post/59569",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),a("OutboundLink")],1),t._v("）让我们眼前一亮，其中就包含了对鼠标指针的重新思考。也许这不是比传统鼠标指针更好的设计，但至少是推翻它的一次大胆尝试。")]),t._v(" "),a("p",[t._v("IMouse 是一个 Web 前端小插件，只需动动手指，就能在你的页面上引入这样的鼠标效果。")]),t._v(" "),a("h2",{attrs:{id:"已实现功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已实现功能"}},[t._v("#")]),t._v(" 已实现功能")]),t._v(" "),a("ul",[a("li",[t._v("普通圆形鼠标指针（带毛玻璃效果）；")]),t._v(" "),a("li",[t._v("选择文字时变为垂直光标（不支持悬浮在文字上方时变为垂直光标）；")]),t._v(" "),a("li",[t._v("悬浮在链接上方时框住链接，支持自定义代表链接的 selector；")]),t._v(" "),a("li",[t._v("按下时缩小变色效果；")]),t._v(" "),a("li",[t._v("指针颜色、大小、动画时长等基本参数定制。")])]),t._v(" "),a("h2",{attrs:{id:"已知问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已知问题"}},[t._v("#")]),t._v(" 已知问题")]),t._v(" "),a("ul",[a("li",[t._v("不支持自动切换深色/浅色光标；")]),t._v(" "),a("li",[t._v("会卡在 "),a("code",[t._v("iframe")]),t._v(" 外侧（跨域 "),a("code",[t._v("iframe")]),t._v(" 由于浏览器限制无法支持；非跨域 "),a("code",[t._v("iframe")]),t._v(" 需要通信，暂不实现）；")]),t._v(" "),a("li",[t._v("在较大的链接元素上 hover 体验可能不佳；")]),t._v(" "),a("li",[t._v("在 macOS 端，弹出横幅通知会导致鼠标指针恢复正常箭头显示，这是 macOS 的 Bug。")])]),t._v(" "),a("h2",{attrs:{id:"引入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入方式"}},[t._v("#")]),t._v(" 引入方式")]),t._v(" "),a("ul",[a("li",[t._v("NPM 引入：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" IMouse "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imouse'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nIMouse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Script 引入：")])]),t._v(" "),a("p",[t._v("首先下载 "),a("a",{attrs:{href:"https://raw.githubusercontent.com/rikumi/imouse/master/dist/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("imouse.js"),a("OutboundLink")],1),t._v(" 并下发。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("imouse.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" IMouse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),a("h3",{attrs:{id:"imouse-init-options-imouseprops-imouse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imouse-init-options-imouseprops-imouse"}},[t._v("#")]),t._v(" "),a("code",[t._v("IMouse.init(options: IMouseProps): IMouse")])]),t._v(" "),a("p",[t._v("初始化 IMouse 并指定参数。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("defaultBackgroundColor")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("'rgba(30, 111, 255, .1)'")])]),t._v(" "),a("td",[t._v("非 hover 默认状态下的光标背景颜色，CSS 格式")])]),t._v(" "),a("tr",[a("td",[t._v("activeBackgroundColor")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("'rgba(30, 111, 255, .2)'")])]),t._v(" "),a("td",[t._v("非 hover 按下状态下的光标背景颜色，CSS 格式")])]),t._v(" "),a("tr",[a("td",[t._v("defaultSize")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("20")])]),t._v(" "),a("td",[t._v("非 hover 默认状态下的光标直径")])]),t._v(" "),a("tr",[a("td",[t._v("activeSize")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("15")])]),t._v(" "),a("td",[t._v("非 hover 按下状态下的光标直径")])]),t._v(" "),a("tr",[a("td",[t._v("hoverPadding")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("8")])]),t._v(" "),a("td",[t._v("hover 状态下的光标 padding 大小")])]),t._v(" "),a("tr",[a("td",[t._v("activePadding")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("4")])]),t._v(" "),a("td",[t._v("hover 按下状态下的光标 padding 大小")])]),t._v(" "),a("tr",[a("td",[t._v("hoverRadius")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("8")])]),t._v(" "),a("td",[t._v("hover 状态下的光标圆角半径")])]),t._v(" "),a("tr",[a("td",[t._v("activeRadius")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("4")])]),t._v(" "),a("td",[t._v("hover 按下状态下的光标圆角半径")])]),t._v(" "),a("tr",[a("td",[t._v("selectionWidth")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("3")])]),t._v(" "),a("td",[t._v("文字选择状态下的光标宽度")])]),t._v(" "),a("tr",[a("td",[t._v("selectionHeight")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("40")])]),t._v(" "),a("td",[t._v("文字选择状态下的光标高度")])]),t._v(" "),a("tr",[a("td",[t._v("selectionRadius")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("2")])]),t._v(" "),a("td",[t._v("文字选择状态下的光标圆角半径")])]),t._v(" "),a("tr",[a("td",[t._v("hoverSelector")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v('\'a, button, input[type="button"], input[type="checkbox"], input[type="radio"], input[type="file"], input[type="submit"]\'')])]),t._v(" "),a("td",[t._v("允许 hover 的元素，CSS 选择器格式")])]),t._v(" "),a("tr",[a("td",[t._v("normalTransitionDuration")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("200")])]),t._v(" "),a("td",[t._v("非 hover 状态下的动效时长，单位 ms")])]),t._v(" "),a("tr",[a("td",[t._v("hoverTransitionDuration")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("50")])]),t._v(" "),a("td",[t._v("值越大，甩动光标时发生的抖动越强烈")])]),t._v(" "),a("tr",[a("td",[t._v("blurRadius")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("10")])]),t._v(" "),a("td",[t._v("非 hover 状态下的光标毛玻璃半径")])]),t._v(" "),a("tr",[a("td",[t._v("glowRadius")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("200")])]),t._v(" "),a("td",[t._v("hover 状态下的光标发光点半径")])]),t._v(" "),a("tr",[a("td",[t._v("style")]),t._v(" "),a("td",[t._v("React.CSSProperties")]),t._v(" "),a("td",[a("code",[t._v("{}")])]),t._v(" "),a("td",[t._v("光标的附加样式")])]),t._v(" "),a("tr",[a("td",[t._v("zIndex")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("code",[t._v("10000")])]),t._v(" "),a("td",[t._v("Z 轴层级")])])])]),t._v(" "),a("h3",{attrs:{id:"imouse-destroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imouse-destroy"}},[t._v("#")]),t._v(" "),a("code",[t._v("IMouse#destroy()")])]),t._v(" "),a("p",[t._v("销毁 IMouse 实例并恢复原始鼠标指针。")])])}),[],!1,null,null,null);s.default=e.exports}}]);