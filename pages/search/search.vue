<template>
  <view class="search">
    <view class="search-header">
      <input
        type="text"
        placeholder="请输入搜索关键词"
        v-model="searchValue"
        @confirm="search"
      />
    </view>
    <view class="search-history" v-if="searchHistory.length!==0">
      <view>历史搜索</view>
      <view class="del-history" @click="delHistory">
        <image src="../../static/image/delbtn.png" mode="widthFix" />
      </view>
    </view>
    <view class="history">
      <view
        class="history-item"
        v-for="(item, index) in searchHistory"
        :key="index"
        >{{ item }}</view
      >
    </view>
    <view class="search-hot">
      <view class="search-history">
        <view>热门搜索</view>
        <view class="del-history">
          <image src="../../static/image/history.png" mode="widthFix" />
        </view>
      </view>
      <view class="history">
        <view class="history-item" v-for="(item2,index2) in hotData" :key="index2" @click="hotSearch(item2.keyword)">{{item2.keyword}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import requestData from "@/network/request.js";
export default {
  data() {
    return {
      searchValue: "",
      searchHistory: [],
	  hotData:[]
    };
  },
  onLoad() {
	this.getHotSearch()
    if (uni.getStorageSync("searchHistory")) {
      this.searchHistory = JSON.parse(uni.getStorageSync("searchHistory"));
    } else {
      this.searchHistory = [];
    }
  },
  methods: {
    //点击搜索
     search() {
      if (this.searchValue === "") {
        return;
      }
	  for(let i = 0; i<this.searchHistory.length;i++){
		  if(this.searchValue ===this.searchHistory[i]){
			  this.searchHistory.splice(i,1)
		  }
	  }
      this.searchHistory.unshift(this.searchValue);
      if (this.searchHistory.length > 10) {
        this.searchHistory.splice(this.searchHistory.length - 1, 1);
      }
      uni.setStorageSync("searchHistory", JSON.stringify(this.searchHistory));
      
	  uni.navigateTo({
	  	url:"/pages/shopList/shopList?keyword="+this.searchValue
	  })
	  this.searchValue = "";
    },
    //  清空历史
    delHistory() {
      uni.showModal({
        title: "提示",
        content: "您确定要清空历史记录吗？",
        success: res=> {
          if (res.confirm) {
            uni.removeStorageSync("searchHistory");
            this.searchHistory = [];
          } 
        },
      });
    },
	//获取热门搜索关键词数据
	async getHotSearch(){
		const{data:res} = await requestData({url:'/index/search',params:{keyword:this.searchValue}})
      this.hotData = res.data
	},
	//点击热门关键词词搜索
	hotSearch(value){
       this.searchValue = value;
	   this.search()
	}
  },
};
</script>

<style>
.search-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90rpx;
  background-color: #f5f5f5;
  padding: 0 20rpx;
  justify-content: center;
}
.search-header input {
  background-color: #fff;
  height: 60rpx;
  width: 100%;
  border-radius: 30rpx;
  padding-left: 40rpx;
}
.search-history {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80rpx;
  width: 100%;
  padding: 0 20rpx;
}
.del-history {
  width: 52rpx;
  height: 52rpx;
}
.history {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 30rpx;
}
.history-item {
  background-color: #f5f5f5;
  height: 60rpx;
  border-radius: 30rpx;
  padding: 0 20rpx;
  line-height: 60rpx;
  margin-right: 40rpx;
  margin-bottom: 20rpx;
}
</style>
