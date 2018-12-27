//模块中存储的数据
const state = {  //这里存储了一个数据叫做一个对象，对象里面存了一个num
    num: 1000
}

//模块中的同步改变
const mutations = {
    changeNum(state,action) {
        console.log('state...',state,'action...',action)
        state.num = action.payload == '+' ? state.num + 1 : state.num - 1;
    }
}

export default {
    namespaced:true, //划分模块需要有命名空间
    state,
    mutations
}