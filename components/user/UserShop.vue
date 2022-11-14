<template>
  <view class="user-shop">
      <view class="shop-type" @click="goOrderList(item.id)" v-for="item in icon" :key="item.id">
         <view>
             <image :src="item.src" mode="scaleToFill" />
         </view>
         <view>{{item.txt}}</view>
      </view>
  </view>
</template>

<script>
export default {
  data() {
      return {
          icon:[
              {id:1,src:require('@/static/image/member-icon1.png'),txt:'待付款'},
              {id:2,src:require('@/static/image/member-icon2.png'),txt:'待收货'},
              {id:4,src:require('@/static/image/member-icon3.png'),txt:'待评价'},
              {id:0,src:require('@/static/image/member-icon4.png'),txt:'全部订单'},
          ]
      }
  },
  methods: {
      goOrderList(id){
          this.router(`/pages/order/orderlist?status=${id}`)
      }
  },
}
</script>

<style>

.user-shop{
    height: 176rpx;
    margin-top: 20rpx;
    border-bottom:  10px solid #f5f5f5;
    display: flex;
    align-items: center;
    
}
.shop-type{
  flex: 1;
  text-align: center;
}
.shop-type>view:nth-child(1) image{
    height: 56rpx;
    width: 70rpx;
}
.shop-type>view:nth-child(2){
    height: 80rpx;
    line-height: 80rpx;
}
</style>