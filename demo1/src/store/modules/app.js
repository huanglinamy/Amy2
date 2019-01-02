//模块中存储的数据
const state = {  //这里存储了一个数据叫做一个对象，对象里面存了一个num
    num: 1000
}

//模块中派生的数据,可以缓存数据
const getters = {
    formatNum:(state)=> {
        const reg = /(?=(?!(\b))(\d{3})+$)/g;
        let str = state.num.toString().replace(reg, ",");
        return str;
    }
}

//模块中的同步改变
const mutations = {
    changeNum(state, action) {
        console.log('state...', state, 'action...', action)
        //setTimeout是一个异步操作
        // setTimeout(() => { //mutations里面如果有异步操作会捕获不到 可以理解为日志操作只支持同步操作
            state.num = action.payload == '+' ? state.num + 1 : state.num - 1;
        // }, 100);
    }
}

//模块中的异步改变
const actions={
    changeNumAsync({commit},action){
        return new Promise((resolve,reject)=>{
              // console.log('context...',context,action);
        setTimeout(()=>{
           commit({
               type:'changeNum',
               action
           });
           resolve();
        },5000);
        })
    }
}


export default {
    //命名空间,做模块化
    namespaced: true, //划分模块需要有命名空间
    state,
    getters,
    actions,
    mutations
}