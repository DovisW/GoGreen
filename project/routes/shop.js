var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',//主机名
  user     : 'root',//用户名
  password : '123456',//密码
  database : 'test'
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
	var  Sql = 'SELECT * FROM t1';
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
