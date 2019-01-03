import VueRouter from 'vue-router';
import Vue from 'vue';

// 路由组件
import IndexPage from '@/pages/index.vue';
import Login from '@/pages/login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: IndexPage
  },{
    path: '/login',
    component: Login
  },{
    path: '*',
    redirect: '/index'
  }]
})

// 导航守卫
router.beforeEach((to, from, next)=>{
  console.log('1111');
  next();
})

router.afterEach((to, from, next)=>{

})

export default router;
