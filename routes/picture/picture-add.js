const express = require('express');
const router = express.Router();
const multiparty = require('multiparty'); // 用内容类型解析http请求multipart/form-data，也称为文件上传。
const fs = require('fs');
const Picture = new require('./../../models/Picture');
const moment = require('moment');

// 插画添加页面
router.get('/',function (req, res) {
    let id = req.query.id;
    id = id || '';
    let data = {};
    data.id = id;
    res.render('picture/picture-add',{data: data});
});

// 添加插画
router.post('/addPicture', function (req, res) {
    console.log('a1', req.body)
    console.log('a1', req.files)
    //生成multiparty对象，并配置上传目标路径
    const form = new multiparty.Form({
        maxFieldsSize: 100,
        uploadDir: './public/files/k/'
    });
    //上传完成后处理
    form.parse(req, function(err, fields, files) {
        if (err) {
            console.log('parse error: ' + err);
        } else {
            console.log('files: ', files);
            const inputFile = files.img[0];
            const uploadedPath = inputFile.path;
            const dstPath = './public/files/k/' + inputFile.originalFilename;
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
    // 插入数据
    // const tmp_path = req.files.thumbnail.path;
    // console.log('tmp_path',tmp_path)
    // console.log(req.body)
    // console.log(req.body.img)
    // console.log(req.files)
    // console.log(req.files.img.path.split(path.sep).pop())
    // let information = JSON.stringify({"success":true});
    // res.jsonp(information);
    // let picture = {
    //     title: req.body.title,
    //     description: req.body.text,
    //     img: req.body.img,
    //     user_id: req.body.user
    // };
    // Picture.create(picture, function (err, result) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         let information = JSON.stringify('success');
    //         res.jsonp(information);
    //     }
    // });
});

module.exports = router;