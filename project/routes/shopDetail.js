var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var url=require('url');
var connection = mysql.createConnection({
  host     : 'qdm19023448.my3w.com',
  user     : 'qdm19023448',
  password : 'zeiyeaiq',
  database : 'qdm19023448_db',
  insecureAuth:true
});
connection.connect();
router.get('/', function(req, res, next) {
  var num=req.query.num
  var Sql='SELECT * FROM go_shop where id='+num;
  connection.query(Sql,function(err, result){
  	var url=result[0].img;
  	var text=result[0].price;
    var miaoshu=result[0].miaoshu;
  	res.render('shopDetail',{url:url,text:text,miaoshu:miaoshu,id:num});
  })
});
module.exports = router;

