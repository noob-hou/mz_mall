<template>
  <view class="pay">
    <view class="pay-order">
      <view class="order-number">订单号:{{ payInfo.ordernum }}</view>
      <view class="order-price"
        >￥<text class="price">{{ payInfo.allprice }}</text></view
      >
      <view class="order-time">最迟支付时间:{{ payInfo.end_time }}</view>
    </view>
    <view style="font-size: 24rpx">请选择支付方式:</view>
    <view
      class="pay-item"
      v-for="(item, index) in payType"
      :key="item.id"
      @click="optionsPayType(item.id)"
    >
      <view class="item-text">
        <i :class="item.icon" :style="'color:' + item.iconColor"></i
        ><text>{{ item.txt }}</text>
      </view>
      <radio :checked="currentIndex === index" />
    </view>
    <view class="confirm-pay" @click="confirmPay">确认支付</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      payType: [
        {
          id: 0,
          icon: "iconfont icon-weixinzhifu",
          iconColor: "#17cc1a",
          txt: "微信支付",
        },
        {
          id: 1,
          icon: "iconfont icon-zhifubao",
          iconColor: "#0096df",
          txt: "支付宝",
        },
      ],
      currentIndex: 0,
      payInfo: {},
    };
  },
  onLoad(e) {
    this.getPayInfo(e.id);
    uni.getProvider({
      service: "payment",
      success: (res) => {
      },
    });
  },
  methods: {
    //切换支付方式
    optionsPayType(index) {
      this.currentIndex = index;
    },
    //获取订单数据
    async getPayInfo(id) {
      const { data: res } = await this.$request({
        url: "/member/payinfo",
        params: { id },
      });
      this.payInfo = res.data;
    },
    //confirmPay支付
    async confirmPay() {
		let payType=''
      if (this.currentIndex === 1) {
		 payType = 'alipay'
      }else if(this.currentIndex === 0){
		  payType = 'wxpay'
	  }
	  const res = await this.getPay(payType);
	  uni.requestPayment({
	    provider: payType,
	    orderInfo: res,
	    success: (data) => {
	    	uni.redirectTo({
	    		url:'payStatus?status=1'
	    	})
	    },
		fail:()=>{
			uni.redirectTo({
				url:"payStatus?status=0"
			})
		}
	  });
    },
    //获取支付信息
    getPay(type) {
        return new Promise(resolve=>{
			uni.request({
			  url: `https://demo.dcloud.net.cn/payment/?payid=${type}&total=0.01`,
			  success: (res) => {
			    resolve(res.data)
			  },
			});
		})
    },
  },
};
</script>

<style>
.pay {
  padding: 80rpx 50rpx 0 50rpx;
}
.pay-order {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 58rpx;
}
.order-number,
.order-time {
  font-size: 24rpx;
  color: #999;
}
.order-price {
  margin: 10rpx;
}
.price {
  font-size: 70rpx;
}
.confirm-pay {
  position: absolute;
  bottom: 120rpx;
  left: 80rpx;
  right: 80rpx;
  margin: auto;
  height: 80rpx;
  line-height: 80rpx;
  border-radius: 40rpx;
  text-align: center;
  color: #fff;
  background-color: #0bbaef;
}
.pay-item {
  width: 100%;
  height: 76rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10rpx;
}
.item-text {
  display: flex;
}
.item-text i {
  display: block;
  margin-right: 32rpx;
  width: 16rpx;
}
.pay-item radio {
  transform: scale(0.7);
}
</style>
