const reporte = require('../collections/reporte.model');

exports.findAllReportes = (req, res) => {
    reporte.find({}, (err, docs) => {
        res.send(docs);
    })
};

exports.createReporte = (req, res) => {
    let body = req.body;
    reporte.create({id: body.id, codigoBici: parseInt(body.codigoBici,10), usuario: body.usuario, fecha: body.fecha});
}

exports.findAllReporteBici = (req, res) => {
    reporte.find({codigoBici: parseInt(req.nody.codigoBici,10)}, (err, docs) => {
        res.send(docs);
    })
};