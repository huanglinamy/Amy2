import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/routes/index'
// 引入store
import store from '@/store/index'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

