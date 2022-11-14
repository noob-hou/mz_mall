<template>
  <view class="navbar">
      <view class="search" @click="goSearch">
          <image src="@/static/sousuo2.png" mode=" scaleToFill" />
      </view>
      <view class="logo">
		  <image src="@/static/logo.png" mode="widthFix"/>
	  </view>
	  <!-- #ifndef MP-WEIXIN -->
      <view class="cart">
		  <image src="@/static/tabbar3.png" mode="scaleToFill" />
	  </view>
       <!-- #endif -->
	   <!-- #ifdef MP-WEIXIN -->
	   <view style="width: 40px;"></view>
	   <!-- #endif -->
  </view>
</template>

<script>
export default {
 methods: {
     goSearch(){
         uni.navigateTo({
              url: '/pages/search/search'
         });
     }
 },
}
</script>

<style>
.navbar{
    display: flex;
    height: 110rpx;
    width: 100%;
    align-items: center;
    justify-content: space-between;
	/* #ifdef MP-WEIXIN */
	margin-top: 30rpx;
	/* #endif */
}
.navbar .search image,
.navbar .cart image{
    width: 40rpx;
    height: 40rpx;
    margin: 20rpx;
}
.navbar .logo image{
   width: 200rpx;
   height: 40rpx;
}
</style>