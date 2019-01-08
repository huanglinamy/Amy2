<template>
   <div>
        <div ref="main" style="width: 400px;height:300px;"></div>
   </div>
</template>

<script>
import echarts from 'echarts';
export default {
   data(){
     return {
         option :{
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
   }
     }
   },
   mounted() {
       let myChart =echarts.init(this.$refs.main);
       myChart.setOption(this.option,true);
   },
}
</script>

<style>

</style>
