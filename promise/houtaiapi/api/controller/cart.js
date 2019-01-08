const cart = require('../model/cart')
const product = require('../model/product')

const addCart = async (req, res, next) => {
  const {
    product_id
  } = req.body;
  const {
    id
  } = req.userInfo;
  const item = await cart.selectItem(id, product_id);
  const {count} = await product.selectItem(product_id);
  if (count >= 1) {
    if (item) {
      const updateItem = await cart.updateItem(product_id, item.num + 1);
      const updateProduct = await product.updateProduct({
        count: count-1
      }, product_id);
      res.json({
        ...item,
        num: item.num + 1
      })
    } else {
      const insterItem = await cart.insterItem(id, product_id, 1);
      const updateProduct = await product.updateProduct({
        count: count-1
      }, product_id);
      res.json(insterItem)
    }
  } else {
    res.status(403).json({
      massage: '库存不足'
    })
  }
}

const reduceCart = async (req, res) => {
  const {
    product_id
  } = req.body;
  const {
    id
  } = req.userInfo;
  const item = await cart.selectItem(id, product_id);
  const {count} = await product.selectItem(product_id);
  
  if (item.num - 1 == 0) {
    await cart.removeItem(product_id);
  } else {
    await cart.updateItem(product_id, item.num - 1);
  }
  
  const updateProduct = await product.updateProduct({
    count: count + 1
  }, product_id);
  
  res.json({
    ...item,
    num: item.num - 1
  })
}

const selectCartList = async (req, res, next) => {
  const {
    id
  } = req.userInfo;

  const list = await cart.selectCarts(id);
  const products = [];
  list.forEach(item => {
    products.push(product.selectItem(item.product_id))
  });
  Promise.all(products).then((...rest) => {
    let price = 0;
    console.log(rest)
    const product_list = rest[0].map((item, index) => {
      price += item.price * list[index].num
      return {
        ...item,
        num: list[index].num
      }
    });
    res.json({
      list: product_list,
      price: price
    })
  })
  
}

module.exports = {
  addCart,
  reduceCart,
  selectCartList
}