<template>
	<view class="shop-list">
		<view class="sticky">
			<view class="status_bar"></view>
			<!-- #ifdef MP-WEIXIN -->
			<view style="height: 110rpx;"></view>
			<!-- #endif -->
			<view class="navbar">
				<view class="back iconfont icon-xiangzuo" @click="goback"></view>
				<view class="search-box">
					<image src="../../static/image/search.png" mode="widthFix"></image>
					<input type="text" v-model="keyword" @confirm="search"/>
				</view>
			</view>
			<view class="nav-tabbar">
				<view class="nav-tabbar-item">默认排序</view>
				<view class="nav-tabbar-item" style="display:flex">
					<text>价格</text>
					<view class="price-icon">
						<view class="iconfont icon-shang"></view>
						<view class="iconfont icon-xia"></view>
					</view>
				</view>
				<view class="nav-tabbar-item">销量排序</view>
				<view class="nav-tabbar-item iconfont icon-zhankai" @click="toggleList"></view>
			</view>
		</view>
		<product-list :productList="product" :activeWidth="listType"/>
	</view>
</template>

<script>
import productList from '../../components/productList.vue';
import requestData from '../../network/request.js'
	export default {
  components: { productList },
		data() {
			return {
				product:[],
				keyword:'',
				listType : 2,
				flag:true
			}
		},
		methods: {
			 getSearchData(){
				uni.request({
					url: `http://39.98.125.45:8090/api/index`, //仅为示例，并非真实接口地址。
					success: (res) => {
					let data = res.data.data.cate
					if(this.keyword == '手机'||this.keyword == '魅族'){
						this.product = 	data[0].product
					}else if(this.keyword == '耳机'||this.keyword == '蓝牙耳机'){
                        this.product = 	data[1].product
					}else if(this.keyword == '壳膜套装'||this.keyword == '数据线'||this.keyword == '充电宝'||this.keyword == '手机膜'){
                        this.product = 	data[2].product
					}else if(this.keyword == '衣服'||this.keyword == '路由器'||this.keyword == '牙刷'){
                        this.product = 	data[3].product
					}else{
                         this.product = []  
					}
					}
				});
			 // const{data:res} = await requestData({url:'/index/search_list',params:{
				//  keyword:this.keyword,
				//  type:1,
				//  page:1
			 // }})
			 // console.log(res)
			},
			//搜索
			search(){
				this.getSearchData()
			},
			goback(){
				uni.navigateBack();
			},
			//切换展示列表
			toggleList(){
               this.flag = !this.flag
			   if(this.flag){
				   this.listType = 2
			   }else{
				   this.listType = 1
			   }
			}
		},
		onLoad(e){
		   this.keyword = e.keyword
           this.getSearchData()
		}
	}
</script>

<style>
.shop-list{
	padding: 0 20rpx;
}
.status_bar {
  width: 100%;
  height: var(--status-bar-height);
  background-color: #fff
}
.navbar{
	width: 100%;
	height: 90rpx;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #F4F4F4;
}
.back{
	width: 60rpx;
	text-align: center;
	line-height: 60rpx;
	font-size: 40rpx;
}
.search-box{
	display: flex;
	align-items: center;
	height: 60rpx;
	width: 100%;
	border-radius: 30rpx;
	background-color: #F4F4F4
}
.search-box image{
	width: 40rpx;
	margin: 15rpx;
}
.search-box input{
	width: 100%;
	color: #999;
}
.nav-tabbar{
	display: flex;
	height: 90rpx;
	align-items: center;
	border-bottom: 1px solid #F4F4F4;
}
.nav-tabbar-item{
	flex: 1;
	display: flex;
	border-right: 1px solid #F4F4F4;
	align-items: center;
	justify-content: center;
	height: 30rpx;
}
.price-icon view{
	height: 50%;
	line-height: 16rpx;
}
.sticky{
	position: sticky;
	top: 0;
	background-color: #fff;
	z-index: 9;
}
</style>
