var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarPublicacion', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/leerPublicaciones', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;