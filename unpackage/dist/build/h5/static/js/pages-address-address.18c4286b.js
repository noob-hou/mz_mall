(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{"14ee":function(t,e,n){var i=n("ba31");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("46b205ae",i,!0,{sourceMap:!1,shadowMode:!1})},"3a93":function(t,e,n){"use strict";n.r(e);var i=n("9ba9"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"46f4":function(t,e,n){"use strict";n.r(e);var i=n("5839"),a=n("3a93");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("948f");var r,o=n("f0c5"),d=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"05784c9e",null,!1,i["a"],r);e["default"]=d.exports},5839:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uniSwipeAction:n("4832").default,uniSwipeActionItem:n("abb6").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"address"},[i("v-uni-view",{staticClass:"address-list"},t._l(t.addressList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"list-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.optionsAddress(e.id)}}},[i("uni-swipe-action",[i("uni-swipe-action-item",{attrs:{"right-options":t.options},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(i,n,e.id)}}},[i("v-uni-view",[i("v-uni-view",{staticClass:"info"},[i("v-uni-text",[t._v(t._s(e.username))]),i("v-uni-text",[t._v(t._s(e.telphone))]),"1"===e.default?i("v-uni-text",[t._v("默认")]):t._e()],1),i("v-uni-view",[t._v(t._s(e.city+" "+e.address))])],1)],1)],1)],1)})),1),i("v-uni-navigator",{staticClass:"goAdd",attrs:{url:"/pages/address/addAddress",redirect:!0}},[i("v-uni-button",{attrs:{type:"primary"}},[t._v("添加地址")])],1),t.addressList?t._e():[i("v-uni-view",{staticClass:"empty"},[i("v-uni-image",{attrs:{src:n("deff"),mode:"widthFix"}}),i("v-uni-view",[t._v("用户还没有地址，请添加！")])],1)]],2)},s=[]},"948f":function(t,e,n){"use strict";var i=n("14ee"),a=n.n(i);a.a},"9ba9":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),s={data:function(){return{addressList:[],backUrl:"",options:[{text:"编辑",style:{backgroundColor:"#0bbbef"}},{text:"删除",style:{backgroundColor:"red"}}]}},methods:{onClick:function(t,e,n){var i=this;0===t.index?uni.navigateTo({url:"editAddress?id="+n}):uni.showModal({title:"提示",content:"你确定要删除此地址吗",success:function(t){if(t.confirm){uni.removeStorageSync("addressId");var n=i.addressList[e].id;i.$request({url:"/member/addressDel",params:{id:n}}).then((function(t){1===t.data.code&&uni.showToast({title:t.data.msg,icon:"none"})})),setTimeout((function(){i.getData()}),500)}}})},getData:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request({url:"/member/addressList"});case 2:n=e.sent,i=n.data,t.addressList=i.data;case 5:case"end":return e.stop()}}),e)})))()},optionsAddress:function(t){this.backUrl&&(uni.setStorageSync("addressId",t),this.router("/pages/".concat(this.backUrl,"/").concat(this.backUrl)))}},onShow:function(){this.getData()},onLoad:function(t){this.backUrl=t.backUrl}};e.default=s},ba31:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".address[data-v-05784c9e]{padding:%?35?%;height:calc(100vh - %?100?%)}.list-item[data-v-05784c9e]{border-bottom:1px solid #e5e5e5;padding:%?30?% auto;margin-bottom:%?10?%;touch-action:none}.info uni-text[data-v-05784c9e]{margin-right:%?20?%}.info uni-text[data-v-05784c9e]:nth-child(3){background-color:#1ec8ff;color:#fff;font-size:%?20?%}.goAdd[data-v-05784c9e]{width:calc(100% - %?60?%);position:absolute;bottom:%?50?%;border-radius:%?40?%;right:%?30?%;left:%?30?%;height:%?80?%;margin:auto;overflow:hidden}.empty[data-v-05784c9e]{margin-top:%?200?%;width:100%;text-align:center}.empty uni-view[data-v-05784c9e]{color:#999}",""]),t.exports=e},deff:function(t,e,n){t.exports=n.p+"static/img/address.22e97ed6.png"}}]);