<template>
  <div>
      <div class="current" @click="cityClick">
        <span>当前驾照签发城市</span>
        <span>{{city.join(' ')}}</span>
      </div>
       <div class="fillin" @click="costClick">
        <span>可补换的签发城市</span>
        <span>{{cost.join(' ') | filterCity(/\(签发地\)/g)}}</span>
      </div>

      <section>
        <van-popup v-model="showCity" position="bottom">
          <van-picker :columns="cityColumns" show-toolbar title="当前签发城市"
            ref="cityPicker" @change="cityChange" @cancel="cityCancel" @confirm="cityConfirm"/>
        </van-popup>
        <van-popup v-model="showCost" position="bottom">
          <van-picker :columns="costColumns" show-toolbar title="可补换城市"
            ref="costPicker" @change="costChange" @cancel="costCancel" @confirm="costConfirm"/>
        </van-popup>
      </section>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
  name: 'CityPicker',
  data(){
    return {
      // 控制当前驾照
      showCity: false,
      // 控制可补换驾照
      showCost: false,
      // 签发地多列选择配置
      cityColumns: [],
      // 可补换地多列选择配置
      costColumns: [{values:[]}, {values: []}]
    }
  },
  created(){
    // 获取签发城市，然后更新选择配置
    this.getCityList().then(res=>{
      this.cityColumns = [
        {
          values: this.cityList.map(item=>item.name)
        },
        {
          values: this.cityList[0].list.map(item=>item.name)
        }
      ]
    })
  },
  computed: {
    ...mapState({
      cityList: state=>state.cityPicker.cityList,
      costList: state=>state.cityPicker.costList,
      city: state=>state.cityPicker.city,
      cost: state=>state.cityPicker.cost
    })
  },
  methods: {
    ...mapActions({
      getCityList: 'cityPicker/getCityList',
      getCostList: 'cityPicker/getCostList'
    }),
    ...mapMutations({
      updateState: 'cityPicker/updateState'
    }),
    // 显示选择器
    cityClick(){
      this.showCity = true;
    },
    // 当省份改变的时候更新城市数据
    cityChange(picker, values){
      // 获取当前省份的下标
      let index = this.cityList.findIndex(item=>item.name == values[0]);
      // 调用api更新城市数据
      this.$refs.cityPicker.setColumnValues(1, this.cityList[index].list.map(item=>item.name));
    },
    cityCancel(){
      this.showCity = false;
    },
    cityConfirm(values){
      console.log('values...', values);
      // 触发mutation更新城市数据
      this.updateState({city: values})
      this.cityCancel();
    },
    async costClick(){
      if (!this.city.length){
        alert('请选择签发城市');
      }else{
        await this.getCostList();
        this.costColumns = [
          {
            values: this.costList.map(item=>item.name)
          },
          {
            values: this.costList[0].list.map(item=>item.name)
          }
        ]
        this.showCost = true;
        //  // 调用api更新城市数据
        //  console.log('this.$refs...', this, this.$refs)
        // this.$refs.costPicker.setColumnValues(0, this.costList.map(item=>item.name));
        // this.$refs.costPicker.setColumnValues(1, this.costList[0].list.map(item=>item.name));
      }
    },
    costCancel(){
      this.showCost = false;
    },
    costConfirm(values){
      // 触发mutation更新城市数据
      this.updateState({cost: values})
      this.costCancel();
    },
    costChange(picker, values){
       // 获取当前省份的下标
      let index = this.costList.findIndex(item=>item.name == values[0]);
      console.log('vaules...', values, index);
      // 调用api更新城市数据
      this.$refs.costPicker.setColumnValues(1, this.costList[index].list.map(item=>item.name));
    }
  }
}
</script>

<style lang="">
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
</style>
