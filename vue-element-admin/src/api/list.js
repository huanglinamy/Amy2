import request from '@/utils/request'

export function getUserList(search = []) {
  let url = '/users/list';
  if (search.length){
    url += '?'+search.join('&');
  }
  return request({
    url,
    method: 'get'
  })
}
