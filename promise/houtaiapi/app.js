var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./api/index')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'wilson'}))
// cors 跨域资源共享
app.use('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");  // 允许的来源
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); // 允许的请求方法
  res.header("Content-Type", "application/json;charset=utf-8"); // 请求内容json格式，utf8类型
  res.header('Access-Control-Allow-Credentials', true); // 允许携带cookie
  next()
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

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
/**
 * cookie
 * session   
 * localStorage  
 * sessionStorage   
 */