(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{319:function(t,e,s){},320:function(t,e,s){},321:function(t,e,s){},346:function(t,e,s){"use strict";s(319)},347:function(t,e,s){"use strict";s(320)},348:function(t,e,s){"use strict";s(321)},376:function(t,e,s){"use strict";var i={data:function(){var t="https://gitee.com/jankinwang/web-demo/tree/master/src";return{demos:[{title:"百度首页",desc:"仿百度首页",tags:["javascript","css","html"],repository:[],link:"".concat(t,"/baidu")},{title:"ScrollEventMix",desc:"为滚动事件添加功能，如：检测子元素是否进入可视区域",tags:["javascript"],repository:[],link:"".concat(t,"/ScrollEventMix")},{title:"SliceUpload",desc:"文件切片上传",tags:["javascript"],repository:[],link:"".concat(t,"/fileSlicerUpload")},{title:"PageGoTop",desc:"返回顶部",tags:["javascript"],repository:[],link:"".concat(t,"/goPageTop")},{title:"下拉刷新",desc:"拖拽事件下拉刷新",tags:["javascript"],repository:[],link:"".concat(t,"/下拉刷新")}]}}},a=(s(346),s(45)),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"web-demo"},[s("h2",[t._v("Web Demo")]),t._v(" "),s("div",{staticClass:"demo-table"},[t._l(t.demos,(function(e,i){return[s("div",{key:i,staticClass:"column col-4 space10"},[s("a",{staticClass:"demo-item",attrs:{href:e.link,target:"_blank"}},[s("h4",[t._v(t._s(e.title)+" "),s("Iconfont",{attrs:{name:"icon-link",size:"15px"}})],1),t._v(" "),s("p",{staticClass:"tags"},t._l(e.tags,(function(e){return s("span",{key:e},[t._v(t._s(e))])})),0),t._v(" "),s("p",{staticClass:"desc",attrs:{title:e.desc}},[t._v(t._s(e.desc))])])])]}))],2)])}),[],!1,null,null,null).exports,c={name:"",data:function(){var t="/assets/img/project";return{projects:[{title:"扫码点餐",images:["".concat(t,"/saomadiancan/h01.png"),"".concat(t,"/saomadiancan/h02.png"),"".concat(t,"/saomadiancan/h03.png")],desc:"",tags:["php","javascript","css","html"],links:[{label:"商户后台",link:"http://diancan.heartverse.net/admin/login/index.html"}],repository:[]},{title:"指南针监护网站",images:["".concat(t,"/tutorship/01.png"),"".concat(t,"/tutorship/02.png"),"".concat(t,"/tutorship/03.png")],desc:"",tags:["javascript","css","html","php"],links:[{label:"家长端",link:"http://compass.linx.cn/Home/Login/index"},{label:"监护老师管理",link:"http://compass.linx.cn/Admin/login/index.html"},{label:"系统管理",link:"http://compass.linx.cn/Admin/login/admin.html"}],repository:[]},{title:"CodeStore-源码商城",images:["".concat(t,"/codestore/01.png"),"".concat(t,"/codestore/02.png"),"".concat(t,"/codestore/03.png"),"".concat(t,"/codestore/04.png")],desc:"",tags:["Vue","javascript"],links:[{label:"PC浏览器",link:"https://sxrenwu.heartverse.net/"},{label:"手机版",link:"http://csm.heartverse.net/"}],repository:[]}],imagePreviewIndex:0}},computed:{previewUrls:function(){return this.projects[this.imagePreviewIndex].images}},methods:{heandelPreviewImage:function(t){this.imagePreviewIndex=t,this.$refs["image-preview"].showPreview()}}},o=(s(347),{name:"Home",components:{HomeDemo:n,HomeProject:Object(a.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-project"},[s("h2",[t._v("项目")]),t._v(" "),s("div",{staticClass:"content"},t._l(t.projects,(function(e,i){return s("div",{key:i,staticClass:"column col-4 space10"},[s("a",{staticClass:"project-item"},[s("div",{staticClass:"imgs",on:{click:function(e){return t.heandelPreviewImage(i)}}},[s("img",{attrs:{src:e.images[0],alt:e.title}})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"tags"},t._l(e.tags,(function(e){return s("span",{key:e},[t._v(t._s(e))])})),0),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),t._v(" "),s("p",{staticClass:"links"},[s("Iconfont",{attrs:{name:"icon-link",size:"15px"}}),t._v(" "),t._l(e.links,(function(e,i){var a=e.link,n=e.label;return s("a",{key:i,attrs:{target:"_blank",href:a}},[t._v(t._s(n))])}))],2)])])])})),0),t._v(" "),s("ImagePreview",{ref:"image-preview",attrs:{urls:t.previewUrls}})],1)}),[],!1,null,null,null).exports},data:function(){var t="/assets/img/";return{quickLinkList:[{img:"".concat(t,"js.png"),title:"javascript",link:"https://zh.javascript.info/"},{img:"".concat(t,"html5.png"),title:"html5",link:"https://developer.mozilla.org/zh-CN/docs/Web/HTML"},{img:"".concat(t,"css3.png"),title:"css3",link:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E9%80%89%E6%8B%A9%E5%99%A8"},{img:"".concat(t,"vue.png"),title:"vue",link:"https://cn.vuejs.org/"},{img:"".concat(t,"js_es6.png"),title:"ES6 入门教程",link:"https://es6.ruanyifeng.com/"},{img:"".concat(t,"webpack.png"),title:"webpack",link:"https://www.webpackjs.com/"}]}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}}),l=(s(348),Object(a.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[s("div",{staticClass:"header"},[s("h1",[t._v("川流不息, code不止")]),t._v(" "),s("div",{staticClass:"quick-link"},[t._l(t.quickLinkList,(function(t){return[s("a",{key:t.title,attrs:{href:t.link,target:"_blank"}},[s("img",{attrs:{src:t.img,alt:t.title,title:t.title}})])]}))],2)]),t._v(" "),s("div",{staticClass:"body"},[s("HomeDemo"),t._v(" "),s("HomeProject")],1),t._v(" "),t.data.footer?s("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()])}),[],!1,null,null,null));e.a=l.exports}}]);