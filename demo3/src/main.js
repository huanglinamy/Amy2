import Vue from 'vue'
import App from './App.vue'
import router from '@/routes/index'
import echarts from 'echarts';

Vue.use(echarts);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
