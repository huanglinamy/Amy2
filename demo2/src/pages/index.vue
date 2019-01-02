<template>
      <div class="wrap">
        <!-- <div class="header">
            <b>+</b>
            <b>补换驾照</b>
            <b><router-link to="/page">+</router-link></b>
        </div> -->
        <div class="section">
            <div class="nav">
                <b>订单提交</b>
                <b>填写收货地址</b>
                <b>正在办理</b>
                <b>办理完成</b>
            </div>
            <div class="banner">
                <img src="../static/imgs/cl1.jpg" alt="" />
            </div>

            <Upload/>
            
            <div class="server">
                 <span>服务类型</span>
                 <span>换驾照</span>
            </div>
            <div class="current">
                 <span>当前驾照签发城市</span>
                 <span>请选择签发地</span>
            </div>
            <div class="fillin">
                 <span>可补换的签发城市</span>
                 <span>请选择补换地</span>
            </div>
            <div class="serverprice">
                 <span>服务费</span>
                 <span>￥399</span>
            </div>
            <div class="discounts">
                <span>优惠</span>
                <span>登录后查看优惠券</span>
            </div>
        </div>
        <div class="footer">
            <b>实付: <em>￥399</em></b>
             <button>立即支付</button>
        </div>

        <!-- <router-view></router-view> -->
      </div>
</template>

<script>
import Upload from '@/components/Upload'
export default {
  name:'index',
   components: {
    Upload
  }
}
</script>

<style>
.wrap{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    font-size:0.32rem;
    background:#eee;
}

/* .header{
  width:100%;
  height:1rem;
  border-bottom:0.02rem solid rgb(173, 173, 173);
  display:flex;
  justify-content: space-between;
  align-items: center;
  background:#fff;
}
.header>b{
  padding:0 0.2rem;
  font-size: 0.38rem;
  font-weight: 400;
}
.header>b:nth-of-type(1){
   font-size: 0.5rem;
}
.header>b:nth-of-type(3){
  font-size: 0.5rem;
}
.header>b>a{
  text-decoration: none;
} */

.section{
  width:100%;
  flex:1;
  overflow: hidden;
}

.nav{
  width:100%;
  height:0.8rem;
  display:flex;
  justify-content:space-around;
  align-items: center;
  background:#fff;
}
.nav>b{
  width:25%;
  height:100%;
  text-align: center;
  line-height: 0.8rem;
  font-weight: 400;
  font-size:0.3rem;
  color:rgb(54, 153, 247);
}
.nav>b:nth-of-type(1){
  background:rgb(54, 153, 247);
  color:#fff;
  border-radius: 0.05rem;
}

.banner{
  width:100%;
  height:2.3rem;
  background:#fff;
}
.banner>img{
  width:100%;
  height:100%;
}

.server{
  width:100%;
  height:1rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.2rem;
  background:#fff;
  margin-top:0.3rem;
}
.server>span{
  font-size: 0.32rem;
}
.current{
  width:100%;
  height:1rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.2rem;
  background:#fff;
}
.current>span{
  font-size: 0.32rem;
}

.fillin{
  width:100%;
  height:1rem;
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding:0 0.2rem;
  background:#fff;
}
.fillin>span{
  font-size:0.32rem;
}

.serverprice{
   width:100%;
   height:1rem;
   display:flex;
   justify-content: space-between;
   align-items: center;
   padding:0 0.2rem;
   background:#fff;
}
.serverprice>span{
  font-size:0.32rem;
}
.serverprice>span:nth-of-type(2){
  color:#f50;
  font-weight: 800;
  font-size: 0.38rem;
}

.discounts{
  width:100%;
  height:1rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.2rem;
  background:#fff;
  margin-top:0.3rem;
}
.discounts>span{
  font-size: 0.32rem;
}

.footer{
  width:100%;
  height:1.2rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.2rem;
  background:#fff;
}
.footer>b>em{
  color:#f50;
  font-weight: 800;
  font-style:normal;
  font-size:0.38rem;
}
.footer>button{
  width:2rem;
  height:1rem;
  border:0;
  outline: none;
  background:rgb(175, 172, 172);
  color:#fff;
  font-size:0.35rem;
  border-radius: 0.1rem;
}
</style>

