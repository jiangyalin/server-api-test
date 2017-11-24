const express = require('express');
const router = express.Router();

// 插画列表
router.use('/',require('./picture-list'));

// 插画添加
router.use('/picture-add',require('./picture-add'));

// 插画查看
router.use('/picture-info',require('./picture-info'));

module.exports = router;
