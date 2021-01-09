var express = require('express');
var router = express.Router();
const foroController = require('../controllers/foro.controller.js');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarForo', function(req, res, next) {
    //foroController.createForo(req.body);
    res.send('respond with a resource');
});

router.get('/leerForos', foroController.showForo);

module.exports = router;