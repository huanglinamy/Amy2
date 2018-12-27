import Vue from 'vue'
import App from './App.vue'
//引入vuex的实例store
import store from './store/index';

new Vue({
  el: '#app',
  store,    //因为剑值和剑名都是store所以这样写
  render: h => h(App)
})
