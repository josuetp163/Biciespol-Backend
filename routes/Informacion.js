var express = require('express');
var router = express.Router();
const informacionController = require('../controllers/informacion.controller.js'); 

router.post('/ingresarInfo', function(req, res, next) {
    informacionController.createInfo(req.body);
    res.send({"data":"enviado con exito"});
});

router.get('/leerInfo', informacionController.showInfos);

router.post('/actualizarInfo', function(req, res, next) {
    informacionController.updateInfo(req.body);
    res.send({"data":"enviado con exito"});
});

router.post('/eliminarInfo', function(req, res, next) {
    informacionController.deleteInfo(req.body);
    res.send({"data":"enviado con exito"});
});

module.exports = router;