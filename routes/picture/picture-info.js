const express = require('express');
const router = express.Router();
const User = new require('./../../models/User');
const moment = require('moment');

// 用户信息查看页面
router.get('/',function (req, res) {
    // 查询数据
    let id = req.query.id;
    let data = {
        id : id
    };
    res.render('picture/picture-info',{data: data});
});

// 查询用户信息
router.get('/findPictureInfo',function (req, res) {
    // 查询数据
    let id = req.query.id;
    let criteria = { _id: id, is_deleted: 1 }; // 查询条件
    let fields = { name: 1, pwd: 1, date: 1, phone: 1, photo: 1 }; // 待返回的字段
    let options = {}; // 排序方式
    User.findOne(criteria, fields, options, function(error, result){
        if(error) {
            console.log(error);
        } else {
            let data = {
                id : result._id,
                name : result.name,
                pwd: result.pwd,
                phone: result.phone,
                photo: result.photo,
                date : moment(result.date).format('YYYY-MM-DD HH:mm:ss')
            };
            res.jsonp(data);
        }
    });
});

module.exports = router;