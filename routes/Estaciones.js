var express = require('express');
var router = express.Router();
const estacionesController = require("../controllers/estaciones.controller.js");

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarEstacion', function(req, res, next) {
    estacionesController.createEstacion();
    res.send('Añadida nueva estacion');
});

router.get('/leerEstaciones', function(req, res, next) {
    estacionesController.showEstaciones();
    res.send('Lectura de estaciones');
});

router.get('/actualizarEstaciones', function(req, res, next) {
    estacionesController.updateEstacion();
    res.send('Actualizacion de estaciones');
});

router.get('/eliminarEstacion', function(req, res, next) {
    estacionesController.deleteEstacion();
    res.send('Eliminada estacion');
});

module.exports = router;