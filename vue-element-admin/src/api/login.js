import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/users/login',
    method: 'post',
    data
  })
}
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: '/users/info',
    method: 'get'
  })
}

export function register(username, password, phone) {
  return request({
    url: '/users/register',
    method: 'post',
    data: {
      username,
      password,
      phone
    }
  })
}