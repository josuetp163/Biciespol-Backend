const reporte = require('../collections/reporte.model');

exports.findAllReportes = (req, res) => {
    reporte.find({}, (err, docs) => {
        res.send(docs)
        res.semd("dow");
    })
};

exports.createReporte = (req, res) => {
    let body = req.body;
    reporte.create({id: body.id, codigoBici: parseInt(body.codigoBici,10), usuario: body.usuario, fecha: body.fecha});
}