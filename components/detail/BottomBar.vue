<template>
  <view class="bottom">
    <view class="bottom-bar">
      <view class="bottom-bar-left">
        <view class="bottom-bar-home" @click="goTabbarPage(1)">
          <image src="~@/static/tabbar1.png" mode="widthFix" />
          <text>首页</text>
        </view>
        <view class="bottom-bar-cart" @click="goTabbarPage(2)">
          <image src="~@/static/tabbar3.png" mode="widthFix" />
          <text>购物车</text>
        </view>
      </view>
      <view class="bottom-bar-right">
        <view @click="addCart">加入购物车</view>
        <view @click="addCart">立即购买</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    // 点击跳转
    goTabbarPage(index) {
      let url = "";
      if (index === 1) {
        url = "/pages/index/index";
        uni.switchTab({
          url,
        });
      } else {
        url = "/pages/cart/cart";
        this.router(url, 2);
      }
    },
    addCart() {
       uni.$emit('addCart')
    },
  },
};
</script>

<style>
.bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
.bottom-bar {
  width: 100%;
  height: 100rpx;
  display: flex;
  justify-content: center;
}
.bottom-bar-left {
  display: flex;
  flex: 3;
}
.bottom-bar-left > view {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 24rpx;
}
.bottom-bar-left > view image {
  width: 40rpx;
  height: 40rpx;
  font-size: 0;
}
.bottom-bar-right {
  flex: 7;
  display: flex;
}
.bottom-bar-right > view {
  height: 100%;
  flex: 1;
  color: #fff;
  text-align: center;
  line-height: 100rpx;
}
.bottom-bar-right view:nth-child(1) {
  background-color: #0ebcef;
}
.bottom-bar-right view:nth-child(2) {
  background-color: #017cfe;
}
</style>