<template>
  <view class="product-list">
    <template v-if="activeWidth===2">
      <view class="product" v-for="(item1, index1) in productList">
      <navigator :url="'/pages/detail/detail?id=' + item1.id" redirect>
        <view class="product-img">
          <image :src="baseUrl + item1.mainimage" mode="widthFix" />
        </view>
        <view class="product-title">{{ item1.smalltitle }}</view>
        <view class="product-summary">
            <view class="th">免息</view>
            <view class="name">{{ item1.summary }}</view>
        </view>
        <view class="product-price">￥{{ item1.price }}</view>
      </navigator>
    </view>
    </template>
    <template v-if="activeWidth===1">
      <view class="product1" v-for="(item1, index1) in productList" >
      <navigator :url="'/pages/detail/detail?id=' + item1.id" redirect>
        <view class="product-img1">
          <image :src="baseUrl + item1.mainimage" mode="widthFix" />
        </view>
        <view class="product1-content">
          <view class="product-title1">{{ item1.smalltitle }}</view>
        <view class="product-summary1">
            <text class="th1">免息</text>
            <text class="name1">{{ item1.summary }}</text>
        </view>
        <view class="product-price1">￥{{ item1.price }}</view>
        </view>
      </navigator>
    </view>
    </template>
  </view>
</template>

<script>

export default {
    props:{
       productList:{
           type:Array,
           default(){
               return []
           }
       },
       activeWidth:{
         type:Number,
         default(){
           return 2
         }
       }
    },
    data() {
      return {
        baseUrl : 'http://39.98.125.45:8090/uploads/'
      }
    },
};
</script>

<style>
.product-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 560rpx;
  padding: 30rpx;
  border-bottom: 10rpx solid #f4f4f4;
  border-right: 10rpx solid #f4f4f4;
  margin-right: -10rpx;
}
.product-img {
  width: 316rpx;
  height: 316rpx;
}
.product-title {
  width: 316rpx;
  text-align: center;
  height: 50rpx;
  line-height: 50rpx;
  margin-bottom: 10rpx;
  font-size: 28rpx;
}
.product-summary {
  display: flex;
  width: 100%;
  height: 40rpx;
  line-height: 40rpx;
  font-size: 24rpx;
  border: 2px solid #cb0407;
  margin-bottom: 10rpx;
}
.product-price {
  color: #c00;
  font-size: 28rpx;
  width: 100%;
  text-align: center;
}
.th {
  background-color: #c00;
  color: #fff;
  min-width: 70rpx;
  line-height: 40rpx;
  text-align: center;
}
.name {
  line-height: 40rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 一列显示 */
.product1 {
  display: flex;
  width: 100%;
  height: 210rpx;
  border-bottom: 2px solid #f4f4f4;
}
.product1 navigator{
  display: flex;
}
.product1-content{
  width: calc(100% - 200rpx) !important;
}
.product-img1 {
  width: 200rpx;
  height: 200rpx;
  overflow: hidden;
}
.product-title1{
  width: 100%;
  height: 54rpx;
  line-height: 54rpx;
}
.product-summary1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: auto;
  font-size: 24rpx;
  color: #999;
  overflow: hidden;
}
.product-price1 {
  color: #c00;
  font-size: 28rpx;
  width: 100%;
}
.name1{
  width: 100%;
}
.th1 {
  background-color: #c00;
  color: #fff;
  min-width: 70rpx;
  line-height: 40rpx;
  text-align: center;
  margin-right: 10rpx;
}
</style>