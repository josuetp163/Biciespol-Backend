var express = require('express');
var router = express.Router();
const publicacionController = require('../controllers/publicaciones.controller.js');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarPublicacion', function(req, res, next) {
    //publicacionController.createPublicacion(req.body);
    res.send('respond with a resource');
});

router.get('/leerPublicaciones', function(req, res, next) {
    publicacionController.showPublicaciones();
    res.send('respond with a resource');
});

module.exports = router;