const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const data = {
    code: 200,
    data: "xcx_token_1bacb15c325b4391c41c172504b460c5",
    message: 'ok'
  };
  res.jsonp(data);
});

module.exports = router;
