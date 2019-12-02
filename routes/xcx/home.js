const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const data = {
    code: 200,
    data: {
      firstUrl: "",
      role: "god",
      thirdUrl: "yfbcsy23-002.pre.nbseo.cn"
    },
    message: 'ok'
  };
  res.jsonp(data);
});

module.exports = router;
