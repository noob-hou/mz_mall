<template>
  <view class="detail">
    <swiper
      class="swiper"
      indicator-dots
      autoplay
      :interval="3000"
      circular
      style="height: 525rpx"
    >
      <swiper-item
        v-for="(item, index) in shopData.image"
        :key="index"
        @click="imageClick(index)"
      >
        <image
          :src="baseUrl + item.image"
          mode="widthFix"
          style="width: 470rpx"
        />
      </swiper-item>
    </swiper>
    <shop-info :shopInfo="shopInfo" />
    <shop-size :shopAttr="shopAttr" />
    <img-detaill :detailData="shopData" />
    <bottom-bar />
    <pop-up ref="popup" height="height:20%">
      <view class="share-icon">
        <view class="item" v-for="(item,index) in shareIcon" :key="item.id" @click="share(item.id)">
          <image :src="item.iconUrl" mode="scaleToFill" />
          <view>{{item.txt}}</view>
        </view>
      </view>
      <view class="cancel-chare" @change="cancelChare">取消分享</view>
    </pop-up>
  </view>
</template>
<script>
import requestData from "@/network/request.js";
import ShopInfo from "@/components/detail/ShopInfo.vue";
import ImgDetaill from "@/components/detail/ImgDetaill.vue";
import BottomBar from "@/components/detail/BottomBar.vue";
import ShopSize from "../../components/detail/shopSize.vue";
import PopUp from '../../components/PopUp.vue';
export default {
  components: { ShopInfo, ImgDetaill, BottomBar, ShopSize, PopUp },
  data() {
    return {
      shopData: {},
      shopInfo: {},
      shopAttr: {},
      baseUrl : 'http://39.98.125.45:8090/uploads/',
      shareIcon:[
        {id:1,txt:'微信好友',iconUrl:require('@/static/share-icon1.png')},
        {id:2,txt:'朋友圈',iconUrl:require('@/static/share-icon2.png')},
        {id:3,txt:'微博',iconUrl:require('@/static/share-icon4.png')},
        {id:4,txt:'QQ好友',iconUrl:require('@/static/share-icon3.png')},
      ]
    };
  },
  methods: {
    //获取详情页数据
    async getDetailData(id) {
      const { data: res } = await requestData({
        url: `/index/detail/id/${id}`,
      });
      this.shopData = res.data;
      this.shopInfo = {
        title: res.data.title,
        summary: res.data.summary,
        oidPrice: res.data.market_price,
        newPrice: res.data.price,
        sale: res.data.sale,
        serviceList: res.data.servicelist,
      };
      this.shopAttr = {
        price: res.data.price,
        img: res.data.mainimage,
        checkAttr: res.data.checkAttr,
        attr: res.data.attr,
        attrid:res.data.attr_id,
        smalltitle: res.data.smalltitle,
      };
	  console.log(this.shopAttr)
    },
    //点击图片放大查看功能
    imageClick(index) {
      let urls = [];
      for (let i = 0; i < this.shopData.image.length; i++) {
        urls[i] = this.baseUrl + this.shopData.image[i].image;
      }
      uni.previewImage({
        urls: urls,
        current: index,
      });
    },
    //取消分享
    cancelChare(){
      this.$refs.popup.show  = false
    },
    //分享
    share(id){
		let param1 = '';
		let param2 = '';
       if(id===1 || id===2){
		   param1 = 'weixin';
		   if(id===1){
			   param2 = 'WXSceneSession'
		   }
		   param2 = 'WXSenceTimeline'
	   }else if(id===3){
		    param1 = 'sinaweibo'
	   }else if(id===4){
		    param1 = 'qq'
	   }
	   uni.share({
	   	provider:param1,
		title:this.shopInfo.title,
		scene:param2,
		type:0,
		summary:this.shopInfo.summary,
		href:'https://baidu.com',
		imageUrl:this.baseUrl+this.shopAttr.img,
		success: res => {
			
		}
	   })
    }
  },
  onLoad(e) {
    let id = e.id;
    this.getDetailData(id);
  },
  onUnload() {
    this.$store.commit("defaultAttr");
  },
  //分享功能实现
  onNavigationBarButtonTap(e) {
  	if(e.type==="share"){
      this.$refs.popup.show  = true
    }
  }
};
</script>

<style>
.swiper {
  text-align: center;
}
.detail {
  padding-bottom: 100rpx;
}
.share-icon{
  display: flex;
  width: 100%;
  height: 234rpx;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
}
.share-icon .item{
  flex: 1;
  text-align: center;
}
.share-icon .item image{
  width: 100rpx;
  height: 100rpx;
}
.cancel-chare{
  width: 100%;
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
}
</style>
