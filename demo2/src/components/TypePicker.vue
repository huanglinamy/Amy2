<template>
    <div>
        <div class="server" @click="clickType">
              <span>服务类型</span>
              <span>{{type}}</span>
        </div>
        <van-popup v-model="showType" position="bottom" overlay>
            <van-picker :columns="typeArray" @cancel="onCancel" show-toolbar title="请选择服务类型" @confirm="onConfirm"/>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: 'TypePicker',
    data(){
        return {
            showType: false,
            typeArray: ["补驾照", "换驾照"],
            type: ''
        }
    },
    methods: {
         onCancel(e){
            this.showType = false;
        },
        onConfirm(value){
            console.log('value...', value);
            this.type = value;
            this.onCancel();
        },
        clickType(){
            this.showType = true;
        }
    }
}
</script>

<style lang="">
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
</style>