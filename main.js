import Vue from 'vue'
import App from './App'
import store from "store/index.js"
Vue.config.productionTip = false
// Vue.prototype.baseUrl = 'http://39.98.125.45:8090/uploads/'
    //token请求封装
Vue.prototype.$request = function(data) {
        const baseUrl = 'http://39.98.125.45:8090/api'
        return new Promise((resolve, reject) => {
            uni.request({
                url: baseUrl + data.url,
                method: 'POST', //仅为示例，并非真实接口地址。
                data: data.params,
                header: {
                    'token': uni.getStorageSync('token') //自定义请求头信息
                },
                success: (res) => {
                    resolve(res)
                }
            });
        })
    }
    //简单路由守卫
Vue.prototype.router = function(url, type = 1) {
    if (!uni.getStorageSync('token')) {
        uni.navigateTo({
            url: `/pages/login/login?backurl=${url}&&type=${type}`
        });
    } else {
        if (type === 2) {
            uni.switchTab({
                url
            });
        }
        uni.navigateTo({
            url
        });
    }
}
App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()