import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex)
const store = new vuex.Store({
    state: {
        attrVal: [],
        attrTxt: '请选择商品属性',
		userInfo:uni.getStorageSync('userInfo')?JSON.parse(uni.getStorageSync('userInfo')):{}

    },
    mutations: {
        setAttr(state, data) {
            state.attrVal = data.attrVal
            state.attrTxt = data.attrTxt
        },
        defaultAttr(state) {
            state.attrVal = [],
                state.attrTxt = '请选择商品属性'
        },
		login(state,data){
			data.image = 'http://39.98.125.45:8090/uploads/'+data.image
			uni.setStorageSync('userInfo',JSON.stringify(data))
		},
		setHead(state,data){
			state.userInfo.image = data
			uni.setStorageSync('userInfo',JSON.stringify(state.userInfo))
		},
		setUserName(state,data){
			state.userInfo.nickname = data
			uni.setStorageSync('userInfo',JSON.stringify(state.userInfo))
		}
    }
})
export default store