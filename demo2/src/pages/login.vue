<template>
    <div class="login_wrap">
        <div class="login_main">
              <div class="login_banner">
                  <dl>
                      <dt><img src="../assets/cc-icon.png" alt=""></dt>
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
</template>

<script>
export default {

}
</script>

<style>
.login_wrap{
    width:100%;
}

.login_main{
    width:100%;
    flex:1;
    padding-top:1rem;
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
    height:1.2rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0.6rem;
    border-bottom:0.02rem solid rgb(126, 125, 125);
    margin-top:0.8rem;
}

.login_button{
    width:100%;
    height:1rem;
}
.login_button>button{
    width:85%;
    height:0.8rem;
    border:0;
    outline: none;
    border-radius: 0.1rem;
    background:rgb(52, 52, 236);
    color:#fff;
    margin-top:1rem;
}

</style>