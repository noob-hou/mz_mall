<template>
  <view class="phone-type">
      <view class="phone-type-item" v-for="(item,index) in phoneTypeList" :key="index">
        <navigator :url="item.link" redirect>
            <view class="phone-type-img">
            <image :src="baseUrl+item.image" mode="widthFix" />
        </view>
        <view class="phone-type-title">{{item.title}}</view>
        </navigator>
      </view>
  </view>
</template>

<script>
export default {
props:{
     phoneTypeList:{
         type:Array,
         default(){
             return []
         }
     }
 },
 data() {
     return {
         baseUrl : 'http://39.98.125.45:8090/uploads/'
     }
 },
}
</script>

<style>
.phone-type{
    width: 100%;
    height: 450rpx;
    display: flex;
    padding-top: 50rpx;
    border-bottom: 40rpx solid #f4f4f4;
    justify-content:space-around;
}
.phone-type-item{
    flex: 1;
    text-align: center;
}
.phone-type-img{
    width: 200rpx;
    height: 200rpx;
}
.phone-type-title{
    font-size: 24rpx;
    line-height: 150rpx;
    height: 150rpx;
    color: #000;
}
</style>