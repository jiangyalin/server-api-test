const bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());//解析参数

    // 民宿
    app.use('/bb', require('./bb'));

};