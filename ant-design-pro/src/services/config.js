// 动态设置host
// export const host = !/123.206.55.50/.test(window.location.host)?'http://169.254.135.255:15000': 'httP://123.206.55.50:15000';

// 动态设置host
export const host = !/123.206.55.50/.test(window.location.host)?'http://123.206.55.50:15000': 'http://123.206.55.50:15000';
