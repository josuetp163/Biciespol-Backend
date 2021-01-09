var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuarios.controller.js');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarUsuario', function(req, res, next) {
    //usuariosController.createUsuario(req.body);
    res.send('respond with a resource');
});

router.get('/leerUsuario', usuariosController.showUsuarios);

module.exports = router;