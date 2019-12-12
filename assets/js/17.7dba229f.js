(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{260:function(t,s,a){"use strict";a.r(s);var n=a(3),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("四只小鸭子在一个大的圆形水池中，分别随机出现在圆中的任意一点。四只鸭子出现在同一个半圆内的概率是多少？")]),t._v(" "),a("h2",{attrs:{id:"争论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#争论"}},[t._v("#")]),t._v(" 争论")]),t._v(" "),a("p",[t._v("首先看到大家的争论，有一个明显错误的逻辑：每个鸭子落在一个半圆内的概率是 1/2，第一只鸭子随便落，后三只鸭子都要跟第一只鸭子落在同一个半圆，所以是 1/8。")]),t._v(" "),a("p",[t._v("为什么这个推理是错的？因为它直接照搬了古典概型中抛硬币的问题，没有考虑到四鸭子问题属于几何概型，情况是不相通的。在古典概型中，抛硬币只有两种结果，要么正面，要么反面，第一个硬币抛下去，后三个硬币跟第一个硬币结果相同，也"),a("strong",[t._v("就是要跟第一个硬币在同一个面")]),t._v("。")]),t._v(" "),a("p",[t._v("而鸭子问题不同，第一个鸭子本身并不属于某个确定的半圆，第二只鸭子跟它在同一个半圆的概率并不是 1/2，而是 1；就算两只鸭子下水，也不一定能确定一个半圆，因为能包含这两只鸭子的半圆不只有一个；同理，就算三只鸭子下水，也不一定能确定一个半圆。")]),t._v(" "),a("p",[t._v("因此后面的鸭子的选择并不是二元的，而是有一个区间的，落在区间内的概率也并不是 1/2，而是都大于 1/2，这是考虑几何概型时需要注意的问题。")]),t._v(" "),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("形象地理解，一只鸭子下水之后，"),a("strong",[t._v("第二只鸭子无论落在哪里，都会跟第一只鸭子处于同一个半圆")]),t._v("；这里由于是概率问题，我们不考虑跟第一只鸭子正好成 180 度的情况，因为这种情况在几何概型中属于概率无限接近零（也可以称为概率为零）的"),a("strong",[t._v("小概率事件")]),t._v("。")]),t._v(" "),a("p",[t._v("我们可以假设最极端的情况，"),a("strong",[t._v("假如第二只鸭子与第一只无限接近 180°")]),t._v("，也就是说，它们已经明确确定了一个不可旋转的半圆。后两只鸭子都落在这个半圆内就算事件成立，后两只中的任意一只不落在这个半圆内就算事件不成立。")]),t._v(" "),a("p",[t._v("在这样的假设下，后两只鸭子的选择就很明确，要么在这个半圆内，要么在这个半圆外，两只鸭子都做了选择之后，事件成立的概率显然是 1/4。")]),t._v(" "),a("p",[t._v("但这是假设前两只鸭子尽可能成 180° 的情况，如果不然呢？")]),t._v(" "),a("p",[t._v("如果第二只鸭子只是与第一只鸭子成一小角度，可以想象，第三只鸭子的选择范围变大了，它可以在两只鸭子所成的角度的一侧，也可以在另一侧，也可以在中间，可以选择的余地已经大于 180°；同理，如果前三只鸭子都在一小角度内，第四只鸭子的选择范围也变大了。换句话说，实际上原题的概率应该大于 1/4，甚至远大于 1/4。")]),t._v(" "),a("p",[t._v("破除这个假设之后，问题已经变得更难思考起来，也许已经变成了无法思考只能用数学证明的范畴，于是我们可以先进行模拟测试，先找到问题的答案。")]),t._v(" "),a("h2",{attrs:{id:"问题简化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题简化"}},[t._v("#")]),t._v(" 问题简化")]),t._v(" "),a("p",[t._v("在模拟测试前，我们需要先将问题简化。在上一节的分析中，我们发现，问题已经被简化成角度的概率问题，而与到圆心的距离无关。")]),t._v(" "),a("p",[t._v("严谨一点讲，以水池的中心为原点，建立极坐标系后，问题简化为"),a("strong",[t._v("随机在一个圆周上选择四个角度，四个角度在同一个半周之内")]),t._v("。")]),t._v(" "),a("p",[t._v("需要特别提及的是，在几何概型问题进行化归的过程中，需要特别注意"),a("strong",[t._v("不可以使等可能性发生畸变")]),t._v("。例如高中数学中常常提到的一个问题："),a("strong",[t._v("在一个三角形里，在一个内角之内随机画出一条射线，落在对边上的概率问题，是不可以化归为在对边上任意取点的，因为等可能性发生了畸变。")]),t._v(" 本问题中，由于圆的性质，每一个微小角度所成的扇形面积都相等，所以我们才可以将圆面积内随机取点的问题化归为圆周上随机取角度的问题。")]),t._v(" "),a("p",[a("strong",[t._v("假如我们遇到另一个在圆面内随机取点的问题，问题的结果与角度无关而与到圆心的距离有关，这时就不可以将该问题化归为在半径上随机取点的问题")]),t._v("，因为从圆面积到到与圆心距离的映射会使等可能性产生畸变。")]),t._v(" "),a("h2",{attrs:{id:"模拟测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟测试"}},[t._v("#")]),t._v(" 模拟测试")]),t._v(" "),a("p",[t._v("我们使用 JavaScript 进行模拟测试，首先需要考虑一个问题：在一个圆周内，当我们说「两个角度在同一个半周内」时，我们是想表达什么？")]),t._v(" "),a("p",[t._v("大二时上过一门高级数据结构的选修课，其中我负责做了一个 Chord（弦网络）的实现和展示，当时的实现可以参见"),a("a",{attrs:{href:"https://github.com/rikumi/ChordNetwork/blob/master/ClientNode.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。在弦网络中，节点之间形成环形拓扑，按照顺时针编号，从 0 编到 n-1；而在算法的要求上，每一个节点需要「顺时针」传递某些信息。这时我们会发现，"),a("strong",[t._v("我们所理解的「顺时针」出现了表达障碍")]),t._v("。如果顺时针只是简单的大小关系，从节点 0 到节点 1 是顺时针，那么从节点 n-1 到节点 0 是不是顺时针？")]),t._v(" "),a("p",[t._v("回到几何问题上，如果从 0° 到 90° 是顺时针，那么从 270° 到 0° 是不是顺时针？角度的循环性给我们带来一个巨大的困惑："),a("strong",[t._v("当我们比较角度时，我们到底在比较什么？")])]),t._v(" "),a("p",[t._v("当时经过长时间的思考，我发现：从角 a 到角 b 成「顺时针」，其实是指角 b 落在角 a 与角(a+180°) 之间；如果没有落在这半周，我们就称角 a 到角 b 成「逆时针」。")]),t._v(" "),a("p",[t._v("换句话说，由于圆周角的循环性，我们对「顺/逆时针」的理解是不严谨的，在思考问题时，要尽可能回归到三个角度之间的三元关系来思考。在上面弦网络的实现代码中，我引入了一个函数 "),a("code",[t._v("is_clockwise(id1, id2, id3)")]),t._v("，用于比较所谓的「顺/逆时针」，其实是三个角度之间的顺序关系。")]),t._v(" "),a("p",[t._v("回到我们的鸭子问题，为了判断两个鸭子是否在同一个半周，我们也需要引入这样一个函数：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isClockwise")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("处于 0~360° 圆周内的三个角度 (a, b, c) 成「顺时针」，当且仅当 "),a("code",[t._v("a<b")]),t._v("、"),a("code",[t._v("b<c")]),t._v("、"),a("code",[t._v("c<a")]),t._v(" 三个表达式有且仅有两个成立。")])]),t._v(" "),a("p",[t._v("接下来，我们就可以利用这个关系，定义「多个角度在同一个半周内」的函数：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isInSameSemicircle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("o")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isClockwise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("多个角 o 都在同一个半周内，当且仅当在 o 中存在一个角 a，使得：")]),t._v(" "),a("p",[t._v("a) 对 o 中除角 a 外的其他任意角 b，都有角 (a, b, a+180°) 成顺时针，或者")]),t._v(" "),a("p",[t._v("b) 对 o 中除角 a 外的其他任意角 b，都有角 (a, b, a+180°) 成逆时针")])]),t._v(" "),a("p",[t._v("翻译成白话，意思就是在这些角中能找到一个角，剩下的所有角都在它的一侧的半周，而非另一侧的半周。")]),t._v(" "),a("p",[t._v("接下来，我们可以对这两个判定函数进行一些简单的测试：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isClockwise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isClockwise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInSameSemicircle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInSameSemicircle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> false")]),t._v("\n")])])]),a("p",[t._v("正合我意。现在，我们来定义随机生成角度和随机进行试验的函数：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("randomAngle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("randomResult")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInSameSemicircle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomAngle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomAngle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomAngle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomAngle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("下面，让我们来进行三批试验，每批试验 1000000 次，看一下「四只鸭子均出现在同一个半圆内」出现的频率吧：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 0.500323")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 0.49939")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 0.499731")]),t._v("\n")])])]),a("p",[t._v("可以肯定，原题中的事件成立的概率为 50% 即 1/2，大于 1/4，与我们的分析相符，但是如果能分析的再接近一些就好了。")]),t._v(" "),a("h2",{attrs:{id:"如果是五只鸭子？或者六只？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果是五只鸭子？或者六只？"}},[t._v("#")]),t._v(" 如果是五只鸭子？或者六只？")]),t._v(" "),a("p",[t._v("上面的结果 1/2 适用于四只鸭子的情况，可以说非常巧合。如果是五只鸭子，是不是会降下来呢？或者如果是三只鸭子，结果又如何？我们可以做更加普遍性的测试：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// count 只鸭子单次试验的结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("randomDucksOnce")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInSameSemicircle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomAngle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// count 只鸭子的 times 次试验的频率")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("randomDucks")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" times "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("times"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucksOnce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" times"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 1                 (2/2)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 非常接近 0.75       (3/4)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 非常接近 0.5        (4/8)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 非常接近 0.3125     (5/16)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 非常接近 0.1875     (6/32)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 非常接近 0.109375   (7/64)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 非常接近 0.0625     (8/128)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 非常接近 0.03515625 (9/256)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomDucks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 非常接近 0.01953125 (10/512)")]),t._v("\n")])])]),a("p",[t._v("可以写出这个数列的通项公式：")]),t._v(" "),a("blockquote",[a("p",[t._v("randomDucks(n) = "),a("code",[t._v("2n / 2^n")])])]),t._v(" "),a("p",[t._v("通过观察可以猜测，n 只鸭子随机出现在圆形水池中的任意一点，落在同一个半圆面内的概率为 "),a("code",[t._v("2n / 2^n")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"后续"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续"}},[t._v("#")]),t._v(" 后续")]),t._v(" "),a("p",[t._v("看到这个公式，是否觉得有神奇的对称美？")]),t._v(" "),a("p",[t._v("对于这个 n 鸭子问题，算法 dalao "),a("a",{attrs:{href:"https://rexskz.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rex"),a("OutboundLink")],1),t._v(" 给出了完美的数学解释，以下是 Rex 的叙述：")]),t._v(" "),a("blockquote",[a("p",[t._v("可以忽略多鸭子在同一直径上的情况（因为概率为 0），那就相当于在圆内随机画了 n 条直径，每只鸭子只占用了其中一条半径，这一共有 2^n 种情况。")]),t._v(" "),a("p",[t._v("只有当这几只鸭子占用的半径相邻时，才是在同一个半圆，可以假设第一只鸭子在某个角度的半径上，其它鸭子顺时针依次占用剩下的半径，那么一共有 2n 种情况。")]),t._v(" "),a("p",[t._v("所以概率是 "),a("code",[t._v("2n / 2^n")]),t._v("。")])]),t._v(" "),a("p",[t._v("简单地讲，由于问题中出现的是半圆，由于半圆的特殊性质，让这个本来看起来是几何概型的问题，变成了古典概型问题：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("每只鸭子下水后，都产生了一条直径，并占用了其中一侧的半径，n 只鸭子产生了 n 条直径，即 2n 条半径；每只鸭子在自己的直径上随机选择其中一个半径，会出现 2 种结果，因此 "),a("strong",[t._v("所有鸭子选定自己的直径后，选择自己所在的半径时，会出现 2^n 种等概率的情况")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("所有鸭子出现在同一个半圆内，当且仅当所有这些鸭子连续占用了其中 n 条相邻的半径，因为在 n 条直径中，任意画一个半圆只能包含 n 条半径，不能再多了；所有鸭子选定自己的直径后，顺时针方向第一只鸭子可能出现在 2n 条半径之一，而其余鸭子只能依次选择相邻的半径，因此 "),a("strong",[t._v("所有鸭子选定自己的直径后，有 2n 种情况会出现在同一个半圆内")]),t._v("。")])])]),t._v(" "),a("p",[t._v("因此，n 只鸭子下水，落在同一个半圆面内的概率为 "),a("code",[t._v("2n / 2^n")]),t._v("，我初次看到这个通项，以为需要跑到 n 维空间去做几何规划才能得到这样的答案，没想到竟然可以化归为古典概型来解释，实在是妙不可言 😏。")])])}),[],!1,null,null,null);s.default=p.exports}}]);