<template>
<view class="add-address">
    <view class="item">
        <view class="item-title">收货人:</view>
        <view class=item-input>
            <input type="text" placeholder="收货人姓名" v-model="addressData.username">
        </view>
    </view>
        <view class="item">
        <view class="item-title"></view>
        <view class=item-sex>
            <view @click="optionSex(1)" :class="addressData.sex === 1?'sex':''">先生</view>
            <view @click="optionSex(0)" :class="addressData.sex === 0?'sex':''">女士</view>
        </view>
    </view>
    <view class="item">
        <view class="item-title">电话号码:</view>
        <view class=item-input>
            <input type="text" placeholder="收货人联系电话" v-model="addressData.telphone">
        </view>
    </view>
    <view class="item" style="justify-content: space-between;">
        <view class="item-title">收货地址:</view>
        <view class=item-input style="width: 500rpx;">
            <picker-address @change="change">{{addressData.city}}</picker-address>
        </view>
		<view class="iconfont icon-dingwei" @click="locationClick"></view>
    </view>
    <view class="item">
        <view class="item-title">详细地址:</view>
        <view class=item-input>
            <input type="text" placeholder="请输入详细地址" v-model="addressData.address">
        </view>
    </view>
    <view class="default">
        <view class="item-title">默认地址:</view>
        <view class=item-input>
            <switch checked="false" :checked="addressData.defalut" @change="defalutChange"/>
        </view>
    </view>
    <view class="button">
        <button type="primary" @click="saveAddress"> 保存收货地址 </button>
    </view>
</view>
</template>

<script>
import pickerAddress from '../../components/wangding-pickerAddress/wangding-pickerAddress.vue'
export default{
    components:{
        pickerAddress
    },
        data() {
            return {
                addressData:{
                    username:'',
                    telphone:'',
                    city:'选择地址',
                    address:'',
                    default:false,
                    sex:1
                }
            }
        },
        methods: {
            //选择性别
            optionSex(i){
                this.addressData.sex = i
            },
            // 级联选择器改变
             change(data) {
                this.addressData.city = data.data.join('')
            },
            //是否为默认地址
            defalutChange(value){
               this.addressData.default = value.detail.value
            },
            // 保存地址发送请求
            saveAddress(){
                this.$request({url:'/member/addressAdd',params:this.addressData}).then(res=>{
                    uni.showToast({
                        title: res.data.msg,
                        icon:'none'
                    })
                   setTimeout(() => {
                    if(res.data.code === 1){
                        uni.navigateBack();
                    }
                   }, 1000);
                })
            },
			locationClick(){
				uni.getLocation({
					geocode:true,
					success: (res) => {
						this.addressData.city = res.address.province+res.address.city+res.address.district
                        this.addressData.address = res.address.street+res.address.streetNum + ' '+res.address.poiName
					}
				})
				// #ifdef MP-WEIXIN
				uni.authorize({
					scope:"scope.userLocation",
					success: res => {
						uni.getLocation({
							success: res => {
								uni.chooseLocation({
									latitude:res.latitude,
									longitude:res.longitude,
									success: data => {
										this.addressData.city = data.address
										this.addressData.address = data.name 
									}
								})
							},
							
						})
					}
				})
				// #endif
			}
        },
}
</script>

<style>
.add-address{
    width: 100%;
    padding: 30rpx;
}
.item{
  display: flex;
  height: 90rpx;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}
.item-title{
    width: 140rpx;
    margin-right: 20rpx;
    line-height: 90rpx;
}
.item-input input{
    height: 90rpx;
}
.button{
    position: absolute;
    bottom: 50rpx;
    left: 0;
    right: 0;
    margin: auto;
    height: 80rpx;
    width: 600rpx;
    border-radius: 40rpx;
    overflow: hidden;
}
.item-sex{
    display: flex;
     align-items: center;
}
.item-sex>view{
    padding: 8rpx 20rpx;
    border: 1px solid #e5e5e5;
    margin-right: 20rpx;
    font-size: 24rpx;
    color: #999;
}
.default{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20rpx;
}
.sex{
    background-color: #1ec8ff;
    color: #fff !important;
}
</style>
