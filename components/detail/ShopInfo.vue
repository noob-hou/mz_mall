<template>
  <view class="shop-info">
    <view class="shop-title">{{ shopInfo.title }}</view>
    <view class="shop-summary">{{ shopInfo.summary }}</view>
    <view class="shop-price">
      <view class="price">
        <view class="newprice">￥{{ shopInfo.newPrice }}</view>
        <view class="oldprice">￥{{ shopInfo.oidPrice }}</view>
      </view>
      <view class="sale">月销量:{{ shopInfo.sale }}件</view>
    </view>
    <view class="service">
      <view class="service-item" v-for="(item, index) in shopInfo.serviceList">
        <view class="serve-icon">
          <image :src="baseUrl + item.image" mode="widthFix" />
        </view>
        <text class="serve-text">{{ item.title }}</text>
        <view class="icon" @click="popUpClick">
        <image src="~@/static/xiangyou.png" mode="widthFix"></image>
      </view>
      </view>
    </view>
    <pop-up ref="popup" height="height:60%">
      <view class="service-head">服务说明</view>
      <view style="margin-bottom:40rpx" v-for="(item, index) in shopInfo.serviceList">
        <view class="serve-icon" style="float:left">
          <image :src="baseUrl + item.image" mode="widthFix" />
        </view>
        <text class="serve-text" style="color:#000">{{ item.title }}</text>
        <view class="service-summary">{{item.summary}}</view>
      </view>
      <view class="confirm" @click="CloseClick">确定</view>
    </pop-up>
  </view>
</template>

<script>
import PopUp from '../PopUp.vue';
export default {
  components: { PopUp },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      baseUrl : 'http://39.98.125.45:8090/uploads/'
    }
  },
  methods: {
    popUpClick(){
     this.$refs.popup.show = true
    },
    CloseClick(){
      this.$refs.popup.show = false
    }
  },
};
</script>

<style scoped>
.shop-info {
  padding: 24rpx 30rpx;
}
.shop-title {
  position: relative;
  line-height: 50rpx;
  font-size: 28rpx;
  text-indent: 90rpx;
  color: #000;
  margin-bottom: 10rpx;
}
.shop-title::before {
  position: absolute;
  left: 0;
  top: 0;
  content: "新品";
  width: 70rpx;
  text-align: center;
  height: 40rpx;
  background-color: #1fb1ea;
  color: #fff;
  line-height: 40rpx;
  text-indent: 0;
}
.shop-summary {
  color: #999;
  margin-bottom: 20rpx;
}
.shop-price {
  display: flex;
  justify-content: space-between;
  color: #999;
  border-bottom: 1px solid #999;
  height: 83rpx;
}
.shop-price .price {
  display: flex;
  align-items: center;
}
.shop-price .price .newprice {
  font-size: 36rpx;
  color: #f0415f;
}
.shop-price .price .oldprice {
  text-decoration: line-through;
}
.service {
  position: relative;
  width: 100%;
  height: 100rpx;
  border-bottom: 20rpx solid #f7f7f7;
}
.service > view {
  float: left;
  height: 100%;
  line-height: 80rpx;
}
.service-item {
  display: flex;
  align-items: center;
  margin-right: 20rpx;
}
.serve-icon {
  display: block;
  width: 35rpx;
  height: 35rpx;
  margin: 5rpx;
  font-size: 0;
}
.serve-text {
  font-size: 24rpx;
  color: #a3a3a3;
}

.icon {
  width: 35rpx;
  height: 35rpx;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.service-head{
  height: 110rpx;
  width: 100%;
  text-align: center;
  line-height: 110rpx;
  font-size: 32rpx;
}
.service-summary{
  color: #999;
  font-size: 24rpx;
}
.confirm{
  width: 100%;
  height: 90rpx;
  color: #Fff;
  background-color: #00c3f5;
  text-align: center;
  line-height: 90rpx;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>