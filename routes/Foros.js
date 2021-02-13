var express = require('express');
var router = express.Router();
const foroController = require('../controllers/foro.controller.js'); 

router.post('/ingresarForo', function(req, res, next) {
    foroController.createForo(req.body);
    res.send({"data":"enviado con exito"});
});

router.get('/leerForo', foroController.showForo);

router.post('/actualizarForo', function(req, res, next) {
    foroController.updateForo(req.body);
    res.send({"data":"enviado con exito"});
});

router.post('/eliminarForo', function(req, res, next) {
    foroController.deleteForo(req.body);
    res.send({"data":"enviado con exito"});
});

module.exports = router;