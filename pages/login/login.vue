<template>
  <view class="login">
    <view class="login-logo">
      <image src="../../static/logo2.jpg" mode="widthFix"></image>
    </view>
    <view class="tel">
      <input type="tel" v-model="telphone" placeholder="请输入手机号" />
    </view>
    <view class="tel">
      <input type="password" v-model="password" placeholder="请输入密码" />
    </view>
    <view class="button">
      <button type="primary" @click="login">登录</button>
    </view>
    <view class="register">
      <view class=""> 忘记密码 ？ | </view>
      <view @click="goRegister"> 注册账号 </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      telphone: "13696223046",
      password: "123456789",
      backUrl: "",
      type:''
    };
  },
  onLoad(e) {
    if(e.backurl){
		this.backUrl = e.backurl;
	}
    this.type = e.type
  },
  methods: {
    login() {
      if (this.telphone && this.password) {
        let msg = "";
        uni.request({
          url: "http://39.98.125.45:8090/api/index/login",
          method: "POST",
          data: {
            telphone: this.telphone,
            password: this.password,
          },
          success: (res) => {
            msg = res.data.msg;
            uni.showToast({
              title: msg,
              mask: true,
              icon: "none",
            });
            if (msg === "登录成功") {
              uni.setStorageSync("token", res.data.data.token);
              if (this.backUrl) {
                if(this.type==1){
                  uni.redirectTo({
                  url: this.backUrl
                })

                }else{
                  uni.switchTab({
                    url: this.backUrl
                  });
                }
              } 
            }
          },
        });
      } else {
        uni.showToast({
          title: "请输入账号或密码",
          mask: true,
          icon: "none",
        });
      }
    },
    goRegister() {
      uni.navigateTo({
        url: "/pages/register/register",
      });
    },
  },
};
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
  width: 550rpx;
  height: 110rpx;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 60rpx;
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
