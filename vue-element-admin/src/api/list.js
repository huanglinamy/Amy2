import request from '@/utils/request'

// 获取用户列表
export function getUserList(search = []) {
  let url = '/users/list'
  if (search.length) {
    url += '?' + search.join('&')
  }
  return request({
    url,
    method: 'get'
  })
}

// 更新用户信息
export function updateUserInfo(data) {
  return request({
    url: '/users/update',
    method: 'post',
    data
  })
}

// 删除用户
export function deleteUser(data) {
  console.log('data...', data);
  return request({
    url: '/users/action',
    method: 'delete',
    data
  })
}

// 为用户分配角色
export function modifyRule(data) {
  return request({
    url: '/users/action',
    method: 'put',
    data
  })
}

var arr = [
  {"id":"1","code":"A","name":"工程设计","parentid":""},
  {"id":"2","code":"A01","name":"工程施工类","parentid":"1"},
  {"id":"3","code":"A01.001","name":"土建工程","parentid":"2"},
  {"id":"4","code":"A01.002","name":"装饰装修","parentid":"2"},
  {"id":"5","code":"A01.003","name":"安装工程","parentid":"2"},
  {"id":"6","code":"A01.004","name":"临时工程","parentid":"2"},
  {"id":"7","code":"A01.005","name":"其他","parentid":"2"},
  {"id":"8","code":"A02","name":"造价咨询类","parentid":"1"},
  {"id":"9","code":"A02.001","name":"设计咨询","parentid":"8"},
  {"id":"10","code":"B","name":"设备类","parentid":""},
  {"id":"11","code":"B01","name":"其他","parentid":"10"},
  {"id":"12","code":"B02","name":"材料设备类","parentid":"10"},
  {"id":"13","code":"B02.001","name":"机房设计","parentid":"12"},
  {"id":"14","code":"B02.002","name":"管道设计","parentid":"12"},
  {"id":"15","code":"B02.003","name":"门窗材料","parentid":"12"},
  {"id":"16","code":"B02.004","name":"建筑设计","parentid":"12"}
  ];

// 参考某轮
var organize = [{
  id: 1, name: '***事业部', parentid: ''
},{
  id: 2, name: '***事业部', parentid: ''
},{
  id: 3, name: '总经办', parentid: ''
},{
  id: 4, name: '技术研发', parentid: 1
},{
  id: 5, name: '产品研发', parentid: 1
},{
  id: 6, name: '市场渠道', parentid: 1
},{
  id: 7, name: '商业合作', parentid: 1
},{
  id: 8, name: '前端开发', parentid: 4
},{
  id: 9, name: '后端开发', parentid: 4
},{
  id: 10, name: 'ios开发', parentid: 4
},{
  id: 11, name: 'android开发', parentid: 4
},{
  id: 12, name: '测试', parentid: 4
},{
  id: 13, name: '运维', parentid: 4
},{
  id: 14, name: '设计', parentid: 4
},{
  id: 15, name: '产品', parentid: 5
},{
  id: 16, name: '运营', parentid: 5
},{
  id: 17, name: '产品总监', parentid: 15
},{
  id: 18, name: '产品经理', parentid: 15
},{
  id: 19, name: '资深前端开发', parentid: 8
},{
  id: 20, name: '高级前端开发', parentid: 8
},{
  id: 21, name: '初级前端开发', parentid: 8
},{
  id: 22, name: '孙月', parentid: 20
}]