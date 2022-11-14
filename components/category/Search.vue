<template>
<view class="search">
  <navigator url="/pages/search/search" redirect class="search-input">
     <view class="seach-img">
         <image src="~@/static/search.png" mode="widthFix" />
     </view>
     <view class="seach-txt">搜索全部</view>
  </navigator>
</view>
</template>

<script>
</script>

<style>
.search{
    width: 100%;
    height: 110rpx;
    padding: 20rpx 30rpx;
    border-bottom: 10rpx solid #f7f7f7;
}
.search-input{
    background-color: #f7f7f7;
    height: 70rpx;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rpx;
    
}
.seach-img{
  width: 38rpx;
  height: 38rpx;
  margin-right: 10rpx;
}
.seach-txt{
    font-size: 28rpx;
    color: #999;
}
</style>
