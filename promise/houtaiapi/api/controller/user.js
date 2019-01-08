
const user = require('../model/user')
const jwt = require('jsonwebtoken')

/**
 * 获取验证码
 * @param {*} req  
 * @param {*} res 
 * @param {*} next 
 */

const getMsgCode = async (req, res, next) => {
  let msgCode = ''
  const {
    phone
  } = req.query;
  
  
  while (msgCode.length < 6) {
    msgCode += parseInt(Math.random() * 10)
  }
  req.session.code = msgCode
  
  res.json({
    code: 1,
    msg: '验证码成功发送至' + phone + '用户  验证码是['+msgCode+']'
  })
}


// 用户登录
const login_do = async (req, res, next) => {
  const {
    phone,
    code
  } = req.query;
  if (req.session.code === code) {
    const userInfo = await user.selectUser(phone)  // 查询用户
    
    if (userInfo) {
      const token = jwt.sign({...userInfo}, 'liuyu')  // 使用jwt进行加密
      res.cookie('token', token, {maxAge: 1000*60*60*24*30});
      res.json({
        ...userInfo,
        msg: '登录成功'
      })
    } else {
      res.json({
        msg: '用户不存在'
      })
    }
  } else {
    res.status(401).json({
      msg: '验证码不正确'
    })
  }
}

// 用户信息
const info = (req, res, next) => {
  const userInfo = req.userInfo
  res.json(userInfo)
}

const add_address = async (req, res, next) => {
  const {
    name,
    phone,
    location,
    address
  } = req.body
  user.addAddress({
    name,
    phone,
    location,
    address
  }, req.userInfo).then(
    (data) => {
      res.json({
        code: 1,
        message: '成功'
      })
    },
    () => {
      res.json({
        code: 0,
        message: '失败'
      })
    }
  )
}

const select_address = async (req, res, next) => {
  const userId = req.userInfo.id
  try {
    const data = await user.selectAddress(userId)
    res.json({
      code: 1,
      data: data
    })
  } catch (e) {
    res.json({
      code: 0,
      message: '失败'
    })
  }
}

const address_info = async (req, res, next) => {
  const {
    id
  } = req.query
  try {
    const data = await user.addressInfo(id)
    res.status(201).json({
      code: 1,
      data: data
    })
  } catch (e) {
    res.json({
      code: 0,
      message: '失败'
    })
  }
}

const remove_address = async (req, res, next) => {
  const {
    id
  } = req.body
  user.removeAddress(id).then(() => {
    res.status(204).json({
      code: 1,
      message: '删除成功'
    })
  }).catch(() => {
    res.status(403).json({
      code: 0,
      message: '失败'
    })
  })
}






module.exports = {
  getMsgCode,
  login_do,
  info,
  add_address,
  select_address,
  address_info,
  remove_address
}