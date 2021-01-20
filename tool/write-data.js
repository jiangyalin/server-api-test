const fs = require('fs')
const createFolder = require('./create-folder')

// 写入数据
module.exports = (name, data) => {
  createFolder('./static')
  const path = './static/' + name + '.json'
  fs.writeFileSync(path, JSON.stringify(data))
}
