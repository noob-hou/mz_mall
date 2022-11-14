<template>
	<view class="cate-right">
		<scroll-view scroll-y class="scrollhg" @scroll="scroll" :scroll-into-view="'cate'+currentIndex">
			<view class="cate-right-item" v-for="(item,index) in cateRightList" :key="index" :id="'cate'+index" scroll-with-animation>
				<view class="item-head">{{item.catename}}</view>
				<view class="item-body">
					<view class="item-body-product" v-for="(item1,index1) in item.product" :key="index1">
						<image :src="baseUrl+item1.mainimage" mode="widthFix" />
						<view class="product-name">{{item1.smalltitle}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			cateRightList: {
				type: Array,
				default () {
					return [];
				},
			},
		},
		data() {
			return {
				domTops: [],
				index: 0,
				currentIndex: 0,
				baseUrl : 'http://39.98.125.45:8090/uploads/'
			}
		},
		mounted() {
			setTimeout(() => {
				this.getDomData()
			}, 200)
			uni.$on('listToggle', index => {
				this.currentIndex = index
				
			})
		},
		methods: {
			//获取元素位置
			getDomData() {
				let view = uni.createSelectorQuery().in(this);
				view.selectAll('.cate-right-item').fields({
					size: true,
					rect: true
				}, data => {
					let datas = JSON.parse(JSON.stringify(data));

					for (let i = 0; i < datas.length; i++) {
						this.domTops[i] = {
							top: datas[i].top - uni.upx2px(120),
							bottom: datas[i].bottom
						}
					}
				}).exec();
			},
			//监听滚动
			scroll(e) {
				let scrollTop = e.detail.scrollTop
                let index = 0
				for (let i = 0; i < this.domTops.length; i++) {
					if (scrollTop > this.domTops[i].top && scrollTop < this.domTops[i].bottom) {
						index = i
					}
				}
				uni.$emit('scroll', index)
			}
		}
	}
</script>

<style>
	.cate-right {
		width: calc(100vw - 200rpx);
		height: 100%;
		position: absolute;
		right: 0;
	}

	.item-head {
		position: relative;
		width: 100%;
		height: 86rpx;
		text-align: center;
		line-height: 86rpx;
		font-size: 36rpx;
		color: #999;
	}

	.item-head::after,
	.item-head::before {
		content: "";
		width: 100rpx;
		height: 1px;
		border-top: 2px solid #f9f9f9;
		position: absolute;
		top: 50%;
	}

	.item-head::before {
		left: 15%;
	}

	.item-head::after {
		right: 15%;
	}

	.item-body {
		display: flex;
		flex-wrap: wrap;
	}

	.item-body-product {
		width: 160rpx;
		height: 200rpx;
		padding: 20rpx 10rpx;
		text-align: center;
		margin: 10rpx;
	}

	.product-name {
		font-size: 24rpx;
		height: 36rpx;
		overflow: hidden;
	}

	.scrollhg {
		height: calc(100vh - 110rpx);
		margin-bottom: 110rpx;
	}
</style>
