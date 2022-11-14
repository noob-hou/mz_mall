<template>
  <view class="user-item">
    <view
      :url="item.url"
      redirect
      class="item"
      v-for="(item, index) in itemList"
      :key="index"
      @click="goLogin(item.txt)"
    >
      <view>
        <image :src="item.icon" mode="widthFix" />
      </view>
      <view>{{ item.txt }}</view>
      <view class="iconfont icon-xiangyou"></view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    goLogin(txt){
      this.router('/pages/address/address')
    }
  },
};
</script>

<style>
.user-item {
  padding: 0 30rpx;
}
.item {
  display: flex;
  height: 90rpx;
  border-bottom: 1px solid #e5e5e5;
  align-items: center;
}
.item view:nth-child(1),
.item view:nth-child(3) {
  width: 30rpx;
  height: 30rpx;
  text-align: center;
  line-height: 30rpx;
}
.item view:nth-child(2) {
  flex: 1;
  padding-left: 25rpx;
}
</style>