(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{436:function(a,t,s){"use strict";s.r(t);var e=s(45),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"数据基础操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据基础操作"}},[a._v("#")]),a._v(" 数据基础操作")]),a._v(" "),s("blockquote",[s("p",[a._v("详细操作请查看 "),s("code",[a._v("数据操作")]),a._v("目录下对应文章")])]),a._v(" "),s("h3",{attrs:{id:"新增"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[a._v("#")]),a._v(" 新增")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" INSERT [INTO] 表名 [(字段列表)] VALUES (值列表)[, (值列表), ...]\n        -- 如果要插入的值列表包含所有字段并且顺序一致，则可以省略字段列表。\n        -- 可同时插入多条数据记录！\n        REPLACE 与 INSERT 完全一样，可互换。\n    INSERT [INTO] 表名 SET 字段名=值[, 字段名=值, ...]\n    \n-- 插入多行示例：\n insert [into] `student` (name,sex,age) values ('张三', ’男‘, 15),('李素','女'，16);\n\n")])])]),s("h3",{attrs:{id:"查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[a._v("#")]),a._v(" 查询")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" SELECT 字段列表 FROM 表名[ 其他子句]\n        -- 可来自多个表的多个字段\n        -- 其他子句可以不使用\n        -- 字段列表可以用*代替，表示所有字段\n")])])]),s("h3",{attrs:{id:"删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[a._v("#")]),a._v(" 删除")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DELETE FROM 表名[ 删除条件子句]\n        没有条件子句，则会删除全部\n        \n-- 示例\ndelete from `student` where name = '张三';\n")])])]),s("h3",{attrs:{id:"更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[a._v("#")]),a._v(" 更新")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("UPDATE 表名 SET 字段名=新值[, 字段名=新值] [更新条件]\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);