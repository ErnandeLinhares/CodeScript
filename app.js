const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// CONEXAO COM BD
require('./configs/db');


const app = express();

// SETS
app.set('port', process.env.PORT || 3000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.disable('x-powered-by');
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cors = require('./middlewares/cors');
app.use(cors);

app.use('/', require('./routes/index'));


// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).json({ msg: ['Nada encontrado.'] });
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    const errors = [err.message];
    errors.push('stacktrace => ' + err);
    res.status(err.status || 500).json({ msg: errors });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500).json({ msg: [err.message] });
});

module.exports = app;
