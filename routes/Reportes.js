var express = require('express');
var router = express.Router();
const reporteController = require('../controllers/reportes.controller.js');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarReporte', function(req, res, next) {
    //reporteController.createReporte(req.body)
    res.send('respond with a resource');
});

router.get('/leerReportes', reporteController.showReportes);

module.exports = router;