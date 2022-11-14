<template>
  <view class="cate">
    <search />
    <cate-list-left :cateleftList="cateLIstData"/>
	<cate-list-right :cateRightList="cateLIstData"/>
  </view>
</template>

<script>
import Search from "@/components/category/Search.vue";

import requestData from "@/network/request.js";
import CateListLeft from "@/components/category/cateListLeft.vue";
import CateListRight from "@/components/category/cateListRight.vue";
export default {
  components: {
    Search,
    CateListLeft,
	CateListRight
  },
  data() {
    return {
		cateLIstData:[]
	};
  },
  onLoad() {
    this.getData();
  },
  methods: {
    //获取列表数据
    async getData() {
      const { data: res } = await requestData({ url: "/index/cate" });
	  this.cateLIstData = res.data
    },
  },
};
</script>

<style>
</style>
