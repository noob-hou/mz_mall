<template>
  <view class="address">
    <view class="address-list">
      <view class="list-item" v-for="(item, index) in addressList" :key="index" @click="optionsAddress(item.id)">
        <uni-swipe-action>
          <!-- 基础用法 -->
          <uni-swipe-action-item
            :right-options="options"
            @click="onClick($event, index, item.id)"
          >
            <view>
              <view class="info">
                <text>{{ item.username }}</text>
                <text>{{ item.telphone }}</text>
                <text v-if="item.default === '1'">默认</text>
              </view>
              <view>{{ item.city + " " + item.address }}</view>
            </view>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
    </view>
    <navigator url="/pages/address/addAddress" redirect class="goAdd">
      <button type="primary">添加地址</button>
    </navigator>
    <template v-if="!addressList">
      <view class="empty">
        <image src="../../static/default/address.png" mode="widthFix"></image>
        <view>用户还没有地址，请添加！</view>
      </view>
    </template>
  </view>
</template>

<script>
export default {
  data() {
    return {
      addressList: [],
      backUrl:'',
      options: [
        {
          text: "编辑",
          style: {
            backgroundColor: "#0bbbef",
          },
        },
        {
          text: "删除",
          style: {
            backgroundColor: "red",
          },
        },
      ],
    };
  },
  methods: {
    //  滑动地址操作
    onClick(e, index, id) {
      if (e.index === 0) {
        uni.navigateTo({
          url: "editAddress?id=" + id,
        });
      } else {
        uni.showModal({
          title: "提示",
          content: "你确定要删除此地址吗",
          success: (res) => {
            if (res.confirm) {
              uni.removeStorageSync('addressId');
              let id = this.addressList[index].id;
              this.$request({
                url: "/member/addressDel",
                params: {
                  id,
                },
              }).then((value) => {
                if (value.data.code === 1) {
                  uni.showToast({
                    title: value.data.msg,
                    icon: "none",
                  });
                }
              });
              setTimeout(() => {
                this.getData();
              }, 500);
            }
          },
        });
      }
    },
    async getData() {
      const { data: res } = await this.$request({ url: "/member/addressList" });
      this.addressList = res.data;
    },
    //点击选择地址
    optionsAddress(id){ 
      if(this.backUrl){
        uni.setStorageSync('addressId', id)
        this.router(`/pages/${this.backUrl}/${this.backUrl}`)
      }
    }
  },
  onShow() {
    this.getData();
  },
  onLoad(e){
      this.backUrl=e.backUrl
  }
};
</script>

<style>
.address {
  padding: 35rpx;
  height: calc(100vh - 100rpx);
}
.list-item {
  border-bottom: 1px solid #e5e5e5;
  padding: 30rpx auto;
  margin-bottom: 10rpx;
  touch-action: none;
}
.info text {
  margin-right: 20rpx;
}
.info text:nth-child(3) {
  background-color: #1ec8ff;
  color: #fff;
  font-size: 20rpx;
}
.goAdd {
  width: calc(100% - 60rpx);
  position: absolute;
  bottom: 50rpx;
  border-radius:40rpx;
  right: 30rpx;
  left: 30rpx;
  height: 80rpx;
  margin:auto;
  overflow: hidden;
}
.empty {
  margin-top: 200rpx;
  width: 100%;
  text-align: center;
}
.empty view {
  color: #999;
}
</style>
