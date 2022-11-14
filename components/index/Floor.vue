<template>
  <view class="floor">
    <view class="floor-item" v-for="(item, index) in floorList" :key="index">
      <view class="floor-title"
        ><text>{{ item.content[0].title }}</text>
      </view>
      <template v-if="item.content.length === 1">
        <navigator
          :url="item.content[0].url"
          redirect
          hover-class="className"
          class="floor-img"
        >
          <image :src="baseUrl + item.content[0].img" mode="scaleToFill" />
        </navigator>
      </template>
      <template v-else>
        <navigator
          :url="item.content[0].url"
          redirect
          hover-class="className"
          class="floor-img"
        >
          <image
            :src="baseUrl + item.content[0].img"
            mode="scaleToFill"
            style="width: 50%"
          />
          <view
            class="summary"
            :style="'background-color:' + item.content[0].bg"
          >
            <view v-for="(item3, index3) in item.content[0].summary">{{
              item3
            }}</view>
          </view>
        </navigator>
        <navigator
          :url="item.content[1].url"
          redirect
          hover-class="className"
          class="floor-img"
        >
          <view
            class="summary"
            :style="'background-color:' + item.content[1].bg"
          >
            <view v-for="(item4, index4) in item.content[1].summary">{{
              item4
            }}</view>
          </view>
          <image
            :src="baseUrl + item.content[1].img"
            mode="scaleToFill"
            style="width: 50%"
          />
        </navigator>
      </template>
      <product-list :productList="item.product"/>
    </view>
  </view>
</template>

<script>
import productList from '../productList.vue';
export default {
  components: { productList },
  props: {
    floorList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
	  return{
		floorLocation:[],
		baseUrl : 'http://39.98.125.45:8090/uploads/'
	  }
  },
 //  mounted() {
 //    setTimeout(()=>{
	// 	this.getDom()
	// },200)
 //  },
  methods: {
    // getDom(){
    //   let selQuery = wx.createSelectorQuery();
    //  selQuery.selectAll('.floor-item').fields({
				// 	size: true,
				// 	rect: true
				// }, data => {
				// 	let datas = JSON.parse(JSON.stringify(data));
    //       this.floorLocation[0]={top:0,bottom:datas[0].top};
				// 	for (let i = 0; i < datas.length; i++) {
				// 		this.floorLocation[i+1] = {
				// 			top: datas[i].top,
				// 			bottom: datas[i].bottom
				// 		}
           
				// 	}
				// }).exec();
    //   this.$emit('floorLocation',this.floorLocation)
    // }
  },
};
</script>

<style>
.floor {
  width: 100%;
}
.floor-title {
  position: relative;
  height: 180rpx;
  text-align: center;
  line-height: 180rpx;
}
.floor-title text {
  font-size: 36rpx;
  color: #000;
  font-weight: bold;
}
.floor-title ::after {
  content: " ";
  width: 100rpx;
  height: 30rpx;
  border-top: 10rpx solid #1dbad9;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.floor-img {
  height: 334rpx;
  display: flex;
}
.summary {
  width: 50%;
  padding: 30rpx;
}
.summary > view {
  color: #fff;
  font-weight: bold;
  margin-bottom: 10rpx;
  font-size: 30rpx;
}
.floor-img image {
  height: 100%;
}

</style>