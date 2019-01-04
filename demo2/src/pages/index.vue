<template>
      <div class="wrap">
         <div class="section">
               <div class="nav">
                   <em></em>
                   <b>订单提交</b>
                   <b>收货地址</b>
                   <b>正在办理</b>
                   <b>办理完成</b>
               </div>
               <div class="banner">
                   <img src="../static/imgs/cl1.jpg" alt="" />
               </div>

              <Upload/>
             <TypePicker/>
             <CityPicker/>

          <div class="serverprice">
                <span>服务费</span>
                <span>￥398</span>
          </div>
          <div class="discounts">
              <span>优惠</span>
              <span> <router-link to="/login">登录后查看优惠券</router-link></span>
          </div>
    </div>
        <div class="footer">
            <b>实付: <em>￥398</em></b>
             <button>立即支付</button>
        </div>
   </div>
</template>

<script>
import Upload from '@/components/Upload'
import TypePicker from '@/components/TypePicker'
import CityPicker from '@/components/CityPicker'

export default {
  data(){
    return {

    }
  },
  created() {
  },
  components: {
    Upload,
    TypePicker,
    CityPicker
  },
  methods: {

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
     overflow: hidden;
}

.section{
  width:100%;
  flex:1;
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
  font-size:0.26rem;
  color:rgb(54, 153, 247);
  border-right:0.01rem solid rgba(0,0,0,0.6);
}
.nav>b:last-of-type{
  border-right:0;
}
.nav>b:nth-of-type(1){
  background:rgb(54, 153, 247);
  color:#fff;
  border-radius: 0.05rem;
}
.nav>em{
  width:0;
  height:0;
  border:19px solid transparent;
  border-left-color:rgb(54, 153, 247);
  position:absolute;
  left:1.85rem;
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
  color:rgb(255, 87, 75);
  font-size: 0.4rem;
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
.footer>b{
  font-weight: normal;
}
.footer>b>em{
  color:rgb(255, 87, 75);
  font-style:normal;
  font-size:0.4rem;
}
.footer>button{
  width:2rem;
  height:1rem;
  border:0;
  outline: none;
  background:rgba(0,0,0,0.3);
  color:#ffffff;
  font-size:0.35rem;
  border-radius: 0.1rem;
}
</style>

