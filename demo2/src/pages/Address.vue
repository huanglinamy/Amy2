<template>
    <div>
            <div class="navs">
                   <em></em>
                   <b>订单提交</b>
                   <b>收货地址</b>
                   <b>正在办理</b>
                   <b>办理完成</b>
             </div>
             <div class="ads">
                 收货地址
             </div>
             <div class="across">
                 <b>联系省市</b>
                 <b>北京</b>
                 <b>北京市</b>
                 <b>东城区</b>
             </div>
            <div class="adress">
                <span>详细地址</span>
                <span></span>
            </div>
             <div class="adress">
                <span>联系电话</span>
                <span>请输入联系电话</span>
            </div>
            <div class="adress">
                <span>联系人</span>
                <span>请输入联系人</span>
            </div>
   
        <div class="coupon" @click="maskcoupon"><img src="../assets/ee-icon.png" alt=""></div>
        <router-view></router-view>
        <div :class="isconupn==true?'maskcoupon show':'hide'">
            <div>
                <p>分享后自己能够获得优惠券</p>
                <p>自己和好友都能得</p>
                <img src="../assets/coupon.png" />
                <div class="maskbtn">
                    <button @click="delcoupon">给钱都不要</button>
                    <button  @click="share">果断分享</button>
                </div>
            </div>    
        </div>
    </div>
    
</template>

<script>
import {doShare} from '@/api/index';
export default {
    data(){
        return {
            idx:'1',
            isconupn:false
        }
    }, 
     created() {
    console.log(55555);
    // 分享到朋友圈
    window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
      title: '分享一张大图',
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546919478716&di=b8a7d34022e91d86cd0d31fc9d6ec346&imgtype=0&src=http%3A%2F%2Fimg0.pclady.com.cn%2Fpclady%2F1606%2F30%2F1536947_14.jpg',
      type: 'photo'
    },
    // 分享到会话
    window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
      title: '五年工作经验，一年模拟',
      desc: '微信分享秘籍',
      link: 'https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN',
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546919682884&di=4dceaceab6cc8f5763a9a4e384b54843&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2017%2F04%2F30%2F149348371823762056.JPEG'
    }
  },
    methods:{
        clicknav(i){
            this.idx = i
        },
        maskcoupon(){
            this.isconupn = true
        },
        delcoupon(){
            this.isconupn = false
        },
        share(){
            doShare();
        }
    },
}
</script>

<style lang="scss" scoped>
.navs{
  width:100%;
  height:0.8rem;
  display:flex;
  justify-content:space-around;
  align-items: center;
  background:#fff;
  position: relative;
}
.navs>b{
  width:25%;
  height:100%;
  text-align: center;
  line-height: 0.8rem;
  font-weight: 400;
  font-size:0.26rem;
  color:rgb(54, 153, 247);
  border-right:0.01rem solid rgba(0,0,0,0.6);
}
.navs>b:last-of-type{
  border-right:0;
}
.navs>b:nth-of-type(2){
  background:rgb(54, 153, 247);
  color:#fff;
  border-radius: 0.05rem;
}
.navs>em{
  width:0;
  height:0;
  border:19px solid transparent;
  border-left-color:rgb(54, 153, 247);
  position:absolute;
  left:3.76rem;
}
.ads{
    width:100%;
    height:0.6rem;
    text-align:center;
    line-height: 0.6rem;
    background:#eee;
    color:rgb(82, 82, 82);
    font-size:0.3rem;
}
.across{
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items: center;
    height:1rem;
    border-bottom: 0.015rem solid rgb(226, 226, 226);
    b{
        font-weight: 400;
    }
}
.adress{
   width:100%;
   height:1rem;
   display:flex;
   justify-content: space-between;
   align-items: center;
   padding:0 0.2rem;
   background:#fff;
   border-bottom: 0.015rem solid rgb(226, 226, 226);
}
.adress>span{
  font-size:0.32rem;
}
.adress>span:nth-of-type(2){
  color:rgb(148, 148, 148);
  font-size: 0.32rem;
}


















.show{
    display: block;
}
.hide{
    display: none;
}
.nav{
    width:100%;
    height:40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #F0F0EF;
    background: #fff;
}
.nav>p{
    display: block;
    width:100%;
    height:100%;
    line-height: 40px;
    border-right:1px solid #F0F0EF;
    position: relative;
    margin-right:8px;
}
.bg{
    background: #3AAFFC;
    color:#fff;
}
.bg::after{
    content: '';
    display: block;
    position: absolute;
    border-top: .41rem solid #fff;
    border-bottom: .41rem solid #fff;
    border-left: .15rem solid #3AAFFC;
    top:0;
    left:80px;
}

.coupon{
    width:50px;
    height:50px;
    border-radius: 50%;
    position: fixed;
    right:10px;
    bottom:80px;
}
.coupon>img{
    width:100%;
    height:100%;
}
.maskcoupon{
    width:100%;
    height:100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    left:0;
    top:0;
}
.maskcoupon>div{
    width:80%;
    height:300px;
    background: #fff;
    padding:10px;
    margin:200px auto;
}
.maskcoupon>div img{
    width:100%;
    height:200px;
}
.maskbtn{
    width:100%;
    height:40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:relative;
    top:-0.2rem;
}
.maskbtn>button{
    width:100%;
    height:100%;
    margin:0 0.2rem;
}
.maskbtn>button:nth-of-type(2){
    background:rgb(88, 149, 240);
    color:#fff;
}
p:nth-of-type(2){
    color:rgb(110, 108, 108);
    font-size: 0.28rem;
    height:0.5rem;
    line-height: 0.5rem;
}
</style>



    