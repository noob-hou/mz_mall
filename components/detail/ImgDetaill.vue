<template>
  <view class="imgdetail">
    <view class="imgdetail-title">
        <view :class="currentIndex===index?'active-color':'title-item'" v-for="(item,index) in title" @click="titleClick(index)">{{item}}</view>
    </view>
    <template v-if="currentIndex===0">
      <uparse :content="detailData.content" :imageProp="{'domain':'39.98.125.45:8090'}"/>
    </template>
    <template v-if="currentIndex===1">
       <view class="shop-params">
        <view class="basic-info">基本信息</view>
        <view class="params">
            <view class="params-item" v-for="item1 in detailData.spec" :key="item1.id">
             <view class="params-item-left">{{item1.specname}}</view>
             <view class="params-item-right">
                 {{item1.specvalue}}
             </view>
            </view>
        </view>
       </view>
    </template>
  </view>
</template>

<script>
	//富文本插件
import uparse from "../gaoyia-parse/parse.vue"
export default {
 components:{
	 uparse
 },
  props: {
    detailData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
data() {
    return {
        title:['图文详情','商品规格'],
        currentIndex:0
    }
},
methods: {
    titleClick(index){
        this.currentIndex=index
    }
},
}
</script>

<style>
.imgdetail-title{
    width: 100%;
    height: 80rpx;
    font-weight: bold;
    display: flex;
    align-items: center;
}
.imgdetail-title>view{
    flex: 1;
    text-align: center;
}
.active-color{
    color: #00c3f5;
    font-weight: bold;
}
.shop-params{
    padding: 20rpx 30rpx;
}
.basic-info{
    background-color: #f7f7f7;
    color: #000;
    width: 100%;
    height: 75rpx;
    line-height: 75rpx;
    padding-left: 30rpx;
    font-weight: bold;
    text-align: center;
}
.params-item{
    display: flex;
    height: 100rpx;
    width: 100%;
    border: 1px solid #e9e9e9;
    align-items: center;
    font-size: 24rpx;
}
.params-item-left{
    flex: 4;
    text-align: center;
    border-right: 1px solid #e9e9e9;
    color: #999;
    height: 100%;
    line-height: 100rpx;
}
.params-item-right{
    height: 100%;
    flex: 7;
    text-align: center;
     line-height: 100rpx;
    border-right: 1px solid #e9e9e9;
    color: #000;
    overflow: hidden;
}
</style>