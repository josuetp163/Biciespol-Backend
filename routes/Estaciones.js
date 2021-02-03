var express = require('express');
var router = express.Router();
const estacionesController = require("../controllers/estaciones.controller.js");

router.get('/ingresarEstacion', function(req, res, next) {
    estacionesController.createEstacion(req.body);
});

router.get('/leerEstaciones', estacionesController.showEstaciones);

router.get('/actualizarEstaciones', function(req, res, next) {
    estacionesController.updateEstacion();
});

router.get('/eliminarEstacion', function(req, res, next) {
    estacionesController.deleteEstacion();
});

module.exports = router;