

const productData =  []

const db = require('../../db');
const category = require('./category');

// const addProduct = (data) => {
//   const sql = 'insert into product (name, img, imgList, price, origPrice, count, volume, details, attributes, categoryId) values (?,?,?,?,?,?,?,?,?,?)';
//   for (let i=0; i < data.length; i++) {
//     db.query(sql, [
//       data[i].wareName,
//       data[i].wareImg,
//       JSON.stringify([
//         "http://img.dmallcdn.com/20180703/a2e0e4dd-905d-475e-a545-7153a5fbb80d_800x800L",
//         "http://img.dmallcdn.com/20180703/4ebcffd5-ee14-4842-b01e-d874b8c26c73_800x800L",
//         "http://img.dmallcdn.com/20180703/14988915-8bd8-4161-9348-21acb689d5f0_800x800L"
//       ]),
//       data[i].promotionWareVO ? (data[i].promotionWareVO.unitProPrice/100).toFixed(2) : 0,
//       (data[i].warePrice/100).toFixed(2),
//       200,
//       0,
//       '<p><img src="http://img.dmallcdn.com/20181108/0e4eca24-dd1e-4e66-ba31-75d3cc52d1be_m640" alt="" /><img src="http://img.dmallcdn.com/20181108/0a03426d-9e10-47b4-bec1-17be2942f243_m640" alt="" /><img src="http://img.dmallcdn.com/20181108/b8558591-276a-4eff-abaa-b46dba457d4a_m640" alt="" /><img src="http://img.dmallcdn.com/20181108/caf97450-4674-4908-88e4-468412e09471_m640" alt="" /><img src="http://img.dmallcdn.com/20181108/cb711987-b16e-4e9e-8e28-afc75dfaf394_m640" alt="" /><img src="http://img.dmallcdn.com/20181108/428659da-6aa2-4552-a0bc-a786454ce3e1_m640" alt="" /><br /></p><p><img src="http://img.dmallcdn.com//20180408/38fb0f09-bd05-4302-9519-331d4dcf7752_m640" alt="" /></p>',
//       JSON.stringify({
//         "品种": "牛油果",
//         "产地": "北京八维"
//       }),
//       72
//     ], (error) => {
//       if (!error) {
//         console.log('添加成功')
//       } else {
//         console.log(error)
//       }
//     })
//   }
// }
// addProduct(productData)
console.log('aa')


const selectProduct = async ({
  page,
  page_size,
  category_id,
  filter = ''
}) => {
  const categoryids = await category.getCildId(category_id)
  let sql = `select * from product where categoryId in (${categoryids.toString()})` 
  const filters = JSON.parse(filter)
  if (Object.keys(filters).length >= 1) {
    sql += ` order by `
    for (let key in filters) {
      sql += `${key} ${filters[key]}, `
    }
    sql = sql.substr(0, sql.length - 2)
  }
  sql += ` limit ${(page-1)*page_size}, ${page_size} `
  console.log(sql)
  return new Promise((resolve, reject) => {
    
    db.query(sql, [], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve(Array.from(res))
      }
    })
  })
}

const selectItem = (id) => {
  const sql = `select * from product where id=${id}`
  return new Promise((resolve, reject) => {
    db.query(sql, [], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve(Array.from(res)[0])
      }
    })
  })
}


const updateProduct = (options, id) => {

  let sql = `update product set `
  for (let key in options) {
    sql += key + '=' + options[key] + ',';
  }
  sql = sql.substr(0, sql.length-1);

  sql += ` where id = '${id}'`
  console.log(sql)
  return new Promise((resolve, reject) => {
    db.query(sql, [], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve()
      }
    })
  })
}


module.exports = {
  selectProduct,
  updateProduct,
  selectItem
}