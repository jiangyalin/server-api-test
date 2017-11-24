const express = require('express');
const router = express.Router();
const pageList = require('./../../models/pageList');
const Picture = new require('./../../models/Picture');

router.get('/',function (req, res) {
    res.render('picture/picture-list');
});

// 插画数据(分页)
router.get('/findPictureList', function (req, res) {
    // 查询数据
    const page = Number(req.query.pageIndex)+1; // 当前页码
    const pageSize = Number(req.query.pageSize); // 每页条数
    const qs = new RegExp(req.query.title); // 标题正则参数
    const Model = Picture; // 模板
    const populate = '';
    const criteria = {is_deleted: 1, $or: [{title: qs},{description: qs}]}; // 查询条件
    let fields = {title : 2, description : -1, img: 1, date: 1, user_id: 1}; // 待返回的字段
    const options = {sort:[{ date: -1 }]}; // 排序
    pageList.pageQuery(page, pageSize, Model, populate, criteria, fields, options, function (err, $page) {
        if (err){
            next(err);
        } else{
            var data = {
                "total": $page.count,
                "rows": $page.results
            };
            res.jsonp(data);
        }
    });
});

module.exports = router;