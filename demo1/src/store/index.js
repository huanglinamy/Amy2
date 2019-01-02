import Vue from 'vue';
import Vuex from 'vuex'; //引入两个包
//logger触发一定要在异步之前 因为页面写了异步之后logger就失效了
import createLogger from 'vuex/dist/logger';

import app from './modules/app';
Vue.use(Vuex); //使用Vue.use挂载一下

export default new Vuex.Store({
    modules: { //导出需要把app放到modules里面
        app
    },
    plugins: [createLogger()]
})