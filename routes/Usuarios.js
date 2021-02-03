var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuarios.controller.js');

router.get('/leerUsuario', usuariosController.showUsuarios);

module.exports = router;