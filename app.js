var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var apiRouterAdmin = require('./api/routers/admin');
var apiRouterShop = require('./api/routers/shop')
var database = require('./config/database')

var app = express();

//connect database
database()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/api/admin', apiRouterAdmin);
app.use('/api/shop', apiRouterShop);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    const error = req.app.get('env') === 'development' ? err : {};
    const status = err.status || 500

    // render the error page
    return res.status(status).json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
