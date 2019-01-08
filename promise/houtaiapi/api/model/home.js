const db = require('../../db')

/**
 * 增删改查
 */

const selectBanner = (dataType) => {
  return new Promise((resolve) => {
    const sql = `select * from banner where dataType=${dataType}`
    console.log(sql)
    db.query(sql, [], (error, data) => {
      if (data) {
        resolve( Array.from(data) )
      } else {
        resolve([])
      }
    })
  })
}

const selectQuickmenu = (dataType) => {
  return new Promise((resolve) => {
    const sql = `select * from quick_menu where dataType=${dataType}`
    console.log(sql)
    db.query(sql, [], (error, data) => {
      if (data) {
        resolve( Array.from(data) )
      } else {
        resolve([])
      }
    })
  })
}

module.exports = {
  selectBanner,
  selectQuickmenu
}