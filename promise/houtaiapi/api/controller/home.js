
const home = require('../model/home')

/**
 * 获取banner数据
 * @param {*} req  
 * @param {*} res 
 * @param {*} next 
 */
const banner = async (req, res, next) => {
  const {
    data_type,
    callback
  } = req.query;
  try {
    const data = await home.selectBanner(data_type)
    if (callback) {
      res.send(callback + '(' + JSON.stringify(data) + ')')
    } else {
      res.json({
        code: 1,
        data: data
      })
    }
  } catch (e) {
    res.code(402).json({
      name: '',
      message: '请求失败'
    })
  }
}


/**
 * 获取快速入口菜单
 * @param {*} req  
 * @param {*} res 
 * @param {*} next 
 */
const quick_menu = async (req, res, next) => {
  const {
    data_type,
    callback
  } = req.query;
  try {
    const data = await home.selectQuickmenu(data_type)
    if (callback) {
      res.send(callback + '(' + JSON.stringify(data) + ')')
    } else {
      res.json({
        code: 1,
        data: data
      })
    }
  } catch (e) {
    res.code(402).json({
      name: '',
      message: '请求失败'
    })
  }
}





module.exports = {
  banner,
  quick_menu
}