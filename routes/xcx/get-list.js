const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const data = {
    code: 200,
    data: [{
      disabled: "false",
      disp_style: "",
      id: 162,
      is_default: 0,
      is_system: "true",
      language: "zh-cn",
      module: "index:index",
      name: "index",
      pid: 0,
      theme_id: 4,
      theme_type: "xcx",
      title: "首页",
      updatetime: 0
    }, {
      disabled: "false",
      disp_style: "",
      id: 163,
      is_default: 0,
      is_system: "true",
      language: "zh-cn",
      module: "product:index",
      name: "product_index",
      pid: 0,
      theme_id: 4,
      theme_type: "xcx",
      title: "产品中心",
      updatetime: 0
    }],
    message: 'ok'
  };
  res.jsonp(data);
});

module.exports = router;
