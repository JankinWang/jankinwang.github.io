(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{530:function(t,n,e){},764:function(t,n,e){"use strict";e(530)},771:function(t,n,e){"use strict";e.r(n);e(169),e(70),e(49),e(99),e(6),e(100),e(25),e(361),e(172),e(377),e(325);var a=e(378),r=e.n(a),i=(e(424),e(376)),s=e.n(i),o=(e(96),e(33),e(35),e(50),e(12),e(14),e(101),e(103),e(97),e(362),e(363),e(364),e(365),e(354)),c=e.n(o),l=e(346);function u(t,n,e,a,r,i,s){try{var o=t[i](s),c=o.value}catch(t){return void e(t)}o.done?n(c):Promise.resolve(c).then(a,r)}function p(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function s(t){u(i,a,r,s,o,"next",t)}function o(t){u(i,a,r,s,o,"throw",t)}s(void 0)}))}}var v="https://8baf1136-b2e3-4a81-afc2-bc969b7560a5.bspapp.com/getClientIP";function f(){return m.apply(this,arguments)}function m(){return(m=p(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(v);case 2:return n=t.sent,e=n.data.ip,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n,e,a,r,i,s){try{var o=t[i](s),c=o.value}catch(t){return void e(t)}o.done?n(c):Promise.resolve(c).then(a,r)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function s(t){d(i,a,r,s,o,"next",t)}function o(t){d(i,a,r,s,o,"throw",t)}s(void 0)}))}}function _(){return y.apply(this,arguments)}function y(){return(y=h(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=l.a.get("ipLocation"))){t.next=3;break}return t.abrupt("return",n);case 3:return t.next=5,f();case 5:return e=t.sent,t.next=8,c.a.get("https://restapi.amap.com/v5/ip",{params:{key:"a4068e59d0b9a8d824753b4afccfda54",type:4,ip:e}});case 8:return a=t.sent,r=a.data,l.a.set("ipLocation",r,3600),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return b(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){o=!0,i=t},f:function(){try{s||null==e.return||e.return()}finally{if(o)throw i}}}}function b(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function g(t,n,e,a,r,i,s){try{var o=t[i](s),c=o.value}catch(t){return void e(t)}o.done?n(c):Promise.resolve(c).then(a,r)}function x(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function s(t){g(i,a,r,s,o,"next",t)}function o(t){g(i,a,r,s,o,"throw",t)}s(void 0)}))}}var w,S="https://36c7edd4-5acd-4e1c-a193-672f11a3d9f9.bspapp.com/xinguan";function T(){return A.apply(this,arguments)}function A(){return(A=x(regeneratorRuntime.mark((function t(){var n,e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=l.a.get("xinguan"))){t.next=3;break}return t.abrupt("return",n);case 3:return t.next=5,c()(S);case 5:if(e=t.sent,a=e.data.data,200!==e.status){t.next=11;break}return l.a.set("xinguan",a,600),t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=x(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:return n=t.sent,e=n.chinaTotal,a=n.lastUpdateTime,r=n.chinaDayList,t.abrupt("return",Object.assign({lastUpdateTime:a,chinaDayList:r},e));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return(R=x(regeneratorRuntime.mark((function t(){var n,e,a,r,i,s,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:return n=t.sent,e=n.areaTree,t.next=6,_();case 6:return a=t.sent,r=a.province,i=a.city,s=e[2],o=D([r,i],s),t.abrupt("return",Object.assign({province:r,city:i},o));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(t,n){var e;if((null==n||null===(e=n.children)||void 0===e?void 0:e.length)<=0||(null==t?void 0:t.length)<=0)return n;var a,r=t.shift(),i=C(n.children);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(new RegExp("^".concat(s.name)).test(r))return D(t,s)}}catch(t){i.e(t)}finally{i.f()}}function L(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var I={name:"",components:(w={},L(w,s.a.name,s.a),L(w,r.a.name,r.a),w),data:function(){return{china:{},area:{},chinaLoading:!0,isShow:!1}},computed:{realChina:function(){if(!this.china.lastUpdateTime)return{};var t=this.china,n=t.total,e=t.today,a=t.extData;return{existConfirm:n.confirm-n.heal-n.dead,totalConfirm:n.confirm,totalDead:n.dead,totalHeal:n.heal,totalInput:n.input,noSymptom:a.noSymptom,incrExistConfirm:e.storeConfirm,incrConfirm:e.confirm,incrTotalDead:e.dead,incrTotalHeal:e.heal,incrTotalInput:e.input,incrNoSymptom:a.incrNoSymptom}},realArea:function(){if(!this.area.today)return{};var t=this.area,n=t.today,e=t.total,a=t.extData;return{totalHeal:e.heal,todayConfirm:n.confirm,incrNoSymptom:a.incrNoSymptom,existConfirm:e.confirm-e.dead-e.heal}},areaLine:function(){if(!this.china.chinaDayList)return{};var t=this.china.chinaDayList,n=(t.length,[]),e=[],a=[];return t.slice(-7).forEach((function(t){var r=t.date,i=t.total,s=i.confirm,o=i.heal,c=i.dead,l=t.today.confirm,u=r.split("-");n.push("".concat(u[1],"/").concat(u[2])),a.push(l),e.push(s-o-c)})),{title:{text:"增长态势 (全国)",textStyle:{fontSize:15,fontFamily:"Microsoft YaHei",fontWeight:"normal"},padding:[5,5,5,0]},tooltip:{trigger:"axis"},legend:{left:"right",data:["现有确诊","新增确诊"]},grid:{left:"0px",right:"4%",bottom:"3%",top:"40px",containLabel:!0},xAxis:{type:"category",data:n},yAxis:{type:"value"},series:[{name:"现有确诊",data:e,type:"line",smooth:!0,label:!0,color:"rgb(206, 0, 0)"},{name:"新增确诊",data:a,type:"line",smooth:!0,label:!0,color:"#f00"}]}}},created:function(){var t=this;(function(){return k.apply(this,arguments)})().then((function(n){t.$emit("loadover",!0),t.isShow=!0,t.china=n})).then((function(n){(function(){return R.apply(this,arguments)})().then((function(n){t.area=n}))}))},methods:{}},P=(e(764),e(48)),j=Object(P.a)(I,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"home-xin-guan"},[e("div",{staticClass:"tag"},[e("el-tag",{attrs:{size:"mini",type:"pain"}},[t._v("全国")]),t._v(" "),e("time",[t._v("截至 "+t._s(t.china.lastUpdateTime))])],1),t._v(" "),e("div",{staticClass:"china"},[e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("现有确诊")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#ff4c4c"}},[t._v("\n        "+t._s(t.realChina.existConfirm)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrExistConfirm)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("累计确诊")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#ce0000"}},[t._v("\n        "+t._s(t.realChina.totalConfirm)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrConfirm)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("累计死亡")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#5d5d5d"}},[t._v("\n        "+t._s(t.realChina.totalDead)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrTotalDead)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("累计治愈")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#339d0e"}},[t._v("\n        "+t._s(t.realChina.totalHeal)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrTotalHeal)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("境外输入")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#f7751f"}},[t._v("\n        "+t._s(t.realChina.totalInput)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrTotalInput)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("无症状感染者")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#843700"}},[t._v("\n        "+t._s(t.realChina.noSymptom)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrNoSymptom)+"\n      ")])])]),t._v(" "),e("el-divider"),t._v(" "),e("div",{staticClass:"tag"},[e("div",[e("el-tag",{attrs:{size:"mini",type:"pain"}},[t._v("本地")]),t._v("\n      "+t._s(t.area.province)+" "+t._s(t.area.city)+"\n    ")],1),t._v(" "),e("time",[t._v("截至 "+t._s(t.area.lastUpdateTime))])]),t._v(" "),e("div",{staticClass:"area"},[e("div",{staticClass:"item"},[e("p",[t._v("新增确诊")]),t._v(" "),e("span",{staticStyle:{color:"#ff4c4c"}},[t._v(t._s(t.realArea.todayConfirm))])]),t._v(" "),e("div",{staticClass:"item"},[e("p",[t._v("新增无症状")]),t._v(" "),e("span",{staticStyle:{color:"#843700"}},[t._v(t._s(t.realArea.incrNoSymptom||0))])]),t._v(" "),e("div",{staticClass:"item"},[e("p",[t._v("现有确诊")]),t._v(" "),e("span",{staticStyle:{color:"#ff4c4c"}},[t._v(t._s(t.realArea.existConfirm))])]),t._v(" "),e("div",{staticClass:"item"},[e("p",[t._v("累计治愈")]),t._v(" "),e("span",{staticStyle:{color:"#339d0e"}},[t._v(t._s(t.realArea.totalHeal))])])]),t._v(" "),e("VueEcharts",{staticStyle:{padding:"0 15px"},attrs:{option:t.areaLine}})],1)}),[],!1,null,null,null);n.default=j.exports}}]);