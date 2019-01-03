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

          <div class="crrentList">
              <div class="current" @click="clickCity">
                 <span>当前驾照签发城市</span>
                 <span>{{info.city.join(' ')}}</span>
             </div>
             <van-popup v-model="showCity" position="bottom" :overlay="true">
                  <van-picker :columns="cityArray" @change="cityChange" ref="cityPicker" @cancel="onCancel" show-toolbar title="请选择签发城市" @confirm="cityConfirm"/>
             </van-popup>
         </div>

           <div class="fillinList">
              <div class="fillin" @click="clickCity">
                 <span>可补换的签发城市</span>
                 <span>{{info.city.join(' ')}}</span>
             </div>
             <van-popup v-model="showCity" position="bottom" :overlay="true">
                  <van-picker :columns="cityArray" @change="cityChange" ref="cityPicker" @cancel="onCancel" show-toolbar title="请选择签发城市" @confirm="cityConfirm"/>
             </van-popup>
         </div>

          <div class="serverprice">
                <span>服务费</span>
                <span>￥999</span>
          </div>
          <div class="discounts">
              <span>优惠</span>
              <span> <router-link to="/login">登录后查看优惠券</router-link></span>
          </div>
    </div>
        <div class="footer">
            <b>实付: <em>￥999</em></b>
             <button>立即支付</button>
        </div>
   </div>
</template>

<script>
import Upload from '@/components/Upload'
import TypePicker from '@/components/TypePicker'
import {cityList, costList} from '@/api/index'
export default {
  data(){
    return {
      showType: false,
      showCity: false,
      typeArray: ["补驾照", "换驾照"],
      // 签发城市
      cityList: [],
      cityArray: [],
      info: {
        type: '',
        city: []
      }
    }
  },
  created() {
    this.getCityList();
  },
  components: {
    Upload,
    TypePicker
  },
  methods: {
    async getCityList(){
      let res = await cityList();
      res.data.forEach(item=>{
        item.list.forEach(value=>{
          delete value.list;
        })
      })
      console.log('res...', res);
      this.cityList = res.data;

      this.cityArray = [{
        values: this.cityList.map(item=>item.name)
      }, {
        values: this.cityList[0].list.map(item=>item.name)
      }]
    },
    async getCostList(){

    },
    cityChange(picker, values){
      let index = this.cityList.findIndex(item=>item.name == values[0]);
      this.cityArray[1].values = this.cityList[index].list.map(item=>item.name)
      // console.log('picker...', picker, values, this.cityArray, this.$refs.cityPicker, this.cityList[index].list.map(item=>item.name));
      this.$refs.cityPicker.setColumnValues(1,  this.cityList[index].list.map(item=>item.name))
    },
    cityConfirm(values){
      this.info.city = values;
      this.showCity = false;
    },
    onCancel(e){
      this.showType = false;
    },
    onConfirm(value){
      console.log('value...', value);
      this.info.type = value;
      this.onCancel();
    },
    clickType(){
      this.showType = true;
    },
    clickCity(){
      this.showCity = true;
    }
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
  font-size:0.25rem;
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

.crrentList{
  width:100%;
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

.fillinList{
    width:100%;
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

