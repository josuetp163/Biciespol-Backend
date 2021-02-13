var express = require('express');
var router = express.Router();
const publicacionesController = require('../controllers/publicaciones.controller.js'); 

router.post('/ingresarPublicacion', function(req, res, next) {
    publicacionesController.createPublicacion(req.body);
    res.send({"data":"enviado con exito"});
});

router.get('/leerPublicacion', publicacionesController.showPublicaciones);

router.post('/actualizarPublicacion', function(req, res, next) {
    publicacionesController.updatePublicacion(req.body);
    res.send({"data":"enviado con exito"});
});

router.post('/eliminarPublicacion', function(req, res, next) {
    publicacionesController.deletePublicacion(req.body);
    res.send({"data":"enviado con exito"});
});

module.exports = router;