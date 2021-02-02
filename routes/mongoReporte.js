var express = require('express');
var router = express.Router();
const mongoController = require('../controllers/mongo.controller.js');

router.get('/showReportes', mongoController.findAllReportes);

router.get('/showReportesBici', mongoController.findAllReporteBici);

router.post('/newReporte', mongoController.createReporte);

module.exports = router;