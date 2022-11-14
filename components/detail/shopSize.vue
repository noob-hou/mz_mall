<template>
  <view class="shop-size">
    <view>规格</view>
    <view>{{$store.state.attrTxt}}</view>
    <view class="icon" @click="popUpClick">
      <image src="~@/static/xiangyou.png" mode="widthFix"></image>
    </view>
    <pop-up ref="popup" height="height:70%">
      <view class="header">
        <view class="img">
          <image :src="img" mode="widthFix" />
        </view>
        <view>
          <view class="name">{{shopAttr.smalltitle}}</view>
          <view class="price" v-if="shopAttr.attr">￥{{ shopAttr.attr[attrIndex].price}}</view>
          <view class="name">{{value}}</view>    
        </view>
      </view>
      <view class="option" v-for="(item, index) in shopAttr.checkAttr">
        <view class="option-title">{{ item.attrname }}</view>
        <view class="option-type">
          <view
            @click="optionClick(index, index1)"
            :class="{ 'active-option': valueIndex[index] === index1 }"
            v-for="(item1, index1) in item.value"
            >{{ item1 }}</view
          >
        </view>
      </view>
      <view class="option-title">数量</view>
      <view class="number">
        <view class="sub-num" @click="changeNum(-1)">-</view>
        <view class="num">{{ num }}</view>
        <view class="add-num" @click="changeNum(1)">+</view>
      </view>
      <view v-if="shopAttr.attr">库存数量:{{shopAttr.attr[attrIndex].stock}}</view>
      <view class="bottom-bar">
          <view class="bottom">
        <view @click="addCart">加入购物车</view>
        <view @click="goOrder">立即购买</view>
      </view>
      </view>
    </pop-up>
  </view>
</template>

<script>
import PopUp from "../PopUp.vue";
export default {
  components: { PopUp },
  props: {
    shopAttr: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      num: 1,
      valueIndex: [],
      value:'',
      attrIndex:0,
      attrid:0,
      baseUrl : 'http://39.98.125.45:8090/uploads/',
	  img:''
    };
  },
  watch:{
    shopAttr:{
      handler(newVal,oldVal){
        this.shopAttr = newVal;
        if (newVal) {
          this.getData()
        }
      }
    },

  },
   mounted() {
     uni.$on('addCart', ()=>{
       this.popUpClick()
   })
  
 },
  methods: {
    async getData(){
		this.img = await this.baseUrl+this.shopAttr.img
     for(let i = 0; i<this.shopAttr.checkAttr.length;i++){
       this.valueIndex.push(0)
     }
     this.value =  this.getValue()
     let optionValue = this.getValue().split(',')
     let i =this.shopAttr.attr.findIndex(v=>v.attr_0===optionValue[0]&&v.attr_1===optionValue[1])
     this.attrIndex = i
     this.attrid = this.shopAttr.attr[i].id
    },
    // 弹出商品属性选择框
    popUpClick() {
      this.$refs.popup.show = true;
    },
    //切换商品属性选择样式
    optionClick(index, index1) {
      this.valueIndex.splice(index, 1, index1);
      this.value =  this.getValue()
      this.getData()
    },
    //获取选中的商品属性
    getValue(){
      let temp=[]
      for (let i = 0; i < this.shopAttr.checkAttr.length; i++) {
         for (let j = 0; j < this.shopAttr.checkAttr[i].value.length; i++) {
         temp.push( this.shopAttr.checkAttr[i].value[this.valueIndex[i]])
         break;
      }
      }
      return temp.toString()
    },
    // 点击增加商品数量
    changeNum(i) {
      let change = i;
      change = this.num === 1 && change === -1 ? 0 : change;
      this.num += change;
    },
    //添加购物车
    async addCart(){
      this.$store.commit('setAttr',{
        attrVal: this.valueIndex,
        attrTxt:this.value
      })
      const {data:res} = await this.$request({url:'/member/addcart',params:{
        num:this.num,
        attrid:this.attrid
      }})
      if(res.code ===1){
        uni.showToast({
          title: '添加购物车成功',
        });
      }else{
        uni.showToast({
          title: '添加失败，未登录或登录失效',
          icon:'error'
        });
      }
      this.$refs.popup.show = false
    },
    //点击购买跳转到订单页面
    goOrder(){
      let arr = [{attrid:this.attrid,num:this.num}]
      uni.setStorageSync('orderShop', JSON.stringify(arr))
      this.router('/pages/order/order')
      this.$refs.popup.show = false
    }
  },
};
</script>

<style>
.shop-size {
  position: relative;
  width: 100%;
  height: 100rpx;
  border-bottom: 20rpx solid #f7f7f7;
  padding: 0 30rpx;
}
.shop-size > view {
  float: left;
  line-height: 80rpx;
}
.shop-size > view:nth-child(1) {
  color: #999;
  margin-right: 30rpx;
}
.shop-size > view:nth-child(2) {
  color: #666;
}
.icon {
  width: 35rpx;
  height: 35rpx;
  position: absolute;
  right: 30rpx;
  top: 0;
}
.header {
  display: flex;
  padding-bottom: 40rpx;
  border-bottom: 1px solid #e5e5e5;
}
.img {
  width: 210rpx;
  height: 210rpx;
  margin-top: -80rpx;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  margin-right: 20rpx;
}
.header .price {
  color: #f0415f;
  font-size: 16px;
}
.name {
  color: #000;
}
.option-title {
  width: 100%;
  height: 70rpx;
  line-height: 70rpx;
  color: #999;
}
.option-type {
  display: flex;
}
.option-type > view {
  height: 72rpx;
  border: 1px solid #e5e5e5;
  padding: 0 30rpx;
  line-height: 72rpx;
  margin-right: 40rpx;
}
.active-option {
  color: #00c3f5;
  border: 1px solid #00c3f5 !important;
}
.number {
  display: flex;
  width: 240rpx;
  height: 70rpx;
  border: 1px solid #e5e5e5;
  align-items: center;
  margin-bottom: 40rpx;
}
.number > view {
  line-height: 70rpx;
  text-align: center;
  width: 70rpx;
}
.num {
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  width: 100rpx !important;
}
.bottom-bar{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
.bottom {
  width: 100%;
  height: 100rpx;
  display: flex;
  justify-content: center;
}
.bottom > view {
  flex: 1;
  height: 100%;
  flex: 1;
  color: #fff;
  text-align: center;
  line-height: 100rpx;
}
.bottom>view:nth-child(1){
    background-color: #0ebcef;
}
.bottom>view:nth-child(2){
    background-color: #017cfe;
}
</style>