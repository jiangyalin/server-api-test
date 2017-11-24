const express = require('express');
const router = express.Router();

router.get('/',function (req, res) {
  const data = {
    "total": 'd',
    "rows": 'p'
  };
  res.jsonp(data);
});

module.exports = router;