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
              <span>登录后查看优惠券</span>
          </div>
          
             <div class="found">
                 <router-link to="/faq">常见问题?</router-link>
                  <router-link to="/address">去收货地址页面</router-link>
             </div>
              <!-- <button @click="pay">立即支付</button> -->
              <div class="file">
                  <input type="file" @change="fileUpload">
                  <span>图片上传</span>
             </div>
             <img :src="src">

              <canvas id="canvas"></canvas>

             <div class="bottom" v-if="isShow">
                 <button id="cc">联系客服</button>
                 <a href="mailto:2388801730@qq.com">拨打电话</a>
             </div>

      </div>
        <div class="footer">
            <b>实付: <em>￥398</em></b>
            <button @click="pay">立即支付</button>
        </div>
        <div class="amy" @click="btn">Amy</div>
   </div>
</template>

<script>
var $ = require('zepto');
import Upload from '@/components/Upload'
import TypePicker from '@/components/TypePicker'
import CityPicker from '@/components/CityPicker'
import {doPay, uploadBase64} from '@/api/index'

export default {
  data(){
    return {
      src: '',
      isShow: true
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
    pay(){
      doPay();
    },
    async fileUpload(e){
      console.log('e.target...', e.target.files)
      let reader = new FileReader();
      // 判断图片是否过多
      if (e.target.files[0].size > 1024*300){

      }
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = ()=>{
        this.src = reader.result;
        console.log('reader.result...', reader.result);
         var img = new Image();
         img.src = reader.result;
         img.onload = async ()=>{
           console.log(img.width, img.height);
           var canvas = document.getElementById('canvas');
           var context = canvas.getContext('2d');
           canvas.width = img.width;
           canvas.height = img.height;
           // 压缩画布
          context.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width/2, img.height/2);

          // 绘制一张网络图片
          var img2 = new Image();
          img2.crossOrigin = 'anonymous'
          var url = 'http://123.206.55.50:11000/static/9c5ab5222bb94e9beec79ded.jpg';
          let data = await imageToBase64(url)
          console.log('data...', data);
          img2.src = 'data:image/jpeg;base64,'+data;
          img2.onload = async ()=>{
            context.drawImage(img2, 0, 0, img2.width, img2.height, 50, 50, img2.width/2, img2.height/2);
             // toDataUrl时，设置为jpeg或者图片质量
            var baseStr1 = canvas.toDataURL('image/jpeg', 0.7);
            var baseStr2 = canvas.toDataURL('image/png', 1);
            // console.log(baseStr1, baseStr2);
            let res1 = await uploadBase64(baseStr1);
            let res2 = await uploadBase64(baseStr2);
            console.log('res1...', res1, 'res2...', res2);
          }
          //  console.log(canvas.toDataURL());
         }
      }
    },
     btn: function() {
      if (this.isShow == false) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  }
}
</script>

<style lang="scss">
.wrap{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    font-size:0.32rem;
    background:#eee;
    //  overflow: hidden;
}

.section{
  width:100%;
  flex:1;
  overflow-y:auto;
}

.nav{
  width:100%;
  height:0.8rem;
  display:flex;
  justify-content:space-around;
  align-items: center;
  background:#fff;
  position: relative;
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
  background:rgb(60, 125, 245);
  color:#ffffff;
  font-size:0.35rem;
  border-radius: 0.1rem;
}







.amy{
  width:1rem;
  height:1rem;
  background:rgb(71, 103, 247);
  border-radius: 50%;
  text-align:center;
  line-height: 1rem;
  font-size:0.32rem;
  color:#fff;
  position:fixed;
  right:0.5rem;
  bottom:2rem;
}
.found{
  width:100%;
  height:1rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.2rem;
  a{
    height:0.8rem;
    line-height: 0.8rem;
  }
}
.file{
  width:100%;
  display:flex;
  justify-content: space-between;
  padding:0 0.2rem;
  input{
    width:3rem;
    height:0.5rem;
  }
  span{
    font-size: 0.3rem;
  }
}
.bottom{
  position: fixed;
  bottom: 1.85rem;
  left: 0;
  width: 50%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:rgba(0,0,0,0.8);
  button,a{
    width: 100%;
    height: 30px;
    text-align: center;
    position: relative;
    color:#fff;
  }
  button{
    border-top: 1px solid #c0c0c0;
    border:0;
    outline: none;
    background:none;
    border-bottom: 0.01rem solid #fff;
  }
  button::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    height: 1px;
    width: 100%;
    background: #c0c0c0;
  }
}
@mixin scale($ratio){
  transform: scaleY($ratio)
}
// 2倍屏
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .bottom button::after{
    // transform: scaleY(0.5);
    @include scale(0.5)
  }
}
// 3倍屏
@media screen and (-webkit-min-device-pixel-ratio: 3) {
  .bottom button::after{
    // transform: scaleY(0.33);
    @include scale(0.33)
  }
}
// 响应式
@media screen and (min-width: 400px){

}
</style>

