(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{367:function(t,n,e){},444:function(t,n,e){"use strict";e(367)},451:function(t,n,e){"use strict";e.r(n);e(178),e(72),e(421),e(322);var a=e(422),r=e.n(a),i=(e(423),e(424)),s=e.n(i),o=(e(98),e(34),e(35),e(6),e(51),e(12),e(15),e(99),e(50),e(108),e(25),e(96),e(328),e(329),e(330),e(331),e(332)),c=e.n(o),l=(e(183),e(442),e(443),{set:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:60;t+="_cache";var a=JSON.stringify({time:Date.now(),maxAge:1e3*e,data:n});localStorage.setItem(t,a)},get:function(t){t+="_cache";var n=localStorage.getItem(t);if(null===n)return null;var e=JSON.parse(n),a=e.time+e.maxAge;return e.time&&a<Date.now()?(localStorage.removeItem(t),null):e.data}});function u(t,n,e,a,r,i,s){try{var o=t[i](s),c=o.value}catch(t){return void e(t)}o.done?n(c):Promise.resolve(c).then(a,r)}function v(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function s(t){u(i,a,r,s,o,"next",t)}function o(t){u(i,a,r,s,o,"throw",t)}s(void 0)}))}}var p="https://8baf1136-b2e3-4a81-afc2-bc969b7560a5.bspapp.com/getClientIP";function f(){return m.apply(this,arguments)}function m(){return(m=v(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(p);case 2:return n=t.sent,e=n.data.ip,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n,e,a,r,i,s){try{var o=t[i](s),c=o.value}catch(t){return void e(t)}o.done?n(c):Promise.resolve(c).then(a,r)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function s(t){d(i,a,r,s,o,"next",t)}function o(t){d(i,a,r,s,o,"throw",t)}s(void 0)}))}}function _(){return y.apply(this,arguments)}function y(){return(y=h(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=l.get("ipLocation"))){t.next=3;break}return t.abrupt("return",n);case 3:return t.next=5,f();case 5:return e=t.sent,t.next=8,c.a.get("https://restapi.amap.com/v5/ip",{params:{key:"a4068e59d0b9a8d824753b4afccfda54",type:4,ip:e}});case 8:return a=t.sent,r=a.data,l.set("ipLocation",r,600),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return b(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){o=!0,i=t},f:function(){try{s||null==e.return||e.return()}finally{if(o)throw i}}}}function b(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function g(t,n,e,a,r,i,s){try{var o=t[i](s),c=o.value}catch(t){return void e(t)}o.done?n(c):Promise.resolve(c).then(a,r)}function w(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function s(t){g(i,a,r,s,o,"next",t)}function o(t){g(i,a,r,s,o,"throw",t)}s(void 0)}))}}var x,S="https://36c7edd4-5acd-4e1c-a193-672f11a3d9f9.bspapp.com/xinguan";function T(){return A.apply(this,arguments)}function A(){return(A=w(regeneratorRuntime.mark((function t(){var n,e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=l.get("xinguan"))){t.next=3;break}return t.abrupt("return",n);case 3:return t.next=5,c()(S);case 5:if(e=t.sent,a=e.data.data,200!==e.status){t.next=11;break}return l.set("xinguan",a,600),t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=w(regeneratorRuntime.mark((function t(){var n,e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:return n=t.sent,e=n.chinaTotal,a=n.lastUpdateTime,t.abrupt("return",Object.assign({lastUpdateTime:a},e));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=w(regeneratorRuntime.mark((function t(){var n,e,a,r,i,s,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:return n=t.sent,e=n.areaTree,t.next=6,_();case 6:return a=t.sent,r=a.province,i=a.city,s=e[2],o=R([r,i],s),t.abrupt("return",Object.assign({province:r,city:i},o));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,n){var e;if((null==n||null===(e=n.children)||void 0===e?void 0:e.length)<=0||(null==t?void 0:t.length)<=0)return n;var a,r=t.shift(),i=C(n.children);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(new RegExp("^".concat(s.name)).test(r))return R(t,s)}}catch(t){i.e(t)}finally{i.f()}}function N(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var D={name:"",components:(x={},N(x,s.a.name,s.a),N(x,r.a.name,r.a),x),data:function(){return{china:{},area:{},chinaLoading:!0,isShow:!1}},computed:{realChina:function(){if(!this.china.lastUpdateTime)return{};var t=this.china,n=t.total,e=t.today,a=t.extData;return{existConfirm:n.confirm-n.heal-n.dead,totalConfirm:n.confirm,totalDead:n.dead,totalHeal:n.heal,totalInput:n.input,noSymptom:a.noSymptom,incrExistConfirm:e.storeConfirm,incrConfirm:e.confirm,incrTotalDead:e.dead,incrTotalHeal:e.heal,incrTotalInput:e.input,incrNoSymptom:a.incrNoSymptom}},realArea:function(){if(!this.area.today)return{};var t=this.area,n=t.today,e=t.total,a=t.extData;return{totalHeal:e.heal,todayConfirm:n.confirm,incrNoSymptom:a.incrNoSymptom,existConfirm:e.confirm-e.dead-e.heal}}},created:function(){var t=this;(function(){return k.apply(this,arguments)})().then((function(n){t.china=n})).then((function(n){(function(){return I.apply(this,arguments)})().then((function(n){t.area=n,t.$emit("loadover",!0),t.isShow=!0}))}))},methods:{}},O=(e(444),e(48)),P=Object(O.a)(D,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"home-xin-guan"},[e("div",{staticClass:"tag"},[e("el-tag",{attrs:{size:"mini",type:"pain"}},[t._v("全国")]),t._v(" "),e("time",[t._v("截至 "+t._s(t.china.lastUpdateTime))])],1),t._v(" "),e("div",{staticClass:"china"},[e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("现有确诊")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#ff4c4c"}},[t._v("\n        "+t._s(t.realChina.existConfirm)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrExistConfirm)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("累计确诊")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#ce0000"}},[t._v("\n        "+t._s(t.realChina.totalConfirm)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrConfirm)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("累计死亡")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#5d5d5d"}},[t._v("\n        "+t._s(t.realChina.totalDead)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrTotalDead)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("累计治愈")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#339d0e"}},[t._v("\n        "+t._s(t.realChina.totalHeal)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrTotalHeal)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("境外输入")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#f7751f"}},[t._v("\n        "+t._s(t.realChina.totalInput)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrTotalInput)+"\n      ")])]),t._v(" "),e("div",{staticClass:"item"},[e("p",{staticClass:"label"},[t._v("无症状感染者")]),t._v(" "),e("p",{staticClass:"number",staticStyle:{color:"#843700"}},[t._v("\n        "+t._s(t.realChina.noSymptom)+"\n      ")]),t._v(" "),e("p",{staticClass:"incr-number"},[e("i",{staticClass:"el-icon-top"}),t._v(t._s(t.realChina.incrNoSymptom)+"\n      ")])])]),t._v(" "),e("el-divider"),t._v(" "),e("div",{staticClass:"tag"},[e("div",[e("el-tag",{attrs:{size:"mini",type:"pain"}},[t._v("本地")]),t._v("\n      "+t._s(t.area.province)+" "+t._s(t.area.city)+"\n    ")],1),t._v(" "),e("time",[t._v("截至 "+t._s(t.area.lastUpdateTime))])]),t._v(" "),e("div",{staticClass:"area"},[e("div",{staticClass:"item"},[e("p",[t._v("新增确诊")]),t._v(" "),e("span",{staticStyle:{color:"#ff4c4c"}},[t._v(t._s(t.realArea.todayConfirm))])]),t._v(" "),e("div",{staticClass:"item"},[e("p",[t._v("新增无症状")]),t._v(" "),e("span",{staticStyle:{color:"#843700"}},[t._v(t._s(t.realArea.incrNoSymptom||0))])]),t._v(" "),e("div",{staticClass:"item"},[e("p",[t._v("现有确诊")]),t._v(" "),e("span",{staticStyle:{color:"#ff4c4c"}},[t._v(t._s(t.realArea.existConfirm))])]),t._v(" "),e("div",{staticClass:"item"},[e("p",[t._v("累计治愈")]),t._v(" "),e("span",{staticStyle:{color:"#339d0e"}},[t._v(t._s(t.realArea.totalHeal))])])])],1)}),[],!1,null,null,null);n.default=P.exports}}]);