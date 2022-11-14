<template>
  <view class="user-info">
	  <view class="user-logo" v-if="infoData.image">
	      <image :src="infoData.image" mode="widthFix" />
	  </view>
      <view class="user-logo" v-else>
          <image src="~@/static/image/empty-tx.png" mode="widthFix" />
      </view>
      <view class="user-name" v-if="isLogin">
          <template v-if="infoData.nickname">
			  <view>{{infoData.nickname}}</view>
          </template>
           <view v-else>还未设置昵称</view>
           <view>{{infoData.telphone}}</view>
      </view>
      <template v-if="isLogin === false">
         <view @click="router('/pages/user/user',2)" class="go-login">登录/注册</view>
      </template>
      <view class="user-erweima" @click="router('/pages/setting/setting')">
          <view class="iconfont icon-xiangyou"> </view>
      </view>
  </view>
</template>

<script>
export default {
data() {
    return {
        isLogin:false,
        infoData:null
    }
},
created() {
     this.isToken()
},
methods: {
  isToken(){
    let token = uni.getStorageSync('token')
    uni.request({
        url: `http://39.98.125.45:8090/api/member/index`, //仅为示例，并非真实接口地址。
        method:'POST',
        header: {
            'token': token //自定义请求头信息
        },
        success: (res) => {
           if(res.data.code == 1){
               this.isLogin = true
               this.infoData = res.data.data
			   this.$store.commit('login',this.infoData)
           }else{
              this.isLogin = false 
           }
        }
    });
    }
},
}
</script>

<style>
.user-info{
    display: flex;
    height: 336rpx;
    width: 100%;
    align-items: center;
    background:url('~@/static/member-top.png') no-repeat;
    background-size: 100%;
    padding: 165rpx 30rpx;
}
.user-logo{
    width: 110rpx;
    height: 110rpx;
    margin-right: 20rpx;
    border-radius: 50%;
    overflow: hidden;
}
.user-name{
    color: #fff;
}
.go-login{
  width: 200rpx;
  height: 50rpx;
  text-align: center;
  line-height: 50rpx;
  color: #fff;
  border: 1px solid #fff;
}
.user-erweima{
    position: absolute;
    right: 10rpx;
    width: 70rpx;
    height: 70rpx;
	text-align: center;
	line-height: 70rpx;
}
.user-icon{
    position: absolute;
    right: 10rpx;
    top: 80rpx;
	/* #ifdef H5 */
	top: 20rpx;
	/* #endif */
    height: 80rpx;
    width: 180rpx;
    color: #fff;
}
.user-icon>view{
    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 80rpx;
    font-size: 50rpx;
}
</style>