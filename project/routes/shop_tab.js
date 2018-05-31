var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var ejs=require('ejs');
var connection = mysql.createConnection({
  host     : 'qdm19023448.my3w.com',//主机名
  user     : 'qdm19023448',//用户名
  password : 'zeiyeaiq',//密码
  database : 'qdm19023448_db',
  insecureAuth:true
});
connection.connect();
console.log('数据库连接成功');
// router.get('/', function(req, res, next) {
//   res.render('shop');
// });

router.get('/', function(req, res, next) {
	var  Sql = 'SELECT * FROM go_shop ';
	connection.query(Sql,function (err, result) {
	        if(err){
	         console.log('[SELECT ERROR] - ',err.message);
	         return;
	        }
	        res.send(result);
	});
});

module.exports = router;
