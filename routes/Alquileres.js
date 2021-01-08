var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarAlquiler', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/leerAlquileres', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;