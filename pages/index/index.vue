<template>
  <view class="content">
    <view class="sticky">
		<view class="status_bar"></view>
    	<nav-bar/>
    	<menu-tab :current="index" @menuTab=menuTab />
    </view>
	<swiper class="swiperPage" @change="swiperChange" :current="index" circular>
		<swiper-item>
			<view class="swiper-item">
				<my-swiper :bannerList="banner"/>
				<serve :serveList="serveData"/>
				<phone-type :phoneTypeList="PhoneTypeData"/>
				<advertising :advertisingList="advertisingData"/>
				<floor :floorList="floorData"/>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<view class="banner">
					<image src="http://39.98.125.45:8090/uploads/cate/banners/banner3.jpg" mode=" aspectFill" />
					<product-list :productList="childPageData"/>
				</view>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="http://39.98.125.45:8090/uploads/cate/banners/erji.jpeg" mode=" aspectFill" />
					<product-list :productList="childPageData"/>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item" >
				<image src="http://39.98.125.45:8090/uploads/cate/banners/peijian.jpeg" mode=" aspectFill" />
					<product-list :productList="childPageData"/>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item" >
				<image src="http://39.98.125.45:8090/uploads/cate/banners/shenghuo.jpeg" mode=" aspectFill" />
					<product-list :productList="childPageData"/>
			</view>
		</swiper-item>
	</swiper>
  </view>
</template>

<script>
import requestData from "@/network/request.js";


import MenuTab from "@/components/index/MenuTab.vue";
import NavBar from "@/components/index/NavBar.vue";
import MySwiper from '@/components/Swiper.vue';
import Serve from '@/components/index/Serve.vue';
import PhoneType from '@/components/index/PhoneType.vue';
import Advertising from '@/components/index/Advertising.vue';
import Floor from '@/components/index/Floor.vue';
import ProductList from '../../components/productList.vue';
export default {
  components: { NavBar, MenuTab,MySwiper,Serve,PhoneType, Advertising, Floor,ProductList },
  data() {
    return {
		banner:[],
		serveData:[],
		PhoneTypeData:[],
		advertisingData:[],
		floorData:[],
		floorTop:[],
		index:0,
		childPageData:[]
	};
  },
  onLoad() {
    this.getData();
  },
  methods: {
    //获取主页数据
    async getData() {
      const { data: res } = await requestData({ url: "/index" });
      this.banner = res.data.banner
      this.serveData = res.data.active
	  this.PhoneTypeData = res.data.icon
	  this.advertisingData = res.data.floor
	  this.floorData = this.editFloorData(res.data.cate)
    },
	//对楼层数据处理
	editFloorData(arr){
		for(let i = 0 ;i < arr.length; i++){
			arr[i].content.forEach(item=>{
				item.summary = item.summary.split('|')
			})
			arr[i].product.forEach(item=>{
				item.summary = item.summary.replace(/\【|】/g,'')
			})
		}
		return arr
	},
	//滑动页面
	swiperChange(e){
		this.index = e.detail.current
		if(this.index===0) return;
		this.childPageData = this.floorData[this.index-1].product
	},
	menuTab(data){
		this.index = data
	}
	// getFloorLoca(e){
 //        this.floorTop = e
	// },
  },
};
</script>

<style>
.status_bar {
  width: 100%;
  height: var(--status-bar-height);
  background-color: #fff
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sticky{
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 999;
	background-color: #fff
}
.swiperPage{
	width: 100%;
	height: auto;
	position: absolute;
	top: 220rpx;
	bottom: 0;
	padding-top:var(--status-bar-height) ;
}
.swiperPage swiper-item{
	overflow: auto;
}
.banner{
	width: 100%;
	height: 395rpx;
}
</style>
