var express = require('express');
var router = express.Router();
const homeController = require('./controller/home');
const userController = require('./controller/user');
const categoryController = require('./controller/category');
const productController = require('./controller/product');
const cartController = require('./controller/cart');
const verifyToken = require('./middware/verifyToken')


/**
 * @api {get} /api/home/banner 获取首页banner列表
 * @apiDescription 获取banner
 * @apiName getBanner
 * @apiGroup Home
 * @apiParam {string} dataType 类型
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : []
 *  }
 * @apiSampleRequest http://localhost:3000/api/home/banner
 * @apiVersion 1.0.0
 */
router.get('/home/banner', homeController.banner)

/**
 * @api {get} /api/home/quick_menu 获取首页快速菜单
 * @apiDescription 获取快速菜单
 * @apiName quick_menu
 * @apiGroup Home
 * @apiParam {string} dataType 类型
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : []
 *  }
 * @apiSampleRequest http://localhost:3000/api/home/quick_menu
 * @apiVersion 1.0.0
 */
router.get('/home/quick_menu', homeController.quick_menu)


router.get('/user/get_msg_code', userController.getMsgCode)
router.get('/user/login_do', userController.login_do)

router.get('/user/info', verifyToken, userController.info)

router.post('/user/address', verifyToken, userController.add_address)
router.get('/user/address', verifyToken, userController.select_address)

router.get('/user/address_info', verifyToken, userController.address_info)
router.delete('/user/remove_address', verifyToken, userController.remove_address)

router.get('/category/list', categoryController.select_category)

router.get('/product/list', productController.selectProduct)


router.post('/cart/add_cart', verifyToken, cartController.addCart)
router.post('/cart/reduce_cart', verifyToken, cartController.reduceCart)
router.get('/cart/list', verifyToken, cartController.selectCartList)

module.exports = router;

/**
 * MVC全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写
 * 路由：一个地址对应一个controller  
 * model: 模型，用来操作数据库，也叫数据模型
 * controller：控制器用来控制数据，输出数据（输出到view）
 * view: 显示数据
 * 
 * 一个路由地址  ->  函数  ->   返回值( 数据库里面取出来的 )
 * 
 * 
 */
