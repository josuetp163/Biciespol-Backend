var express = require('express');
var router = express.Router();
const bicicletasController = require('../controllers/bicicletas.controller.js'); 

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/ingresarBicicleta', function(req, res, next) {
    bicicletasController.createBicicleta(req.body);
    res.send('respond with a resource');
});

router.get('/leerBicicleta', bicicletasController.showBicicleta);

router.post('/actualizarBicicleta', function(req, res, next) {
    bicicletasController.deleteBicicleta(req.body);
    res.send('respond with a resource');
});

router.post('/eliminarBicicleta', function(req, res, next) {
    bicicletasController.updateBicicleta(req.body);
    res.send('respond with a resource');
});

module.exports = router;