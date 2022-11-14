
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/category/category","pages/cart/cart","pages/detail/detail","pages/login/login","pages/register/register","pages/user/user","pages/address/address","pages/address/addAddress","pages/address/editAddress","pages/order/order","pages/pay/pay","pages/pay/payStatus","pages/order/orderlist","pages/order/orderDetail","pages/search/search","pages/shopList/shopList"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"魅族手机商城","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabbar1.png","selectedIconPath":"static/tabbar1-1.png"},{"pagePath":"pages/category/category","text":"分类","iconPath":"static/tabbar2.png","selectedIconPath":"static/tabbar2-1.png"},{"pagePath":"pages/cart/cart","text":"购物车","iconPath":"./static/tabbar3.png","selectedIconPath":"static/tabbar3-1.png"},{"pagePath":"pages/user/user","text":"用户","iconPath":"static/tabbar4.png","selectedIconPath":"static/tabbar4-1.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"mz_mall","compilerVersion":"3.1.22","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationStyle":"custom","scrollIndicator":"none","titleNView":false}},{"path":"/pages/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商品分类","navigationBarBackgroundColor":"#FFFFFF","scrollIndicator":"none","bounce":"none"}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车","navigationBarBackgroundColor":"#FFFFFF","scrollIndicator":"none","bounce":"none"}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false,"titleNView":{"buttons":[{"type":"share"}]}}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"请登录","enablePullDownRefresh":false}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"注册 ~欢迎加入","enablePullDownRefresh":false}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"地址管理","navigationBarBackgroundColor":"#FFFFFF","enablePullDownRefresh":false}},{"path":"/pages/address/addAddress","meta":{},"window":{"navigationBarTitleText":"添加地址","enablePullDownRefresh":false}},{"path":"/pages/address/editAddress","meta":{},"window":{"navigationBarTitleText":"编辑地址","enablePullDownRefresh":false}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"支付页面","enablePullDownRefresh":false}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"支付订单","enablePullDownRefresh":false}},{"path":"/pages/pay/payStatus","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"支付状态","enablePullDownRefresh":false}},{"path":"/pages/order/orderlist","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"我的订单","enablePullDownRefresh":true}},{"path":"/pages/order/orderDetail","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"订单详情","enablePullDownRefresh":false}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"搜索","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#f5f5f5"}},{"path":"/pages/shopList/shopList","meta":{},"window":{"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
