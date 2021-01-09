var express = require('express');
var router = express.Router();
const estacionesController = require("../controllers/estaciones.controller.js");

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarEstacion', function(req, res, next) {
    estacionesController.createEstacion(req.body);
    res.send('Añadida nueva estacion');
});

router.get('/leerEstaciones', estacionesController.showEstaciones);

router.get('/actualizarEstaciones', function(req, res, next) {
    estacionesController.updateEstacion();
    res.send('Actualizacion de estaciones');
});

router.get('/eliminarEstacion', function(req, res, next) {
    estacionesController.deleteEstacion();
    res.send('Eliminada estacion');
});

module.exports = router;