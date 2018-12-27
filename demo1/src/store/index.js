import Vue from 'vue';
import Vuex from 'vuex'; //引入两个包

import app from './modules/app';
Vue.use(Vuex); //使用Vue.use挂载一下

export default new Vuex.Store({
    modules:{ //导出需要把app放到modules里面
        app  
    }
})