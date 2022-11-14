<template>
	<view class="login">
		<view class="login-logo">
			<image src="../../static/logo2.jpg" mode="widthFix"></image>
		</view>
		<view class="tel">
			<input type="tel" v-model="telphone" placeholder="请输入手机号" />
		</view>
		<view class="tel">
			<input type="text" v-model="code" placeholder="请输入验证码" />
			<view class="getCode">
				<button type="default" @click="getCode" :disabled="isDisabled">{{codeTxt}}</button>
			</view>
		</view>
		<view class="tel">
			<input type="password" v-model="password" placeholder="请输入密码" />
			
		</view>
		<view class="button">
			<button type="primary" @click="registerClick">注册</button>
		</view>
		<view class="register">
			<view>
				已有账号 ？ |
			</view>
			<view @click="goLogin">
				点击去登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codeTxt:'获取验证码',
				telphone: '',
				password: '',
				code:'',
				isDisabled:false
				
			}
		},
		methods: {
			//去往登录页面
			goLogin(){
				uni.navigateBack({
				});
			},
			//获取验证码
			getCode(){
				this.isDisabled = true
				let time = 60
				let timer = setInterval(()=>{
					 time = time-1
					 this.codeTxt = "重新获取"+time
					 if(time === 0){
						 clearInterval(timer)
						 this.codeTxt = '获取验证码'
						 this.isDisabled = false
					 }
				},1000)
				uni.request({
					url: 'http://39.98.125.45:8090/api/index/getSmsCode',
					method: 'POST',
					data:{
						telphone:this.telphone
					},
	                success(res) {
	                	uni.showToast({
	                		icon:'none',
							title:res.data.errmsg
	                	})
	                }
				})
			},
			registerClick(){
				uni.request({
					url: 'http://39.98.125.45:8090/api/index/register',
					method: 'POST',
					data:{
						telphone:this.telphone,
						password:this.password,
						code:this.code
					},
				    success(res) {	
				    	uni.showToast({
				    		icon:'none',
							title:res.data.msg
				    	})
					 if(res.data.msg==='注册成功'){
						 this.telphone = ''
						this.password = ''
						this.code =''
						uni.navigateBack({});
					 }
				    }
				})
			}
			},
			
		}
	
</script>

<style>
	.login {
		padding-top: 110rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.login-logo {
		width: 250rpx;
		height: 250rpx;
		margin-bottom: 30rpx;
	}

	.tel {
		position: relative;
		width: 550rpx;
		height: 110rpx;
		border-bottom: 1px solid #e5e5e5;
		margin-bottom: 60rpx;
	}
.getCode{
	position: absolute;
	right: 0;
	bottom: 0;
}
	.tel input {
		width: 100%;
		height: 100%;
	}

	.button {
		width: 550rpx;
		height: 86rpx;
		margin-bottom: 40rpx;
	}

	.register {
		display: flex;
	}

	.register view:nth-child(1) {
		color: #666;
		margin-right: 10rpx;
	}

	.register view:nth-child(2) {
		color: #22b9ee;
	}
</style>
