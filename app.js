var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var Sequelize = require('sequelize');

var auth = 
{
    logged: false,
    email: '',
    id: -1
};

// connection
var sequelize = new Sequelize('db_4021','k4_s4021','45410f5dfbbf',
    {
        dialect: 'mysql',
        host: 'i5.liveserver.pl', // nazwa hosta
        port: 3306 // numer portu
    });

var user = sequelize.define('user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: Sequelize.TEXT,
        password: Sequelize.TEXT,
        type: Sequelize.INTEGER,   // 1. admin, 2. bibliotekarz, 3. user
        active: Sequelize.INTEGER,   // 1 - aktywny, 0 - nieaktywny
        session_token: Sequelize.STRING,
        session_expire_timestemp: Sequelize.INTEGER
    });

var book = sequelize.define('book',
    {
        idBook: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: Sequelize.TEXT,
        author: Sequelize.TEXT,
        description: Sequelize.TEXT,
        active: Sequelize.INTEGER   // 1 - aktywny, 0 - nieaktywny
    });

var lend = sequelize.define('lend',
    {
        idLend: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            type: Sequelize.INTEGER
        },
        idBook: {
            type: Sequelize.INTEGER
        },
        // do kiedy książka ma zostać zwrócona
        returnDate: {
            type: Sequelize.DATE
        },
        // kiedy książka została faktycznie zwrócona, jeśli nie została jeszcze zwrócona to 0000-00-00 00:00:00
        returned: {
            type: Sequelize.DATE
        }
    });

// klucze obce w lend (id książki i usera)
lend.belongsTo(user, {foreignKey: 'idUser', targetKey: 'id'});
lend.belongsTo(book, {foreignKey: 'idBook', targetKey: 'idBook'});

sequelize.sync();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next)
{
    console.log(req.cookies.loSessionToken);
    if(req.cookies.loSessionToken === undefined)
    {
        auth.logged = false;
        auth.email = '';
        auth.id = -1;
        app.set("auth", auth);
    }
    else
    {
        user.findAll(
        {
            where:
            {
                session_token: req.cookies.loSessionToken
            }
        }).then(function(_user)
        {
            auth.email = _user[0].dataValues.email;
            auth.id = _user[0].dataValues.id;
            auth.logged = true;
            app.set("auth", auth);
        });
    }

    next();
})

var index = require('./routes/client/index');
var apiUsers = require('./routes/server/user')(user);

app.use('/', index);
app.use('/api/user/', apiUsers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
