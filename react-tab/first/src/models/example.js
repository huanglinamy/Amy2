//放redux的
export default {
//命名空间,给模块取名字,想访问里面的数据先访问命名空间
  namespace: 'example',
//存放的数据,做数据的初始化
  state: {},
//监听功能,常用于路由的监听
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
//副作用,异步操作 redux-saga
  effects: {  //call方法一般用来调用api把执行的结果作为我们的返回值,put方法发送一个新的action相当于dispatch
    *fetch({ payload }, { call, put }) {  // eslint-disable-line   saga不用手动调用next yield后面跟一个ajax
      yield put({ type: 'save' });
    },
  },
//常规的reducer,处理数据
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    // update(state,action){
    //   setTimeout(()=>{
    //     return {a:1}
    //   },2000);
    // }
  },

};
