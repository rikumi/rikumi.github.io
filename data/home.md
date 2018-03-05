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

[< 2017 归档](#/home-2017)
