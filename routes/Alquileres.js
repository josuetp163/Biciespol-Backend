var express = require('express');
var router = express.Router();
const alquileresController = require("../controllers/alquileres.controller.js");

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ingresarAlquiler', function(req, res, next) {
    //alquileresController.createAlquiler(req.body)
    res.send('respond with a resource');
});

router.get('/leerAlquileres', alquileresController.showAlquileres());

module.exports = router;