var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'qdm19023448.my3w.com',//主机名
  user     : 'qdm19023448',//用户名
  password : 'zeiyeaiq',//密码
  database : 'qdm19023448_db',
  insecureAuth:true
});

 // 连接mysql数据库
connection.connect();
console.log('数据库连接成功');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('shop');
});

router.post('/', function(req, res, next) {
	//将获取到的信息添加到数据库
	var  Sql = 'SELECT * FROM go_shop';
	console.log(Sql);

	// 执行添加语句   connection(sql,data,callback)
	connection.query(Sql,function (err, result) {
	        if(err){
	         console.log('[SELECT ERROR] - ',err.message);
	         return;
	        }
	        res.send(result);
	});
});

module.exports = router;
