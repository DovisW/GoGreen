var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var url=require('url');
var ejs = require('ejs')
var connection = mysql.createConnection({
  host     : 'qdm19023448.my3w.com',
  user     : 'qdm19023448',
  password : 'zeiyeaiq',
  database : 'qdm19023448_db',
  insecureAuth:true
});
connection.connect();
router.get('/', function(req, res, next) {
var urldata=url.parse(req.url,true).query;
  var inp = urldata.inp;
  var inpu = urldata.inpu;
  var text = urldata.text;
  var xing = urldata.xing;
  var  Sql = 'INSERT INTO go_sb(name,em,text,xing) value("'+inp+'","'+inpu+'","'+text+'","'+xing+'")';
  // console.log(Sql)
  connection.query(Sql,function (err, result) {
          if(err){
           return;
          }   
  });
  var  datacha = 'SELECT * FROM go_sb  order by id desc limit 1';
  connection.query(datacha,function (err, result) {
          if(err){
           return;
          }  
          // console.log(result);
          // var name_c=result[0].name;
          // // var em=result[0].em
          // var text=result[0].text;
          // console.log(name_c);
    // res.render('shopDetail',{name:name_c,text:text});
    res.send(result);
  });
});

module.exports = router;