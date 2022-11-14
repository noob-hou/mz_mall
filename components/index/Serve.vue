<template>
  <view class="serve">
      <view v-for="(item,index) in serveList" :key="index">
        <view class="serve-icon">
            <image :src="baseUrl+item.image" mode="widthFix" />
        </view>
        <text class="serve-text">{{item.title}}</text> 
      </view>
  </view>
</template>

<script>
export default {
 props:{
     serveList:{
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
.serve{
    display: flex;
    height: 70rpx;
    width: 100%;
    background-color: #f7f7f7;
    align-items: center;
}
.serve>view{
    flex: 1;
    display: flex;
    align-items: center;
}
.serve-icon{
    display: block;
    width: 35rpx;
    height: 35rpx;
    margin: 10rpx;
}
.serve-text{
    font-size: 24rpx;
    color: #a3a3a3;
}
</style>