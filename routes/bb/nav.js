const express = require('express')
const router = express.Router()
const multiparty = require('multiparty')
const fs = require('fs')
const tool = require('./../../tool')
const Busboy = require('busboy')

router.get('/get', function (req, res) {
  console.log('get.params', req.params)
  const data = {
    code: 200,
    data: {
      total: 'd',
      rows: 'p',
      test: 'http://180.169.20.145:8099/test/2020/20200710113211281.jpg',
      fl: 33,
      fr: 73
    },
    msg: ''
  }
  res.jsonp(data)
})


router.get('/chart', function (req, res) {
  const data = {
    code: 200,
    data: [{
      aa: '标题1',
      bb: 23
    }, {
      aa: '标题2',
      bb: 44
    }, {
      aa: '标题3',
      bb: 76
    }, {
      aa: '标题4',
      bb: 12
    }, {
      aa: '标题5',
      bb: 87
    }, {
      aa: '标题6',
      bb: 12
    }, {
      aa: '标题7',
      bb: 33
    }],
    msg: ''
  }
  res.jsonp(data)
})

router.post('/save', function (req, res) {
  tool.writeData('test', {
    query: req.query,
    body: req.body,
    headers: req.headers
  })
  const data = {
    code: 200,
    data: {},
    msg: ''
  }
  res.jsonp(data)
})

router.post('/test', function (req, res) {
  console.log('get.query', req.query)
  console.log('get.params', req.params)
  const data = {
    code: 200,
    data: [{
      name: '设备',
      value: 14
    }, {
      name: '建材',
      value: 12
    }, {
      name: '食品',
      value: 12
    }],
    msg: ''
  }
  res.jsonp(data)
})

router.post('/post', function (req, res) {
  console.log('post.body', req.body)
  console.log('post.req.files', req.files)
  const data = {
    code: 200,
    data: {
      total: 'd',
      rows: 'p'
    },
    msg: ''
  }
  res.jsonp(data)
})

router.delete('/delete', function (req, res) {
  console.log('get.query', req.query)
  const data = {
    code: 200,
    data: {
      total: 'd',
      rows: 'p'
    },
    msg: ''
  }
  res.jsonp(data)
})

router.patch('/patch', function (req, res) {
  console.log('post.body', req.body)
  const data = {
    code: 200,
    data: {
      total: 'd',
      rows: 'p'
    },
    msg: ''
  }
  res.jsonp(data)
})

router.post('/upload', function (req, res) {
  let busboy = new Busboy({ headers: req.headers })
  req.pipe(busboy)

  // 监听file事件获取文件(字段名，文件，文件名，传输编码，mime类型)
  busboy.on('file', function (filedname, file, filename, encoding, mimetype) {
    // 创建一个可写流
    let writeStream = fs.createWriteStream('./static/public/img/' + filename)

    // 监听data事件，接收传过来的文件，如果文件过大，此事件将会执行多次，此方法必须写在file方法里
    file.on('data', function (data) {
      writeStream.write(data)
    })

    // 监听end事件，文件数据接收完毕，关闭这个可写流
    file.on('end', function (data) {
      const _data = {
        code: 200,
        urls: [filename],
        msg: ''
      }
      res.jsonp(_data)
      writeStream.end()
    })
  })

  // 监听finish完成事件,完成后重定向到百度首页
  // busboy.on('finish', function () {
  //   res.writeHead(303, {Connection: 'close', Location: 'http://www.baidu.com/'})
  //   res.end()
  // })

  // console.log('post.body', req.body)
  // console.log('get.query', req.query)
  // //生成multiparty对象，并配置上传目标路径
  // const form = new multiparty.Form({
  //   maxFieldsSize: 1000,
  //   uploadDir: './static/public/img/',
  //   autoFiles: true,
  //   maxFilesSize: 10000000,
  //   maxFields: 10000000
  // })
  // // console.log('form', form.parse)
  // //上传完成后处理
  // form.parse(req, function (err, fields, files) {
  //   console.log('ppp')
  //   if (err) {
  //     console.log('parse error: ' + err)
  //   } else {
  //     console.log('files: ', files.file)
  //     const inputFile = files.file[0]
  //     const uploadedPath = inputFile.path
  //     const dstPath = './static/public/img/' + inputFile.originalFilename
  //     //重命名为真实文件名
  //     fs.rename(uploadedPath, dstPath, function (err) {
  //       if (err) {
  //         console.log('rename error: ' + err)
  //       } else {
  //         console.log('rename ok')
  //       }
  //     })
  //   }
  // })
  // const data = {
  //   code: 200,
  //   urls: [''],
  //   msg: ''
  // }
  // res.jsonp(data)
})

module.exports = router
