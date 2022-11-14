<template>
 <transition name="slide-fade">
   <view class="pop-up" v-if="show">
    <view class="content" :style="height">
        <view class="close iconfont icon-guanbi" @click="close"></view>
        <view class="content">
         <slot></slot>
        </view>
    </view>
  </view>
 </transition>
</template>

<script>
export default {
props:{
 height:String
},
data() {
    return {
        show:false
    }
},
methods: {
    close(){
       this.show = false 
    }
},
}
</script>

<style>
.pop-up{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    z-index: 9;
}
.content{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 20rpx 30rpx;
    border-top-right-radius: 30rpx;
    border-top-left-radius: 30rpx;
}
.close{
    position:absolute;
    top: 10px;
    right: 10px;
    width: 40rpx;
    height: 40rpx;
    border:1px solid #999;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    line-height: 40rpx;
    font-size: 20px;
    font-weight: bold;
    z-index: 9;
}
.content{
    width: 100%;
    height: 100%;
}
.slide-fade-enter-active {
  transition: all .5s ease-in-out;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(0);
  opacity: 0;
}
</style>