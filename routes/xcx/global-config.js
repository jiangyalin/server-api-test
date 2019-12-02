const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const data = {
    code: 200,
    data: '',
    message: 'ok'
  };
  res.jsonp(data);
});

module.exports = router;
