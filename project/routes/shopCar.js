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
	
	var dataUrl=url.parse(req.url,true).query;
	var id=dataUrl.id;
	numbers=dataUrl.numbers;
	var  Sql = 'INSERT INTO shopCar(data_id,much) value("'+id+'","'+numbers+'")';
	connection.query(Sql,function (err, result) {
	        if(err){
	         return;
	        }   
		// res.send(result);   
	});
	var  datacha = 'SELECT * FROM go_shop where id='+id;
	connection.query(datacha,function (err, result) {
	        if(err){
	         return;
	        }  
	        var datafor=Number(numbers);
	        // console.log(datafor);
	        // var pic1=result[0].img;
	        // var price=result[0].price;
	        // var des=result[0].miaoshu;
	        res.send(result)
		res.render('shopDetail');
	});
});

module.exports = router;

