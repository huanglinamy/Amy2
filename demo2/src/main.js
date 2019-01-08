import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/routes/index'
// 引入store
import store from '@/store/index'
// 引入Vant
import { Popup,Picker, } from 'vant';

Vue.use(Popup);
Vue.use(Picker);

// 自定义过滤器
Vue.filter('filterCity', function(value, reg){
  if (value){
    return value.replace(reg, '')
  }else{
    return ''
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})