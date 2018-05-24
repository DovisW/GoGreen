var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/shopDetail', function(req, res, next) {
  res.render('shopDetail');
});

module.exports = router;
