(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-editAddress"],{"038d":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"add-address"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"item-title"},[t._v("收货人:")]),n("v-uni-view",{staticClass:"item-input"},[n("v-uni-input",{attrs:{type:"text",placeholder:"收货人姓名"},model:{value:t.addressData.username,callback:function(e){t.$set(t.addressData,"username",e)},expression:"addressData.username"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"item-title"}),n("v-uni-view",{staticClass:"item-sex"},[n("v-uni-view",{class:1==t.addressData.sex?"sex":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.optionSex(1)}}},[t._v("先生")]),n("v-uni-view",{class:0==t.addressData.sex?"sex":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.optionSex(0)}}},[t._v("女士")])],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"item-title"},[t._v("电话号码:")]),n("v-uni-view",{staticClass:"item-input"},[n("v-uni-input",{attrs:{type:"text",placeholder:"收货人联系电话"},model:{value:t.addressData.telphone,callback:function(e){t.$set(t.addressData,"telphone",e)},expression:"addressData.telphone"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"item-title"},[t._v("收货地址:")]),n("v-uni-view",{staticClass:"item-input"},[n("picker-address",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._v(t._s(t.addressData.city))])],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"item-title"},[t._v("详细地址:")]),n("v-uni-view",{staticClass:"item-input"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入详细地址"},model:{value:t.addressData.address,callback:function(e){t.$set(t.addressData,"address",e)},expression:"addressData.address"}})],1)],1),n("v-uni-view",{staticClass:"default"},[n("v-uni-view",{staticClass:"item-title"},[t._v("默认地址:")]),n("v-uni-view",{staticClass:"item-input"},[n("v-uni-switch",{attrs:{checked:"false",checked:t.addressData.defalut},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.defalutChange.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"button"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveAddress.apply(void 0,arguments)}}},[t._v("保存收货地址")])],1)],1)},a=[]},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"3dba":function(t,e,n){"use strict";n.r(e);var r=n("038d"),i=n("47d5");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("9080");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"107b16ff",null,!1,r["a"],o);e["default"]=c.exports},"47d5":function(t,e,n){"use strict";n.r(e);var r=n("bbfd"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},9080:function(t,e,n){"use strict";var r=n("cb50"),i=n.n(r);i.a},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var d="suspendedStart",f="suspendedYield",h="executing",v="completed",p={},m={};m[o]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(A([])));w&&w!==r&&i.call(w,o)&&(m=w);var g=E.prototype=k.prototype=Object.create(m);_.prototype=g.constructor=E,E.constructor=_,E[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},l.awrap=function(t){return{__await:t}},L(C.prototype),C.prototype[s]=function(){return this},l.AsyncIterator=C,l.async=function(t,e,n,r){var i=new C(b(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(g),g[c]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=A,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function b(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,a=Object.create(i.prototype),o=new $(r||[]);return a._invoke=D(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function _(){}function E(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function e(n,r,a,o){var s=x(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,o)}))}o(s.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function D(t,e,n){var r=d;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw a;return S()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var s=j(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?v:f,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},bbfd:function(t,e,n){"use strict";var r=n("4ea4");n("a15b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),a=r(n("bd0e")),o={components:{pickerAddress:a.default},data:function(){return{id:"",addressData:{username:"",telphone:"",city:"选择地址",address:"",default:!1,sex:1}}},methods:{optionSex:function(t){this.addressData.sex=t},change:function(t){this.addressData.city=t.data.join("")},defalutChange:function(t){this.addressData.default=t.detail.value},saveAddress:function(){this.addressData.id=this.id,this.$request({url:"/member/addressEdit",params:this.addressData}).then((function(t){uni.showToast({title:t.data.msg,icon:"none"}),setTimeout((function(){1===t.data.code&&uni.navigateBack()}),1e3)}))},getAddressInfo:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request({url:"/member/getAddressInfo",params:{id:t.id}});case 2:n=e.sent,r=n.data,t.addressData=r.data;case 5:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){this.id=t.id,this.getAddressInfo()}};e.default=o},cb50:function(t,e,n){var r=n("f802");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("0de6c56c",r,!0,{sourceMap:!1,shadowMode:!1})},f802:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".add-address[data-v-107b16ff]{width:100%;padding:%?30?%}.item[data-v-107b16ff]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?90?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #e5e5e5}.item-title[data-v-107b16ff]{width:%?140?%;margin-right:%?20?%;line-height:%?90?%}.item-input uni-input[data-v-107b16ff]{height:%?90?%}.button[data-v-107b16ff]{position:absolute;bottom:%?50?%;left:0;right:0;margin:auto;height:%?80?%;width:%?600?%;border-radius:%?40?%;overflow:hidden}.item-sex[data-v-107b16ff]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item-sex>uni-view[data-v-107b16ff]{padding:%?8?% %?20?%;border:1px solid #e5e5e5;margin-right:%?20?%;font-size:%?24?%;color:#999}.default[data-v-107b16ff]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?20?%}.sex[data-v-107b16ff]{background-color:#1ec8ff;color:#fff!important}",""]),t.exports=e}}]);