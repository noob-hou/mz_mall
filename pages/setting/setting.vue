<template>
	<view class="setting">
		<view class="item" @click="showLogo">
			<view>头像</view>
			<view class="item-right">
				<view class="logo" v-if="userInfo.image">
					<image :src="userInfo.image" mode="widthFix"></image>	
				</view>
				<view class="iconfont icon-xiangyou"></view>
			</view>
		</view>
		<view class="item">
			<view>手机号码</view>
			<view class="item-right">
				<view>
					{{userInfo.telphone}}
				</view>
				<view class="iconfont icon-xiangyou"></view>
			</view>
		</view>
		<view class="item" @click="editUserName">
			<view>用户昵称</view>
			<view class="item-right">
				<view v-if="userInfo.nickname">
					{{userInfo.nickname}}
				</view>
				<view v-else>
					点击设置昵称
				</view>
				<view class="iconfont icon-xiangyou"></view>
			</view>
		</view>
		<view class="item" style="margin-top: 20rpx;" @click="router('/pages/address/address')">
			<view>地址列表</view>
		</view>
		<view class="dialog" v-if="showDialog">
			<view class="dialog-content">
				<view class="title">
					修改你的用户昵称
				</view>
				<view class="input">
					<input type="text" v-model="nickname"/>
				</view>
				<view class="button">
					<view style="color: red;" @click="cancel" >
						取消
					</view>
					<view style="color: #0077AA;" @click="confirm">
						确定
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				baseUrl:'http://39.98.125.45:8090/api/member/setHead',
				showDialog:false,
				nickname:'请设置您的用户名'
			}
		},
		computed:{
			...mapState(['userInfo'])
		},
		onLoad(){
			let userInfo = JSON.parse(uni.getStorageSync('userInfo'))
			this.$store.state.userInfo = userInfo
		},
		methods: {
			//点击修改头像
			showLogo(){
				uni.chooseImage({
					count:1,
					success:  res => {
					   this.$store.commit('setHead',res.tempFilePaths[0])
					   uni.uploadFile({
						   url:this.baseUrl,
						   filePath:res.tempFilePaths[0],
						   name:'image',
						   header:{
							   token:uni.getStorageSync('token')
						   },
						   success:data=>{
							let result = JSON.parse(JSON.stringify(data.data))
							result = JSON.parse(result)
							if(result.code === 1){
								uni.showToast({
									title:result.msg
								})
							}
						   }
					   })
					}
				})
			},
			//弹出修改用户昵称弹窗
			editUserName(){
			 this.showDialog = true
			},
			//取消修改昵称
			cancel(){
				this.showDialog = false
			},
			//确定修改昵称
			async confirm(){
			  const {data:res} = await this.$request({url:'/member/setNickName',params:{
					nickname:this.nickname
				}})
				if(res.code===1){
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
				this.$store.commit('setUserName',this.nickname)
				}
				this.showDialog = false
			}
		}
	}
</script>

<style>
page{
	position: relative;
	background-color: #F4F4F4
}
.item{
	height: 95rpx;
	background-color: #fff;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1px;
	padding: 0 20rpx;
}
.item-right{
	display: flex;
	align-items: center;
}
.logo{
	width: 50rpx;
	height: 50rpx;
	border-radius: 50%;
	overflow: hidden;
	border: 1px solid #F4F4F4;
	margin-right: 20rpx;
}
.dialog{
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0,0,0,0.5);
	z-index: 9;
}
.dialog-content{
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	margin: auto;
	width: 700rpx;
	height: 400rpx;
	background-color: #fff;
	border-radius: 50rpx;
}
.title{
	height: 90rpx;
	text-align: center;
	line-height: 90rpx;
}
.input{
	width: 100%;
	padding: 40rpx;
}
.input input{
	border: 1px solid #F4F4F4;
	height: 90rpx;
	border-radius: 10rpx;
	color: #999;
	padding-left: 20rpx;
}
.button{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 110rpx;
  }
  .button>view{
	 float: left;
	  width: 50%;
	  height: 100%;
	  text-align: center;
	  line-height: 110rpx;
  }
</style>
