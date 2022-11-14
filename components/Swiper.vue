<template>
  <swiper class="swiper" indicator-dots autoplay :interval="3000"  circular style="height:395rpx">
      <swiper-item v-for="(item,index) in bannerList" :key="index">
          <navigator :url="item.link" redirect hover-class="className">
              <image :src="baseUrl+item.image" mode="scaleToFill" style="width: 100%;"></image>
          </navigator>
      </swiper-item>
  </swiper>
</template>

<script>
export default {
 props:{
     bannerList:{
         type:Array,
         default(){
             return []
         }
		 
     },
 },
 data() {
     return {
         baseUrl : 'http://39.98.125.45:8090/uploads/'
     }
 },
}
</script>

<style>
.swiper{
    width: 100%;
}
</style>