const express = require('express');
const router = express.Router();
const multiparty = require('multiparty');
const fs = require('fs');

router.get('/get', function (req, res) {
  console.log('get.query', req.query)
  console.log('req.headers.languagecode', req.headers.languagecode)
  const data = {
    "total": 'd',
    "rows": 'p'
  };
  res.jsonp(data);
});

router.post('/post', function (req, res) {
  console.log('post.body', req.body)
  console.log('post.req.files', req.files)
  const data = {
    "total": 'd',
    "rows": 'p'
  };
  res.jsonp(data);
});

router.delete('/delete', function (req, res) {
  console.log('get.query', req.query)
  const data = {
    "total": 'd',
    "rows": 'p'
  };
  res.jsonp(data);
});

router.patch('/patch', function (req, res) {
  console.log('post.body', req.body)
  const data = {
    "total": 'd',
    "rows": 'p'
  };
  res.jsonp(data);
});

router.post('/upload', function (req, res) {
  console.log('post.body', req.body)
  console.log('get.query', req.query)
  //生成multiparty对象，并配置上传目标路径
  const form = new multiparty.Form({
    maxFieldsSize: 100,
    uploadDir: './static/public/img/'
  });
  //上传完成后处理
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.log('parse error: ' + err);
    } else {
      console.log('files: ', files.file);
      const inputFile = files.file[0];
      const uploadedPath = inputFile.path;
      const dstPath = './static/public/img/' + inputFile.originalFilename;
      //重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function(err) {
        if(err){
          console.log('rename error: ' + err);
        } else {
          console.log('rename ok');
        }
      });
    }
  });
  const data = {
    "total": 'd',
    "rows": 'p'
  };
  res.jsonp(data);
});

module.exports = router;