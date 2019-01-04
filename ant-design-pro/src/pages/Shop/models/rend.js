import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { fakeSubmitForm } from '@/services/api';


export default {
  namespace: 'rend',
    state: {
        List: [],
    },

  effects: {
    * getList({ payload }, { call, put }) {
        let res = yield call(() => { 
            return fetch('http://123.206.55.50:15000/shop/list') //这行代码会阻塞
                .then(res => res.json())
                .then(body => body)
        })
         console.log('res...', res);
        yield put({  //put是个对象
            type: 'updateList',
            payload: res.data.list
        })
    },
  },

  reducers: {
    updateList(state, { payload }) { 
        return { ...state, List: payload }
    },
  },
};