// import { query as queryUsers, queryCurrent } from '@/services/user';

// export default {
//   namespace: 'user',

//   state: {
//     list: [],
//     currentUser: {},
//   },

//   effects: {
//     *fetch(_, { call, put }) {
//       const response = yield call(queryUsers);
//       yield put({
//         type: 'save',
//         payload: response,
//       });
//     },
//     *fetchCurrent(_, { call, put }) {
//       const response = yield call(queryCurrent);
//       yield put({
//         type: 'saveCurrentUser',
//         payload: response,
//       });
//     },
//   },

//   reducers: {
//     save(state, action) {
//       return {
//         ...state,
//         list: action.payload,
//       };
//     },
//     saveCurrentUser(state, action) {
//       return {
//         ...state,
//         currentUser: action.payload || {},
//       };
//     },
//     changeNotifyCount(state, action) {
//       return {
//         ...state,
//         currentUser: {
//           ...state.currentUser,
//           notifyCount: action.payload.totalCount,
//           unreadCount: action.payload.unreadCount,
//         },
//       };
//     },
//   },
// };







import { query as queryUsers, queryCurrent } from '@/services/user';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser:  {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [
        {
          key: '0',
          label: '很有想法的',
        },
        {
          key: '1',
          label: '专注设计',
        },
        {
          key: '2',
          label: '辣~',
        },
        {
          key: '3',
          label: '大长腿',
        },
        {
          key: '4',
          label: '川妹子',
        },
        {
          key: '5',
          label: '海纳百川',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: {
          label: '浙江省',
          key: '330000',
        },
        city: {
          label: '杭州市',
          key: '330100',
        },
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888',
    },
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    // 修改用户头像
    changeAvatar(state, action) {
      let currentUser = {...state.currentUser};
      currentUser.avatar = action.payload;
      return {
        ...state,
        currentUser
      }
    },
    // 获取当前用户信息
    saveCurrentUser(state, action) {
      console.log('payload...', action.payload);
      let currentUser = {...state.currentUser};
      // 覆盖用户数据
      currentUser.userid = action.payload.data.id;
      currentUser.avatar = action.payload.data.avatar;
      currentUser.address = action.payload.data.address;
      currentUser.email = action.payload.data.email;
      currentUser.phone = action.payload.data.phone;
      currentUser.name = action.payload.data.username;
      return {
        ...state,
        currentUser
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};

