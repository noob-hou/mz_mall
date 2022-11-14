<template>
	<view class="user">
        <view class="status_bar"></view>		
		<user-info ref="info"/>
		<user-shop/>
		<user-item :itemList="itemList"/>
		<view class="quit-login" v-if="isToken">
			<button type="default" @click="quitLogin">退出登录</button>
		</view>
	</view>
</template>

<script>
import UserItem from '../../components/user/User-Item.vue'
import UserInfo from '../../components/user/UserInfo.vue'
import UserShop from '../../components/user/UserShop.vue'
	export default {
  components: { UserInfo, UserShop, UserItem },
		data() {
			return {
				itemList:[
					{icon:require('@/static/image/member-menu1.png'),txt:'收货地址',url:'/pages/address/address'},
					{icon:require('@/static/image/member-menu2.png'),txt:'在线客服'},
					{icon:require('@/static/image/member-menu3.png'),txt:'邀请有理'},
					{icon:require('@/static/image/member-menu4.png'),txt:'关于我们'}
				],
				isToken:false
			}
		},
		onShow(){
			if(uni.getStorageSync('token')){
				this.isToken = true
			}else{
				this.isToken = false
			}
			this.$nextTick(()=>{
				this.$refs.info.isToken()
			})
		},
		methods: {
			quitLogin(){
				uni.showModal({
					title: '提示',
					content: '您确定要退出吗',
					success:(res)=> {
						if (res.confirm) {
							uni.removeStorageSync('token');
							this.$refs.info.isToken()
							this.isToken = false
						} 
					}
				});
			}
		}
	}
</script>

<style>
.quit-login{
	height: 110rpx;
	margin: 100rpx 30rpx;
	height: 85rpx;
}
.status_bar {
  width: 100%;
  height: var(--status-bar-height);
  background-color: #0097c4;
}
</style>
