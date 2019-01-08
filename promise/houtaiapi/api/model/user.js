const db = require('../../db')

/**
 * 增删改查
 */

const selectUser = (phone) => {
  return new Promise((resolve) => {
    const sql = `select * from user where phone=${phone}`
    db.query(sql, [], (error, data) => {
      if (data) {
        resolve(Array.from(data)[0])
      } else {
        resolve([])
      }
    })
  })
}

const addUser = (phone) => {
  return new Promise((resolve) => {

  })
}

const selectAddress = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `select * from address where user_id=${id}`
    db.query(sql, [], (error, data) => {
      if (error) {
        reject()
      } else {
        const addressData = Array.from(data).map((item) => {
          return {
            ...item,
            location: JSON.parse(item.location)
          }
        })
        resolve(addressData)
      }
    })
  })
}

const addressInfo = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `select * from address where id=${id}`
    db.query(sql, [], (error, data) => {
      if (error) {
        reject()
      } else {
        resolve({
          ...data[0],
          location: JSON.parse(data[0].location)
        })
      }
    })
  })
}


const addAddress = (address, info) => {
  return new Promise((resolve, reject) => {
    const id = info.id;
    console.log(id, address)
    const sql = `insert into address (name, phone, location, address, user_id) values (?,?,?,?,?)`
    db.query(sql, [
      address.name,
      address.phone,
      JSON.stringify(address.location),
      address.address,
      id
    ], (error, data) => {
      if (error) {
        reject()
      } else {
        resolve(data)
      }
    })
  })
}
const removeAddress = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `delete from address where id=${id}`
    db.query(sql, [], (error, data) => {
      if (error) {
        reject()
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = {
  selectUser,
  addAddress,
  selectAddress,
  addressInfo,
  removeAddress
}