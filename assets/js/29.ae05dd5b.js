(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{802:function(t,s,a){"use strict";a.r(s);var n=a(48),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网格布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网格布局"}},[t._v("#")]),t._v(" 网格布局")]),t._v(" "),a("p",[t._v("网格布局共设计了三种语法：编号的网格线、命名的网格线、命名的网格区域。最后一个可能更受广大开发人员喜爱, 选择一种舒适的语法即可。")]),t._v(" "),a("h2",{attrs:{id:"网格容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网格容器"}},[t._v("#")]),t._v(" 网格容器")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义3个水垂直轨道 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义2个水平轨道 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** \n * 定义4个水平轨道 大小为 auto，\n * 轨道大小设置为auto，轨道会根据自身内容扩展。\n * \n * 用 repeat() 符号还可以定义不同的重复模式，\n * 比如repeat(3, 2fr 1fr)会重复三遍这个模式，\n * 从而定义六个网格轨道，重复的结果是2fr 1fr 2fr 1fr 2fr 1fr。\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 等价于 */")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto auto auto auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 每个网格单元之间的间距 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("gap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.5em 1em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-gap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.5em 1em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("有时候我们不想给一个网格轨道设置固定尺寸，但是又希望限制它的最小值和最大值。这时候需要用到 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/minmax()",target:"_blank",rel:"noopener noreferrer"}},[t._v("minmax()"),a("OutboundLink")],1),t._v(" 函数")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minmax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeat()",target:"_blank",rel:"noopener noreferrer"}},[t._v("repeat()"),a("OutboundLink")],1)]),t._v(" 函数表示轨道列表的重复片段，允许以更紧凑的形式写入大量显示重复模式的列或行。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* <track-repeat> values */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] 250px [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] 60% [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] 1fr [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] min-content [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] max-content [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] auto [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minmax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fit-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10px [col-start] 30% [col-middle] auto [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] min-content [col-middle] max-content [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* <auto-repeat> values */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto-fill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 250px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto-fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 250px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto-fill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] 250px [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto-fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] 250px [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto-fill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minmax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto-fill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10px [col-start] 30% [col-middle] 400px [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* <fixed-repeat> values */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 250px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] 250px [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] 60% [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minmax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [col-start] "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fit-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10px [col-start] 30% [col-middle] 400px [col-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"网格元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网格元素"}},[t._v("#")]),t._v(" 网格元素")]),t._v(" "),a("p",[t._v("用"),a("code",[t._v("网格线")]),t._v("指定一个元素放置的网格区域")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 从1号垂直网格线跨域到3号垂直网格线 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 / 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 从3号水平网格线跨域到5号水平网格线 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3 / 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ngrid-column-start\ngrid-column-end\n\ngrid-row-start\ngrid-row-end\n\n\n\n")])])]),a("p",[t._v("用"),a("code",[t._v("网格轨道")]),t._v("指定一个元素放置的网格区域")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 刚好占据一条垂直网格轨道 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" span 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 刚好占据一条水平网格轨道 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" span 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("说明")]),t._v(" "),a("p",[t._v("这些属性实际上是简写属性：grid-column是grid-column-start和grid-column-end的简写；grid-row是grid-row-start和grid-row-end的简写。中间的斜线只在简写属性里用于区分两个值，斜线前后的空格不作要求。")])]),t._v(" "),a("h2",{attrs:{id:"命名网格线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名网格线"}},[t._v("#")]),t._v(" 命名网格线")]),t._v(" "),a("p",[t._v("基础使用")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".grid")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 命名网格线 */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [start] 2fr [center] 1fr [end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 使用命名网格线指定 */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start / end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" span 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("更多案例")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".grid")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 在这条声明里，2号网格线既叫作left-end也叫作right-start，\n       之后可以任选一个名称使用 */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [left-start] 2fr\n\t\t\t\t\t   \t   [left-end right-start] 1fr\n\t\t\t\t\t       [right-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将水平网格线命名为 “row” */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" [row] auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 跨越 left-start 到 left-end 之间的区域 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row 3 / span 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 从第三行网格线开始放置元素，跨越两个网格轨道 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注：")]),t._v(" "),a("p",[t._v("将网格线命名为left-start和left-end，就定义了一个叫作left的区域，这个区域覆盖两个网格线之间的区域。-start和-end后缀作为关键字，定义了两者之间的区域。如果给元素设置grid-column:left，它就会跨越从left-start到left-end的区域。")])]),t._v(" "),a("h2",{attrs:{id:"命名网格区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名网格区域"}},[t._v("#")]),t._v(" 命名网格区域")]),t._v(" "),a("p",[t._v("基本使用")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".grid")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 2列 4行 */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  2fr  1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 命名网格区域 */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"header header"')]),t._v("\n        \t\t\t\t "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nav    nav"')]),t._v("\n        \t\t\t\t "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main aside1"')]),t._v("\n        \t\t\t\t "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main aside2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 命名网格区域指定位置 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".sidebar-top")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aside1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".sidebar-bottom")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aside2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("还可以用句点（.）作为名称，这样便能空出一个网格单元。比如，以下代码定义了四个网格区域，中间围绕着一个空的网格单元。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top  top right"')]),t._v("\n        \t\t\t "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"left .   right"')]),t._v("\n        \t\t\t "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"left bottom bottom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"显式和隐式网格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显式和隐式网格"}},[t._v("#")]),t._v(" 显式和隐式网格")]),t._v(" "),a("blockquote",[a("p",[t._v("使用grid-template-＊属性定义网格轨道时，创建的是显式网格（explicit grid），但是有些网格元素仍然可以放在显式轨道外面，此时会自动创建隐式轨道以扩展网格，从而包含这些元素。")]),t._v(" "),a("p",[t._v("详见 《深入解析css》6.4-显式和隐式网格")])]),t._v(" "),a("p",[t._v("隐式网格轨道默认大小为auto，也就是它们会扩展到能容纳网格元素内容。可以给网格容器设置grid-auto-columns 和 grid-auto-rows，为隐式网格轨道指定一个大小")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 为隐式网格轨道指定一个大小 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-flow",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[a("code",[t._v("grid-auto-flow")])]),a("OutboundLink")],1),t._v(" 属性控制着自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n此属性有两种形式:\n 单个关键字：row、column，或 dense 中的一个。\n 两个关键字：row dense 或 column dense。\n 其中 dense 等价于 row dense\n\n取值:\n row \t初始值\n\n column 它就会将元素优先放在网格列中，只有当一列填满了，才会移动到下一行。\n\n dense  它让算法紧凑地填满网格里的空白，尽管这会改变某些网格元素的顺序。\n\t\t使小元素“回填”大元素造成的空白区域。\n*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row dense"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对齐"}},[t._v("#")]),t._v(" 对齐")]),t._v(" "),a("p",[t._v("网格布局模块规范里的对齐属性有一些跟Flexbox相同")]),t._v(" "),a("p",[t._v("justify-content、justify-items、justify-self。这些属性控制了网格元素在水平方向上的位置")]),t._v(" "),a("p",[t._v("align-content、align-items、align-self。这些属性控制网格元素在垂直方向上的位置")]),t._v(" "),a("p",[a("code",[t._v("place-content")]),t._v(" 属性是"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("align-content")]),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("justify-content")]),a("OutboundLink")],1),t._v("的简写. 使用这两个属性的值可以用于任何的布局情况, 此外还有 "),a("code",[t._v("place-items")]),t._v("、"),a("code",[t._v("place-self")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/JankinWang/PicGo/main//epub_31594821_266",alt:"网格内的对齐属性"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);