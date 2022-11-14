function requestData(data) {
    uni.showLoading({
        title: '加载中'
    });
    const baseUrl = 'http://39.98.125.45:8090/api'
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + data.url, //仅为示例，并非真实接口地址。
            data: data.params,
            success: (res) => {
                resolve(res)
            },
            complete: function() {
                setTimeout(() => {
                    uni.hideLoading();
                }, 1000);
            }
        });
    })
}
export default requestData