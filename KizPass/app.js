var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// Setup Mongoose DB
const mongoose = require("mongoose")
const dbConfig = require('./config/db.config')
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise
mongoose.connect(dbConfig.url, {
		useNewUrlParser: true,
		useFindAndModify: false
	})
	.then(() => {
		console.log("connnect DB success")
	})
	.catch(err => {
		console.log("could not connect to the database.  " + err)
  })

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var eventRouter = require('./routes/event');
var homeRouter = require('./routes/home');

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/event', eventRouter);
app.use('/home', homeRouter);

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
