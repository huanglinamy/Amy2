export default {
    namespace: 'index',
    state: {
        num: 1000,
        list:[]
    },

    effects: {
        * getList({ payload }, { call, put }) {
            let res = yield call(() => {  //call方法里面是个异步操作 需要yield来修饰一下
               return fetch('https://www.easy-mock.com/mock/5b66e3d11fc80e53a3ad62d4/example/index') //这行代码会阻塞
                    .then(res => res.json())
                    .then(body => body)
            })
            console.log('res...',res);
            yield put({  //put是个对象
                type:'updateList',
                payload:res
            })
        }
    },

    reducers: {
        changeNum(state, { payload }) {
            console.log('payload...', payload);
            return { ...state, num: payload === '+' ? state.num + 1 : state.num - 1 }
        },
        updateList(state,{payload}){
            return {...state,list:payload}
        }
    }
}