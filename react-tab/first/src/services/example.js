 //项目的接口文件 放请求的
import request from '../utils/request'; 

export function query() {
  return request('/api/users'); //return 一个request地址
}
