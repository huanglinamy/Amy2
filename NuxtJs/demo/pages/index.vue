<template>
  <div class="wrap">
        <div class="login_wrap">
        <div class="login_main">
              <div class="login_banner">
                  <dl>
                      <dt><img src="../assets/img/cc-icon.png" alt=""></dt>
                      <dd>车轮</dd>
                  </dl>
              </div>
              <div class="login_bank">
                   <span>以本机号码登录</span>
                   <span>切换账号</span>
              </div>
              <div class="login_button">
                   <button>确认登录</button>
              </div>
        </div>
    </div>

    <About />
    <News />
    
  </div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
import About from '../pages/about/index';
import News from '../pages/news/index';
export default {
  components: {
    // AppLogo
    About,
    News
  }
}
</script>

<style>

.login_wrap{
    width:100%;
}

.login_main{
    width:100%;
    flex:1;
    padding-top:50px;
}

.login_banner{
    width:100%;
}
.login_banner>dl{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login_bank{
    width:100%;
    height:50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:50px;
    border-bottom:0.02rem solid rgb(126, 125, 125);
}

.login_button{
    width:100%;
    height:50px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.login_button>button{
    width:85%;
    height:50px;
    border:0;
    outline: none;
    border-radius:50px;
    background:rgb(52, 52, 236);
    color:#fff;
    margin-top:100px;
}


</style>

