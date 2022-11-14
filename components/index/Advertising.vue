<template>
  <view class="Advertising">
    <navigator
      :url="item.link"
      redirect
      hover-class="className"
      class="Advertising-item"
      v-for="item in advertisingList"
    >
      <image :src="baseUrl + item.image" mode="widthFix" />
    </navigator>
  </view>
</template>

<script>
export default {
  props: {
    advertisingList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      baseUrl : 'http://39.98.125.45:8090/uploads/'
    }
  },
};
</script>

<style>
.Advertising {
  width: 100%;
  overflow: hidden;
}
.Advertising-item {
  float: left;
  width: 49%;
  height: 100%;
  font-size: 0;
  margin-right: 2px;
  margin-bottom: 1px;
}

</style>