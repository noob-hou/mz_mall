<template>
  <view class="cate-list-left">
   <scroll-view :scroll-top="scrollTop" scroll-y  class="scrollhg" >
    <view
      class="left-list-item"
      v-for="(item, index) in cateleftList"
      :key="item.id"
      @click="listToggle(index)"
      ><text :class="currentIndex === index ? 'textactive' : ''">{{
        item.catename
      }}</text></view
    >
  </scroll-view>
  </view>
</template>

<script>
export default {
  props: {
    cateleftList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
      scrollTop:0
    };
  },
  methods: {
    //点击切换列表
    listToggle(index) {
      this.currentIndex = index;
	  this.scrollTop = index*uni.upx2px(100)
	  uni.$emit('listToggle',index)
    },
  },
  mounted() {
  	uni.$on('scroll',index=>{
		this.currentIndex = index
		this.scrollTop = index*uni.upx2px(100)
	})
  }
};
</script>

<style>
.cate-list-left {
  width: 200rpx;
  background-color: #f7f7f7;
  position: absolute;
  top: 110rpx;
  left: 0;
  overflow: hidden;
}
.left-list-item {
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;

}
.textactive {
  display: block;
  width: 100%;
  background-color: #fff;
  border-left: 4px solid #0cb8e6;
}
.scrollhg{
    height: calc(100vh - 110rpx);
    padding-bottom: 110rpx;
}
</style>