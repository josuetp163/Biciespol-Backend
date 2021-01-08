var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarBicicleta', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/leerBicicleta', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;