var express = require('express');
var router = express.Router();
const informacionController = require('../controllers/informacion.controller.js');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarInformacionForo', function(req, res, next) {
    //informacionController.createInformacion(req.body);
    res.send('respond with a resource');
});

router.get('/leerInformacionForos', informacionController.showInfos());

module.exports = router;