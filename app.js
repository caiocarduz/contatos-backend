var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
var AuthRouter = require('./routes/AuthRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', AuthRouter);

module.exports = app;
