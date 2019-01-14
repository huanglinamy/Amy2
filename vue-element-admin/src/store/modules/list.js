import {getUserList} from '@/api/list'

const state = {
  list: [],
  current: 1
}

const mutations = {
  updateList(state, list){
    state.list = list;
  }
}

const actions = {
  // 获取用户列表
  GetUserList({commit}, query){
    return new Promise((resolve, reject)=>{
      getUserList(query).then(res=>{
        if (res.data.code == 1){
          commit('updateList', res.data.data.list)
          resolve();
        }else{
          reject();
        }
      }).catch(err=>{
        reject(err);
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
