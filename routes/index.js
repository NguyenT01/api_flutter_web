var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({code:1, message: 'Fetch API thanh cong :>'})
});

module.exports = router;
