(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shopList-shopList"],{1501:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("6114")),c=(a(i("5d97")),{components:{productList:n.default},data:function(){return{product:[],keyword:"",listType:2,flag:!0}},methods:{getSearchData:function(){var t=this;uni.request({url:"https://h.0x07.cn/api/index",success:function(e){var i=e.data.data.cate;"手机"==t.keyword||"魅族"==t.keyword?t.product=i[0].product:"耳机"==t.keyword||"蓝牙耳机"==t.keyword?t.product=i[1].product:"壳膜套装"==t.keyword||"数据线"==t.keyword||"充电宝"==t.keyword||"手机膜"==t.keyword?t.product=i[2].product:"衣服"==t.keyword||"路由器"==t.keyword||"牙刷"==t.keyword?t.product=i[3].product:t.product=[]}})},search:function(){this.getSearchData()},goback:function(){uni.navigateBack()},toggleList:function(){this.flag=!this.flag,this.flag?this.listType=2:this.listType=1}},onLoad:function(t){this.keyword=t.keyword,this.getSearchData()}});e.default=c},"39e7":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{productList:{type:Array,default:function(){return[]}},activeWidth:{type:Number,default:function(){return 2}}},data:function(){return{baseUrl:"https://h.0x07.cn/uploads/"}}};e.default=a},4460:function(t,e,i){"use strict";i.r(e);var a=i("1501"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);e["default"]=n.a},"5d97":function(t,e,i){"use strict";function a(t){uni.showLoading({title:"加载中"});var e="https://h.0x07.cn/api";return new Promise((function(i,a){uni.request({url:e+t.url,timeout:5e3,data:t.params,success:function(t){i(t)},complete:function(){setTimeout((function(){uni.hideLoading()}),1e3)}})}))}i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a;e.default=n},6114:function(t,e,i){"use strict";i.r(e);var a=i("b22d"),n=i("85e6");for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);i("7d93");var r,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"ef6423c6",null,!1,a["a"],r);e["default"]=s.exports},"6ecc":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".product-list[data-v-ef6423c6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.product[data-v-ef6423c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:50%;height:%?560?%;padding:%?30?%;border-bottom:%?10?% solid #f4f4f4;border-right:%?10?% solid #f4f4f4;margin-right:%?-10?%}.product-img[data-v-ef6423c6]{width:%?316?%;height:%?316?%}.product-title[data-v-ef6423c6]{width:%?316?%;text-align:center;height:%?50?%;line-height:%?50?%;margin-bottom:%?10?%;font-size:%?28?%}.product-summary[data-v-ef6423c6]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?40?%;line-height:%?40?%;font-size:%?24?%;border:2px solid #cb0407;margin-bottom:%?10?%}.product-price[data-v-ef6423c6]{color:#c00;font-size:%?28?%;width:100%;text-align:center}.th[data-v-ef6423c6]{background-color:#c00;color:#fff;min-width:%?70?%;line-height:%?40?%;text-align:center}.name[data-v-ef6423c6]{line-height:%?40?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\r\n/* 一列显示 */.product1[data-v-ef6423c6]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?210?%;border-bottom:2px solid #f4f4f4}.product1 uni-navigator[data-v-ef6423c6]{display:-webkit-box;display:-webkit-flex;display:flex}.product1-content[data-v-ef6423c6]{width:calc(100% - %?200?%)!important}.product-img1[data-v-ef6423c6]{width:%?200?%;height:%?200?%;overflow:hidden}.product-title1[data-v-ef6423c6]{width:100%;height:%?54?%;line-height:%?54?%}.product-summary1[data-v-ef6423c6]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;width:auto;font-size:%?24?%;color:#999;overflow:hidden}.product-price1[data-v-ef6423c6]{color:#c00;font-size:%?28?%;width:100%}.name1[data-v-ef6423c6]{width:100%}.th1[data-v-ef6423c6]{background-color:#c00;color:#fff;min-width:%?70?%;line-height:%?40?%;text-align:center;margin-right:%?10?%}",""]),t.exports=e},"7d93":function(t,e,i){"use strict";var a=i("805d"),n=i.n(a);n.a},"805d":function(t,e,i){var a=i("6ecc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c71e9246",a,!0,{sourceMap:!1,shadowMode:!1})},"80e6":function(t,e){t.exports="data:image/png;base64,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"},"810b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"shop-list"},[a("v-uni-view",{staticClass:"sticky"},[a("v-uni-view",{staticClass:"status_bar"}),a("v-uni-view",{staticClass:"navbar"},[a("v-uni-view",{staticClass:"back iconfont icon-xiangzuo",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"search-box"},[a("v-uni-image",{attrs:{src:i("80e6"),mode:"widthFix"}}),a("v-uni-input",{attrs:{type:"text"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1),a("v-uni-view",{staticClass:"nav-tabbar"},[a("v-uni-view",{staticClass:"nav-tabbar-item"},[t._v("默认排序")]),a("v-uni-view",{staticClass:"nav-tabbar-item",staticStyle:{display:"flex"}},[a("v-uni-text",[t._v("价格")]),a("v-uni-view",{staticClass:"price-icon"},[a("v-uni-view",{staticClass:"iconfont icon-shang"}),a("v-uni-view",{staticClass:"iconfont icon-xia"})],1)],1),a("v-uni-view",{staticClass:"nav-tabbar-item"},[t._v("销量排序")]),a("v-uni-view",{staticClass:"nav-tabbar-item iconfont icon-zhankai",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleList.apply(void 0,arguments)}}})],1)],1),a("product-list",{attrs:{productList:t.product,activeWidth:t.listType}})],1)},c=[]},"85e6":function(t,e,i){"use strict";i.r(e);var a=i("39e7"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);e["default"]=n.a},"96f2":function(t,e,i){"use strict";var a=i("aa50"),n=i.n(a);n.a},aa50:function(t,e,i){var a=i("f10c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ddb61164",a,!0,{sourceMap:!1,shadowMode:!1})},b22d:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"product-list"},[2===t.activeWidth?t._l(t.productList,(function(e,a){return i("v-uni-view",{staticClass:"product"},[i("v-uni-navigator",{attrs:{url:"/pages/detail/detail?id="+e.id,redirect:!0}},[i("v-uni-view",{staticClass:"product-img"},[i("v-uni-image",{attrs:{src:t.baseUrl+e.mainimage,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"product-title"},[t._v(t._s(e.smalltitle))]),i("v-uni-view",{staticClass:"product-summary"},[i("v-uni-view",{staticClass:"th"},[t._v("免息")]),i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.summary))])],1),i("v-uni-view",{staticClass:"product-price"},[t._v("￥"+t._s(e.price))])],1)],1)})):t._e(),1===t.activeWidth?t._l(t.productList,(function(e,a){return i("v-uni-view",{staticClass:"product1"},[i("v-uni-navigator",{attrs:{url:"/pages/detail/detail?id="+e.id,redirect:!0}},[i("v-uni-view",{staticClass:"product-img1"},[i("v-uni-image",{attrs:{src:t.baseUrl+e.mainimage,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"product1-content"},[i("v-uni-view",{staticClass:"product-title1"},[t._v(t._s(e.smalltitle))]),i("v-uni-view",{staticClass:"product-summary1"},[i("v-uni-text",{staticClass:"th1"},[t._v("免息")]),i("v-uni-text",{staticClass:"name1"},[t._v(t._s(e.summary))])],1),i("v-uni-view",{staticClass:"product-price1"},[t._v("￥"+t._s(e.price))])],1)],1)],1)})):t._e()],2)},c=[]},c963:function(t,e,i){"use strict";i.r(e);var a=i("810b"),n=i("4460");for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);i("96f2");var r,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"ec47939e",null,!1,a["a"],r);e["default"]=s.exports},f10c:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".shop-list[data-v-ec47939e]{padding:0 %?20?%}.status_bar[data-v-ec47939e]{width:100%;height:0;background-color:#fff}.navbar[data-v-ec47939e]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f4f4f4}.back[data-v-ec47939e]{width:%?60?%;text-align:center;line-height:%?60?%;font-size:%?40?%}.search-box[data-v-ec47939e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?60?%;width:100%;border-radius:%?30?%;background-color:#f4f4f4}.search-box uni-image[data-v-ec47939e]{width:%?40?%;margin:%?15?%}.search-box uni-input[data-v-ec47939e]{width:100%;color:#999}.nav-tabbar[data-v-ec47939e]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?90?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f4f4f4}.nav-tabbar-item[data-v-ec47939e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;border-right:1px solid #f4f4f4;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?30?%}.price-icon uni-view[data-v-ec47939e]{height:50%;line-height:%?16?%}.sticky[data-v-ec47939e]{position:-webkit-sticky;position:sticky;top:0;background-color:#fff;z-index:9}",""]),t.exports=e}}]);