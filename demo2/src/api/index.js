// const host = /localhost/.test(window.location.host)?'https://h5.chelun.com':'http://h5-test.chelun.com';
import JSBridge from '@/utils/JSBridge.js';
import pay from '@/utils/pay.js';

function sendRequest(url, method = 'GET', data = {}) {
    let params = {
        method,
        headers: {
          'content-type': 'application/json'
        }
    };
    // 判断如果是一个post请求，带上请求体信息
    if (method == 'POST') {
        params.body = JSON.stringify(data);
    }
    // 判断请求查询url是否携带query
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${+new Date()}`
    }
    // 拼接登陆态token
    // url += `&token=${getToken()}`;
    return fetch(url, params)
      .then(res => res.json())
      .then(body => body);
}


// 唤起登陆
export let doLogin = ()=>{
  JSBridge.invoke('app', 'login', {
    loginCallBackName: res=>window.location.reload()
  });
}

// 唤起分享
export let doShare = ()=>{
  JSBridge.invoke('ui', 'shareMessage');
}

// 上传base64
export let uploadBase64 = (base64)=>{
  return sendRequest('http://123.206.55.50:11000/upload_base64', 'POST', {base64})
}

// 唤起支付
export let doPay = ()=>{
  // pay.init({
  //   order_url: /h5.chelun.com/.test(window.location.host) ? "//payproxy.eclicks.cn/Order/Create" : "//payproxy-test.eclicks.cn/Order/Create",
  //   order_param: {
  //     order_type: 50,
  //     order_number: 'B7GT6NMV9JZPY',
  //     ac_token: 'u29160213_369865473_SRMO7aws0w6rVeWt'
  //   },
  //   pay_channel: 'app',
  //   callback_url:  "https://h5.chelun.com/2017/update-licence2/order.html"
  // })
  JSBridge.invoke('app', 'pay', {
    price: 398.00,
    orderNum: '6486849305969374209',
    channels: ["weixin","alipay","baidu"],
    callbackUrl: "https://h5.chelun.com/2017/update-licence2/order.html"
  });
}
// 上传图片
export let uploadImg = (type)=>{
  return new Promise((resolve, reject)=>{
    JSBridge.invoke('device', 'chooseImage', {
      type,
      chooseCallbackName: function(res){
        resolve(res);
      }
    })
  })
}

// 获取驾照签发城市
export let cityList = ()=>{
  return sendRequest('/api/ExchangeJiaZhao/cityList');
}

// 获取可补换城市
export let costList = (...params)=>{
  return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${params[0]}&province_id=${params[1]}&city_id=${params[2]}`);
}
