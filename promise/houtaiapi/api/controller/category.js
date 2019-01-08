
const category = require('../model/category')

const dataToTree = (data) => {
  const dataJson = {}
  const tree = []
  data.forEach((item, index) => {
    dataJson[item.categoryId] = Object.assign({}, item, {
      children: []
    })
  });
  
  for (let key in dataJson) {
    if (dataJson[key].parentId != 0) {
      
      dataJson[dataJson[key].parentId].children.push(dataJson[key])
    } else {
      tree.push(dataJson[key])
    }
  }
  return tree;
} 

/**
 * 获取分类列表数据
 */
const select_category = async (req, res, next) => {
  // try {
    const data = await category.selectCategory()
    res.json({
      code: 1,
      data: dataToTree(data)
    })
  // } catch (e) {
  //   res.status(402).json({
  //     name: '',
  //     message: '请求失败'
  //   })
  // }
}

module.exports = {
  select_category
}