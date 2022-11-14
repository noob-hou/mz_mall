<template>
  <view class="order">
    <view class="address" v-if="Object.keys(addressInfo).length!==0">
      <view class="address-box">
        <view class="icon iconfont icon-dingwei"></view>
        <view class="address-content">
          <view class="address-user">
            <text>收货人:{{addressInfo.username}}</text>
            <text>{{addressInfo.telphone}}</text>
          </view>
          <view class="address-detail">
            <view>{{addressInfo.city}}</view>
            <view>{{addressInfo.address}}</view>
          </view>
        </view>
        <view class="icon-more iconfont icon-xiangyou" @click="goAddressList"></view>
      </view>
      <view class="address-line"></view>
    </view>
    <view class="address-empty"  @click="goAddress" v-else>+ 暂无收货地址，请添加</view>
    <view class="shop-list">
      <view class="shop-item" v-for="(item1,index) in shopInfo" :key="index">
        <view class="cart-img">
          <image :src="baseUrl+item1.mainimage" mode="scaleToFill"></image>
        </view>
        <view class="item-content">
          <view class="item-title">{{item1.title}}</view>
          <view class="item-attrbute">{{item1.attr_0+' '+item1.attr_1}}</view>
          <view class="item-total">
            <view class="item-price">￥{{item1.price}}</view>
            <view class="item-num"> x{{item1.num}} </view>
          </view>
        </view>
      </view>
    </view>
    <view class="order-item">
      <view class="item">
        <view>应付金额</view>
        <view>￥{{allOrder.price}}</view>
      </view>
      <view class="item">
        <view>配送方式</view>
        <view>
          <picker @change="bindPickerChange" :value="index" :range="logistics">
            <view class="uni-input"
              >{{ logistics[index] }}
              <text class="iconfont icon-xiangyou"></text></view
          ></picker>
        </view>
      </view>
      <view class="leave-message">
        <textarea placeholder="备注信息" :value="leaveMess" />
      </view>
      <view class="item">
        <view>总计:{{totalPrice}}元(含快递费{{logisticsPrice[index]}}元)</view>
        <view>共{{allOrder.num}}件商品</view>
      </view>
    </view>
    <view class="bottom">
      <view class="bottom-bar">
        <view>总计：{{allOrder.num}}件</view>
        <view @click="goPay">支付 {{totalPrice}}元</view>
      </view>
    </view>
    <view class="bottom-empty"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      logistics: [],
      index: 0,
      allOrder: {},
      shopInfo: [],
	  addressInfo:{},
	  logisticsPrice:[],
	  leaveMess:'',
    baseUrl : 'http://39.98.125.45:8090/uploads/'
    };
  },
  computed:{
	  //计算总价格
	  totalPrice(){
		  return this.allOrder.price + parseFloat(this.logisticsPrice[this.index])
	  }
  },
  methods: {
    //更改快递方式
    bindPickerChange(e) {
      this.index = e.detail.value;
    },
    //跳转支付页面
     goPay() {
       if(uni.getStorageSync('addressId')){
		   this.$request({url:'/member/order',params:{
        orderShop:uni.getStorageSync('orderShop'),
		addrressid:uni.getStorageSync('addressId'),
		price:this.totalPrice,
		logistics:this.logistics[this.index],
		message:this.leaveMess
	   }}).then(res=>{
		   if(res.data.code===1){
			    this.router("/pages/pay/pay?id="+res.data.data.id);
		   }
	   })
	   }else{
		   uni.showToast({
			   title: '您还没有选择收货地址',
			   icon:'none'
		   });
	   }
  
    },
    //获取数据
    async getData() {
      let data = uni.getStorageSync("orderShop");
      const { data: res } = await this.$request({
        url: "/member/getBuyShopInfo",
        params: { data },
      });
      this.allOrder = res.data.all;
      this.shopInfo = res.data.shop;
	  res.data.logistics.forEach(item => {
		  this.logistics.push(item.name)
		  this.logisticsPrice.push(item.price)
	  });
    },
	//获取地址数据
	async getAddressData(){
		const {data:res} = await this.$request({url:'/member/getOrderAddress',params:{
			id:uni.getStorageSync('addressId')
		}}) 
		if(res.code===1){
			this.addressInfo= res.data
			uni.setStorageSync('addressId',res.data.id)
		}else{
			return
		}
		
	},
	//如果没有地址跳转添加地址
	goAddress(){
		this.router('/pages/address/addAddress')
	},
	//点击选择地址
	goAddressList(){
		this.router('/pages/address/address?backUrl=order')
	}
  },
  onShow() {
	this.logisticsPrice=[]
	this.logistics=[]
    this.getData();
	this.getAddressData()
  },
};
</script>

<style>
.order {
  width: 100%;
  background-color: #f4f4f4;
  padding: 20rpx 30rpx 0rpx 30rpx;
}
.order > view {
  margin-bottom: 20rpx;
}
.address {
  position: relative;
}
.address-box {
  display: flex;
  align-items: center;
  width: 100%;
  height: 200rpx;
  background-color: #fff;
  border-radius: 20rpx;
}
.icon,
.icon-more {
  width: 100rpx;
  text-align: center;
  font-size: 20px;
}
.address-content {
  flex: 1;
  height: 100%;
}
.address-user {
  height: 70rpx;
  line-height: 90rpx;
  margin: 5rpx;
}
.address-detail {
  line-height: 34rpx;
  color: #999;
  font-size: 24rpx;
}
.address-line {
  height: 8rpx;
  background-image: -webkit-linear-gradient(
    315deg,
    #82c9ff 8px,
    transparent 0,
    transparent 16px,
    #ff8282 0,
    #ff8282 32px,
    transparent 0,
    transparent 0,
    transparent 40px,
    #82c9ff 0,
    #82c9ff
  );
  background-image: linear-gradient(
    135deg,
    #82c9ff 8px,
    transparent 0,
    transparent 16px,
    #ff8282 0,
    #ff8282 32px,
    transparent 0,
    transparent 0,
    transparent 40px,
    #82c9ff 0,
    #82c9ff
  );
  background-color: #fff;
  background-size: 136rpx 8rpx;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.shop-item {
  display: flex;
  width: 100%;
  height: 265rpx;
  padding: 30rpx 0;
  border-bottom: 1px solid #e5e5e5;
  align-items: center;
  background-color: #fff;
}
.cart-img {
  width: 200rpx;
  height: 200rpx;
  font-size: 0;
  display: flex;
  align-items: center;
}
.cart-img image {
  width: 200rpx;
  height: 200rpx;
}
.item-content {
  width: 100%;
  height: 100%;
}
.item-title {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-attrbute {
  color: #999;
}
.item-total {
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-price {
  color: #e20307;
  font-size: 36rpx;
}
.item-num {
  height: 50rpx;
  width: 50rpx;
  color: #999;
  text-align: center;
  margin-right: 20rpx;
}
.order-item {
  background-color: #fff;
  padding-top: 25rpx;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80rpx;
  padding: 0 20rpx;
  margin-bottom: 20rpx;
}
.item > view:nth-child(2) {
  color: #999;
  font-size: 28rpx;
  height: 100%;
  line-height: 80rpx;
}
.leave-message {
  height: 70rpx;
  background-color: #f4f4f4;
  margin-left: 40rpx;
  border-radius: 35rpx;
  margin-bottom: 20rpx;
}
.leave-message textarea {
  height: 100%;
  width: 100%;
  line-height: 70rpx;
  padding-left: 20rpx;
  color: #999;
  font-size: 24rpx;
}
.bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100rpx;
  background-color: #fff;
}
.bottom-bar > view:nth-child(2) {
  width: 300rpx;
  text-align: center;
  line-height: 100rpx;
  color: #fff;
  background-color: #0bbaef;
  border-radius: 50rpx;
}
.bottom {
  height: 100rpx;
  position: fixed;
  bottom: 0;
  left: 30rpx;
  right: 30rpx;
  margin: auto !important;
  z-index: 99;
  background-color: #fff;
}
.address-empty {
  width: 100%;
  height: 85rpx;
  line-height: 85rpx;
  text-align: center;
  background-color: #fff;
  color: #0bbaef;
}
.bottom-empty {
  width: 100%;
  height: 100rpx;
  background-color: #fff;
}
</style>
