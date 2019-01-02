<template>
    <div>
        <button @click="changeNum('+')">+</button>
        <span>{{this.$store.state.app.num}}</span>
        <span>千分符分割之后的数据：{{this.$store.getters.app/formatNum}}</span>
        <button @click="changeNum('-')">-</button>
    </div>
</template>

<script>
//web永远操作不了app

export default {
   mounted(){
       console.log('this.$store',this.$store,this.$store.getters);
   },
   methods:{
       changeNum(type){
        //this.$store.commit('changeNum',type);
        //提交一个mutation
        // this.$store.commit({
        //    type:'app/changeNum',
        //    payload:type
        // })

        // 提交一个commit
        this.$store.dispatch({
            type:'app/changeNumAsync',
            payload:type
        }).then(res=>{
            console.log('异步操作完成了！')
        })
       }
   },
}
</script>

<style lang="scss" scoped>

</style>



