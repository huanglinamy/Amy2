<template>
    <div>
        <button @click="changeNum('+')">+</button>
        <span>{{this.$store.state.app.num}}</span>
        <button @click="changeNum('-')">-</button>
    </div>
</template>

<script>
export default {
   mounted(){
       console.log('this.$store',this.$store);
   },
   methods:{
       changeNum(type){
        //this.$store.commit('changeNum',type);
          this.$store.commit({
              type:'app/changeNum',
              payload:type
          })
       }
   },
}
</script>

<style lang="scss" scoped>

</style>

