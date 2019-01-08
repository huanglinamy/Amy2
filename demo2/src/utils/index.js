import Cookie from 'js-cookie';

// 获取登陆态
export let getToken = ()=>{
  return Cookie.get('chelun_acToken') || '';
}
