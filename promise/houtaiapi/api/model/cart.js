const db = require('../../db');

const selectCarts = (user_id) => {
  const sql = `select * from cart where user_id=${user_id}`
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

const selectItem = (user_id, product_id) => {
  const sql = `select * from cart where user_id=${user_id} and product_id=${product_id}`
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

const insterItem = (user_id, product_id, num) => {
  const sql = `insert into cart (user_id, product_id, num) values (?, ?, ?)`
  return new Promise((resolve, reject) => {
    db.query(sql, [
      user_id, product_id, num
    ], (error, res) => {
      if (error) {
        reject()
      } else {
        resolve({
          id: res.insterId,
          user_id, product_id, num
        })
      }
    })
  })
}

const updateItem = (product_id, num) => {
  const sql = `update cart set num = '${num}' where product_id = '${product_id}'`
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

const removeItem = (product_id) => {
  const sql = `DELETE from cart where product_id = '${product_id}'`
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
  selectCarts,
  selectItem,
  insterItem,
  updateItem,
  removeItem
}