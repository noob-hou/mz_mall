<template>
  <view class="order-list">
    <view style="height: 88rpx"></view>
    <view class="navbar">
      <view
        :class="
          currentIndex == item.id ? 'navbar-item navbar-active' : 'navbar-item'
        "
        v-for="(item, index) in navbar"
        :key="index"
        @click="navbarToggle(item.id)"
        >{{ item.txt}}</view
      >
    </view>
    <view
      class="order-item"
      v-for="(item1, index) in orderList"
      :key="item1.orderid"
      @click="goOrderDetail(item1.orderid)"
    >
      <view class="item-title">
        <view class="order-time">{{ item1.time }}</view>
        <view class="order-status">{{ item1.status | orderStatus }}</view>
      </view>
      <view
        class="order-content"
        v-for="(item2, index2) in item1.shop"
        :key="item2.attrid"
      >
        <view class="cart-img">
          <image :src="baseUrl + item2.mainimage" mode="scaleToFill"></image>
        </view>
        <view class="item-content">
          <view class="order-title">{{ item2.title }}</view>
          <view class="item-attrbute">{{
            item2.attr_0 + " " + item2.attr_1
          }}</view>
          <view class="item-total">
            <view class="item-price">￥{{ item2.price }}</view>
            <view class="item-num"> x{{ item2.num }} </view>
          </view>
        </view>
      </view>
      <view class="item-bottom"
        ><text>共{{ item1.allnum }}件商品</text
        ><text
          >合计：<strong style="color: #00c3f5"
            >￥{{ item1.allprice }}</strong
          ></text
        ><text v-if="item1.logisticsprice"
          >(运费{{ item1.logisticsprice }}元)</text
        ></view
      >
    </view>
	<uni-load-more :status="status"></uni-load-more>
  </view>
</template>

<script>
export default {
components:{},
  data() {
    return {
      navbar: [
		      {id:1,txt:'待付款'},
              {id:2,txt:'待收货'},
              {id:4,txt:'待评价'},
              {id:0,txt:'全部订单'},
			  ],
      currentIndex: 0,
      orderList: [],
      page:1,
	  status:'loading',
	  pages:0,
    baseUrl : 'http://39.98.125.45:8090/uploads/'
    };
  },
  filters: {
    orderStatus(value) {
      if (value === 1) {
        return "未付款";
      } else if (value === 2) {
        return "待发货";
      } else if (value === 3) {
        return "已发货";
      } else if (value === 4) {
        return "待评价";
      } else if (value === 4) {
        return "已完成";
      } else if (value === 4) {
        return "已取消";
      }
    },
  },
  onLoad(e) {
	this.currentIndex = e.status
    this.getOrderData();
  },
  methods: {
	 // 点击切换不同数据
    navbarToggle(index) {
      this.currentIndex = index;
	  this.router(`orderlist?status=${this.currentIndex}`)
    },
    // 获取订单数据
    async getOrderData() {
      const { data: res } = await this.$request({
        url: "/member/orderlist",
        params: {
          status: this.currentIndex,
          page: this.page,
        },
      });
	  if(res.data.last_page!==0){
		  this.pages = res.data.last_page
	  }else{
		  this.status = 'noMore'
	  }
      setTimeout(()=>{
		  this.orderList = [...this.orderList,...res.data.data];
	  },500)
    },
    //去往订单详情页
    goOrderDetail(id){
      this.router(`orderDetail?orderid=${id}`)
    }
  },
  onReachBottom() {
  	this.page++;
	if(this.page>this.pages){
		this.status='noMore'
		return;
	}
    this.getOrderData()
  },
  onPullDownRefresh() {
	 this.page=1;
	 this.orderList=[]
  	this.getOrderData()
	setTimeout(()=>{
		 uni.stopPullDownRefresh()
	},500)
  }
    
};
</script>

<style>
.order-list {
  padding: 0 20rpx;
}
.navbar {
  position: fixed;
  top: 0;
  /* #ifdef H5 */
  top: 88rpx;
  /* #endif */
  display: flex;
  width: 100%;
  height: 80rpx;
  border-bottom: 10rpx solid #f4f4f4;
  background-color: #fff;
  z-index: 9;
}
.navbar-item {
  flex: 1;
  color: #999;
  height: 100%;
  line-height: 70rpx;
  text-align: center;
}
.navbar-active {
  color: #00c3f5;
  font-weight: bold;
}
.order-item {
  border-bottom: 10rpx solid #f4f4f4;
}
.item-title {
  height: 80rpx;
  width: 100%;
  border-bottom: 1rpx solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order-time {
  color: #999;
}
.order-status {
  color: #00c3f5;
}
.order-content {
  display: flex;
  width: 100%;
  height: 265rpx;
  padding: 30rpx 0;
  border-bottom: 1px solid #e5e5e5;
  align-items: center;
  background-color: #fff;
}
.cart-img {
  width: 200rpx;
  height: 200rpx;
  font-size: 0;
  display: flex;
  align-items: center;
}
.cart-img image {
  width: 200rpx;
  height: 200rpx;
}
.item-content {
  width: 100%;
  height: 100%;
}
.order-title {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-attrbute {
  color: #999;
}
.item-total {
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-price {
  color: #e20307;
  font-size: 36rpx;
}
.item-num {
  height: 50rpx;
  width: 50rpx;
  color: #999;
  text-align: center;
  margin-right: 20rpx;
}
.item-bottom {
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #999;
}
.item-bottom text {
  margin-right: 20rpx;
}
</style>
