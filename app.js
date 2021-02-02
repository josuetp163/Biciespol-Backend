const {PrismaClient } = require('@prisma/client')
exports.prisma = new PrismaClient()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var AlquileresRouter = require('./routes/Alquileres');
var BicicletaRouter = require('./routes/Bicicletas');
var EstacionesRouter = require('./routes/Estaciones');
var ForoRouter = require('./routes/Foros');
var PublicacionesRouter = require('./routes/Publicaciones');
var InformacionRouter = require('./routes/Informacion');
var ReportesRouter = require('./routes/Reportes');
var UsuariosRouter = require('./routes/Usuarios');
var MongoRouter = require('./routes/mongoReporte');

var app = express();

const nodb = require('./collections');
const bodyParser = require("body-parser");
const cors = require("cors");

var corsOptions = {origin: "http://localhost:4200"};
app.use(cors(corsOptions)); 

// parse requests of content-type - application/json
app.use(bodyParser.json()); 

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({​​​​​​​​extended: true}​​​​​​​​));
app.use(bodyParser.urlencoded({extended:true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/alquileres', AlquileresRouter);
app.use('/bicicletas', BicicletaRouter);
app.use('/estaciones', EstacionesRouter);
app.use('/foro', ForoRouter);
app.use('/publicaciones', PublicacionesRouter);
app.use('/informacion', InformacionRouter);
app.use('/reportes', ReportesRouter);
app.use('/usuarios', UsuariosRouter);
app.use('/mongo', MongoRouter);

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
