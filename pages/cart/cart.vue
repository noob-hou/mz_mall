<template>
  <view class="cart">
    <template v-if="!isLogin">
      <view class="no-login">
        <image src="../../static/default/empty.png" mode=""></image>
        <view>
          <button type="primary" @click="goLogin">未登录，点击登录</button>
        </view>
      </view>
    </template>
    <scroll-view scroll-y v-else>
      <template v-if="cartList.length === 0">
        <view class="no-cart">
          <image src="../../static/default/empty.png" mode=""></image>
          <view>什么都没有？快去挑选喜欢的商品吧！</view>
        </view>
      </template>
      <view class="cart-item" v-for="(item, index) in cartList" :key="item.id">
        <uni-swipe-action>
          <!-- 基础用法 -->
          <uni-swipe-action-item
            :right-options="options"
            @click="onClick($event, item.id, index)"
          >
            <checkbox-group style="width: 60rpx" @change="checked(index)">
              <label>
                <checkbox color="#01c2fa" :checked="item.flag" />
              </label>
            </checkbox-group>
            <view class="cart-img">
              <image :src="baseUrl + item.mainimage" mode="scaleToFill"></image>
            </view>
            <view class="item-content">
              <view class="item-title">{{ item.title }}</view>
              <view class="item-attrbute">{{
                item.attr_0 + " " + item.attr_1
              }}</view>
              <view class="item-total">
                <view class="item-price">￥{{ item.price }}</view>
                <view class="item-num">
                  <view class="sub-num" @click="changeNum(-1, index)">-</view>
                  <view class="num">{{ item.num }}</view>
                  <view class="add-num" @click="changeNum(1, index)">+</view>
                </view>
              </view>
            </view>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
    </scroll-view>
    <view class="bottom">
      <view class="bottom-bar">
        <view>
          <checkbox-group @change="isAllChecked">
            <label>
              <checkbox :checked="allChecked"
                ><text style="color: #999">全选</text></checkbox
              >
            </label>
          </checkbox-group>
        </view>
        <view class="bar-right"
          ><view class="total"
            >总计:<text style="color: red">￥{{ totalPrice }}</text></view
          >
          <view class="pay" @click="goOrder">
            去结算(<text style="font-size: 24rpx">{{ totalNum }}件</text>)
          </view></view
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      allChecked: false,
      isLogin: false,
      totalNum: 0,
      totalPrice: 0,
      cartList: [],
      options: [
        {
          text: "删除",
          style: {
            backgroundColor: "red",
          },
        },
      ],
      baseUrl : 'http://39.98.125.45:8090/uploads/'
    };
  },
  methods: {
    //未登录情况下跳转登录
    goLogin() {
      this.router("/pages/cart/cart", 2);
    },
    //获取购物车数据
    async getCartList() {
      const { data: res } = await this.$request({ url: "/member/cartlist" });
      if (res.code!==1) {
        return this.cartList = []
      }
	  res.data.forEach((item) => {
          item.num = parseInt(item.num);
          item.flag = item.flag === "1" ? true : false;
          item.price = parseFloat(item.price);
        });
      this.cartList = res.data;
    },
    //点击改变商品数量
    changeNum(i, index) {
      let change = i;
      change = this.cartList[index].num == 1 && change === -1 ? 0 : change;
      this.cartList[index].num += change;
      this.total();
    },
    //删除购物车操作
    onClick(e, id, index) {
      if (e.content.text === "删除") {
        uni.showModal({
          title: "提示",
          content: "确定要删除此商品吗？",
          success: async (res) => {
            if (res.confirm) {
              this.cartList.splice(index, 1);
              this.total();
              const { data: res } = await this.$request({
                url: "/member/delcart",
                params: {
                  id,
                },
              });
              if (res.code === 1) {
                uni.showToast({
                  title: res.msg,
                  icon: "none",
                });
                this.getCartList();
              }
            }
          },
        });
      }
    },
    //全选按钮
    isAllChecked() {
      this.allChecked = !this.allChecked;
      this.cartList.forEach((item) => {
        item.flag = this.allChecked;
      });
      this.total();
    },
    //单选按钮
    checked(index) {
      this.cartList[index].flag = !this.cartList[index].flag;
      this.allChecked = this.cartList.every((v) => v.flag === true);
      this.total();
    },
    //计算总价 总数量
    total() {
      let totalNum = 0;
      let totalPrice = 0;
      this.cartList.forEach(async (v) => {
        if (v.flag) {
          totalNum += v.num;
          totalPrice += v.price * v.num;
        }
      });
      this.totalNum = totalNum;
      this.totalPrice = totalPrice.toFixed(2);
    },
    //点击去结算
    goOrder(){
      let arr = []
      this.cartList.forEach((item,index)=>{
        arr[index]={attrid:item.attrid,num:item.num}
      })
       uni.setStorageSync('orderShop', JSON.stringify(arr))
      this.router('/pages/order/order')
    }
  },
  async onShow() {
    //判断是否登录
    if (uni.getStorageSync("token")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    //获取购物车列表数据
    await this.getCartList();
    //计算总计
    this.total();
  },
  //离开页面保存购物车数据
  onHide() {
    let arr = [];
    this.cartList.forEach((item, index) => {
      arr[index] = {
        attrid: item.attrid,
        num: item.num,
        flag: item.flag,
      };
    });
    this.$request({
      url: "/member/savecart",
      params: {
        data: JSON.stringify(arr),
      },
    })
  },
};
</script>

<style>
.cart {
  width: 100%;
  border-top: 1px solid #e5e5e5;
  padding: 20rpx 20rpx 106rpx 20rpx;
}
.cart-item {
  display: flex;
  width: 100%;
  height: 265rpx;
  padding: 30rpx 0;
  border-bottom: 1px solid #e5e5e5;
  align-items: center;
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
.item-title {
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
  width: 155rpx;
  border: 1px solid #e5e5e5;
  display: flex;
}
.item-num > view {
  line-height: 50rpx;
  text-align: center;
  width: 70rpx;
}
.num {
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  width: 100rpx !important;
  text-align: center;
}

.no-cart {
  width: 100%;
  padding-top: 160rpx;
  text-align: center;
}
.no-cart > view {
  color: #999;
}
.no-login {
  padding-top: 160rpx;
}
.no-login view button {
  height: 80rpx;
  width: 500rpx;
  text-align: center;
  line-height: 80rpx;
}
.bottom {
  position: fixed;
  bottom: 0;
  /* #ifdef H5 */
  bottom: 100rpx;
  /* #endif */
  right: 30rpx;
  left: 30rpx;
  margin: auto;
  background-color: #fff;
}
.bottom-bar {
  display: flex;
  height: 106rpx;
  align-items: center;
  justify-content: space-between;
}
.bar-right {
  display: flex;
  align-items: center;
}
.pay {
  height: 86rpx;
  background-color: #0bbaef;
  line-height: 86rpx;
  width: 240rpx;
  color: #fff;
  border-radius: 43rpx;
  text-align: center;
  margin-left: 30rpx;
}
</style>
