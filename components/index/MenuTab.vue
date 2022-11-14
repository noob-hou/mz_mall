<template>
  <view class="menubar">
     <view v-for="(item,index) in menuBar" :key="index" @click="tabToggle(index)"><text :class="currentIndex===index?'active':''">{{item}}</text></view>
  </view>
</template>

<script>
export default {
props:['current'],
data() {
    return {
        menuBar:['推荐','手机','声学','配件','生活'],
		currentIndex:0,
    }
},
watch:{
	current(data){
		this.currentIndex = data
	}
},
methods: {
    tabToggle(index){
        this.currentIndex = index
		this.$emit('menuTab',index)
    }
},
}
</script>

<style>
.menubar{
    display: flex;
    align-items: center;
    width: 100%;

}
.menubar>view{
    flex: 1;
    font-size: 28rpx;
    height: 110rpx;
    text-align: center;
    line-height: 110rpx;
}
.active{
    border-bottom: 2px solid #048eff;
    color:#0bbbef;
}
</style>