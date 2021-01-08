var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarReporte', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/leerReportes', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;