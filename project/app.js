var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

var shopRouter = require('./routes/shop');
// var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
var indexRouter=require('./routes/index');
var aboutRouter=require('./routes/about');
var shopDetailRouter=require('./routes/shopDetail');
var galleryRouter=require('./routes/gallery');
var shopCarRouter=require('./routes/shopCar');
var shop_tabRouter=require('./routes/shop_tab');
var sdtailRouter=require('./routes/sdtail');
var plRouter=require('./routes/pl');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/shop', shopRouter);
// app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/index',indexRouter);
app.use('/about', aboutRouter);
app.use('/shopDetail',shopDetailRouter);
app.use('/gallery',galleryRouter);
app.use('/shopCar',shopCarRouter);
app.use('/shop_tab',shop_tabRouter);
app.use('/sdtail', sdtailRouter);
app.use('/pl',plRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
