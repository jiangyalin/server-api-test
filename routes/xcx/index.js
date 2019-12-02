const express = require('express');
const router = express.Router();

router.use('/widget/globalConfig', require('./global-config'));

router.use('/home/getWebTemplate', require('./global-config'));

router.use('/page/getlist', require('./get-list'));

router.use('/home', require('./home'));

router.use('/widget/getWidgets', require('./get-widgets'));

router.use('/login', require('./login'));

module.exports = router;
