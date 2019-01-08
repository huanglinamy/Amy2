const db = require('../../db')

/**
 * 增删改查
 */

const selectCategory = () => {
  return new Promise((resolve) => {
    const sql = `select * from category`
    db.query(sql, [], (error, data) => {
      if (data) {
        resolve( Array.from(data) )
      } else {
        resolve([])
      }
    })
  })
}



const getCild = (parentId) => {
  return new Promise((resolve) => {
    const sql = `select * from category where parentId=${parentId}`
    db.query(sql, [], (error, data) => {
      resolve(data)
    })
  })
}

const dataToTree = (data) => {
  const dataJson = {}
  const tree = []
  data.forEach((item, index) => {
    dataJson[item.categoryId] = Object.assign({}, item, {
      children: []
    })
  });
  
  for (let key in dataJson) {
    
    if (dataJson[key]. categoryType != 0) {
      
      dataJson[dataJson[key].categoryType].children.push(dataJson[key])
    } else {
      tree.push(dataJson[key])
    }
  }
  return tree;
} 


const childrenId = (treeData, parentId) => {
  let data = {}
  for (var i=0; i<treeData.length; i++) {
    const item = treeData[i];
    if (item.categoryId == parentId) {
      data = item;
      break;
    }
  }
  if (Object.keys(data).length <= 0) {
    for (var i=0; i<treeData.length; i++) {
      const item = treeData[i];
      if (item.children.length >= 1) {
        data = childrenId(item.children, parentId)
        if (Object.keys(data).length >= 1) {
          break;
        }
      }
    }
  }
  return data;
}




const getChildIds = (() => {
  let childrenids = [];

  return childIds = (child, d) => {
    if (!d) {
      childrenids = []
    }
    if (child.children && child.children.length >= 1) {
      child.children.forEach((item) => {
        childIds(item, 'aaaa')
      })
    } else {
      childrenids.push(child.categoryId)
    }
    return childrenids
  }
})()

const getCildId = (parentId) => {
  return new Promise((resolve) => {
    const sql = `select * from category`
    db.query(sql, [], (error, data) => {
      const treeData = dataToTree(data);
      const child = childrenId(treeData, parentId);
      const ids = getChildIds(child)
      resolve(ids)
    })
  })
}





module.exports = {
  selectCategory,
  getCildId
}