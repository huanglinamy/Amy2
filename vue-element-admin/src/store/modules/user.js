import { loginByUsername, logout, register, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import md5 from 'md5'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, md5(userInfo.password + '1605A')).then(response => {
          // console.log('response...', response, md5(userInfo.password+'1605A'));
          commit('SET_TOKEN', response.data.data.token)
          setToken(response.data.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 用户注册
    registerByUserName({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        let {username, password, phone} = userInfo
        register(username, md5(password + '1606A'), phone).then(response => {
          console.log('response...', response)
          if (response.data.code === 1) {
            commit('SET_TOKEN', 'admin')
            setToken('admin')
            resolve()
          } else {
            reject(response.data.msg)
          }
        })
      })
    },
    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          console.log('response...', response)
          if (response.data.code === 1) {
            if (response.data.data.access && response.data.data.access.length > 0) { // 验证返回的roles是否是一个非空数组
              commit('SET_ROLES', response.data.data.access)
            } else {
              reject('getInfo: roles must be a non-null array!')
            }

            commit('SET_NAME', response.data.data.username)
            commit('SET_AVATAR', response.data.data.avatar)
            commit('SET_INTRODUCTION', response.data.data.profile)
            resolve({ data: { roles: response.data.data.access }})
          } else {
            reject('Verification failed, please login again.')
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit, dispatch }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
          resolve()
        })
      })
    }
  }
}

export default user