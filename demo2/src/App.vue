<template>
  <div id="app">
       <!-- <button @click="login">登陆</button> -->
       <keep-alive exclude="Index">
            <router-view></router-view>
       </keep-alive>
  </div>
</template>

<script>
import JSBridge from './utils/JSBridge.js';
export default {
  name: 'app',
  data () {
    return {
    }
  },
   provide(){
    return {
      // num: 10000,
      login: ()=>{
        console.log('调用了login');
        this.login();
      }
    }
  },
  methods: {
    login(){
      //登录
      JSBridge.invoke('app', 'login', {
        loginCallBackName: res=>{
          console.log('res...', res);
        },
      });
    }
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  list-style:none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
#app,html,body {
  width:100%;
  height:100%;
  font-size:0.32rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
