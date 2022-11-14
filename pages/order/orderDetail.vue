<template>
  <view class="order">
     <view class="order-status">
         订单状态：<text style="color:#00c3f5">{{orderData.status |orderStatus}}</text>
     </view>
    <view class="address" v-if="orderData.address">
      <view class="address-box">
        <view class="icon iconfont icon-dingwei"></view>
        <view class="address-content">
          <view class="address-user">
            <text>收货人:{{orderData.username}}</text>
            <text>{{orderData.telphone}}</text>
          </view>
          <view class="address-detail">
            <view>{{orderData.city}}</view>
            <view>{{orderData.address}}</view>
          </view>
        </view>
        <view class="icon-more iconfont icon-xiangyou" @click="goAddressList"></view>
      </view>
      <view class="address-line"></view>
    </view>
    <view class="address-empty"  @click="goAddress" v-else>+ 暂无收货地址，请添加</view>
    <view class="shop-list">
      <view class="shop-item" v-for="(item1,index) in orderData.shop" :key="index">
        <view class="cart-img">
          <image :src="baseUrl+item1.mainimage" mode="scaleToFill"></image>
        </view>
        <view class="item-content">
          <view class="item-title">{{item1.title}}</view>
          <view class="item-attrbute">{{item1.attr_0+' '+item1.attr_1}}</view>
          <view class="item-total">
            <view class="item-price">￥{{item1.price}}</view>
            <view class="item-num"> x{{item1.number}} </view>
          </view>
        </view>
      </view>
    </view>
    <view class="order-item">
      <view class="item">
        <view>应付金额</view>
        <view>￥{{orderData.allprice}}</view>
      </view>
      <view class="item">
        <view>配送方式</view>
        <view>圆通快递</view>
      </view>
      <view class="leave-message">
        <textarea placeholder="备注信息" :value="leaveMess" />
      </view>
      <view class="item">
        <view>总计:{{orderData.allprice}}元(含快递费{{11}}元)</view>
        <view>共{{orderData.number|shopNum}}件商品</view>
      </view>
	  <view class="item">
	      <view>订单编号</view>
	      <view>{{orderData.ordernum}}</view>
	  </view>
      <view class="item" v-if="orderData.paytype">
        <view>支付方式</view>
        <view>{{orderData.paytype}}</view>
    </view>
    <view class="item" v-if="orderData.paytime">
        <view>支付时间</view>
        <view>{{orderData.paytime}}</view>
    </view>
    </view>
    
    <view class="bottom">
      <view class="bottom-bar" v-if="orderData.status === 1">
        <view @click="goPay">去支付</view>
        <view style="background-color:#f4f4f4;color:#000" @click="cancelOrder">取消</view>
      </view>
	  <view class="bottom-bar" v-if="orderData.status === 3">
	    <view>查看物流</view>
	    <view style="background-color:#f4f4f4;color:#000">确认订单</view>
	  </view>
	  <view class="bottom-bar" v-if="orderData.status === 4">
	    <view>去评价</view>
	  </view>
    </view>
    <view class="bottom-empty"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      orderData:{},
	  leaveMess:'',
	  index:0,
	  orderid:'',
    baseUrl : 'http://39.98.125.45:8090/uploads/'
    };
  },
  filters: {
    orderStatus(value) {
      if (value === 1) {
        return "未付款";
      } else if (value === 2) {
        return "待发货";
      } else if (value === 3) {
        return "已发货";
      } else if (value === 4) {
        return "待评价";
      } else if (value === 5) {
        return "已完成";
      } else if (value === 6) {
        return "已取消";
      }
    },
	shopNum(value){
		let num = 0
		value = value.split(',')
		value.forEach(item=>{
			num+=parseInt(item)
		})
		return num
	}
  },
  methods: {
    //更改快递方式
    bindPickerChange(e) {
      this.index = e.detail.value;
    },
	//如果没有地址跳转添加地址
	goAddress(){
		this.router('/pages/address/addAddress')
	},
	//点击选择地址
	goAddressList(){
		this.router('/pages/address/address?backUrl=order')
	},
	//获取订单详情数据
	async getOrderDetail(id){
		const{data:res} = await this.$request({url:'/member/orderdetail',params:{
			orderid:id
		}})
		this.orderData = res.data
	},
	// 去支付
	goPay(){
		this.router(`/pages/pay/pay?id=${this.orderid}`)
	},
	// 取消订单
	cancelOrder(){
		let list =['不想购买了','地址填写错误','买错了']
		uni.showActionSheet({
			itemList:list,
			success: res => {
				// this.$request({url:'/member/orderCancel',params:{
				// 	oderid:this.orderData.orderid,
				// 	cause:list[res.tapIndex]
				// }}).then(res=>{
				// 	console.log(res)
				// })
			 this.orderData.status = 6
			}
		})
	}
  },
  onLoad(e) {
	this.orderid=e.orderid
  	this.getOrderDetail(e.orderid)
  }
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
  justify-content: flex-end;
  height: 100rpx;
  background-color: #fff;
}
.bottom-bar > view {
  width: 175rpx;
  text-align: center;
  line-height: 50rpx;
  height: 50rpx;
  color: #fff;
  background-color: #0bbaef;
  border-radius: 25rpx;
  margin-right: 20rpx;
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
.order-status{
    display: flex;
    background-color: #fff;
    height: 100rpx;
    align-items: center;
    padding-left: 20rpx;
}
</style>
