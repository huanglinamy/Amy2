import Vue from 'vue'
// cookie操作库
import Cookies from 'js-cookie'
// 重置浏览器样式
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// 引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import '@/styles/index.scss' // global css
// 引入路由入口
import App from './App'
// 引入路由配置
import router from './router'
// 引入vuex
import store from './store'
// 引入国际化配置
import i18n from './lang' // Internationalization
// 引入图标库
import './icons' // icon
// 引入错误日志
import './errorLog' // error log
// 引入权限管理
import './permission' // permission control
// 引入mock拦截
import './mock' // simulation data
// 引入全局过滤器
import * as filters from './filters' // global filters
// 挂载elemnt-ui
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
// 挂载全局过滤器
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 阻止生成提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
