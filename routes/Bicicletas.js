var express = require('express');
var router = express.Router();
const bicicletasController = require('../controllers/bicicletas.controller.js'); 

router.post('/ingresarBicicleta', function(req, res, next) {
    bicicletasController.createBicicleta(req.body);
    res.send({"data":"enviado con exito"});
});

router.get('/leerBicicleta', bicicletasController.showBicicleta);

router.post('/actualizarBicicleta', function(req, res, next) {
    bicicletasController.updateBicicleta(req.body);
    res.send({"data":"enviado con exito"});
});

router.post('/eliminarBicicleta', function(req, res, next) {
    bicicletasController.deleteBicicleta(req.body);
    res.send({"data":"enviado con exito"});
});

module.exports = router;