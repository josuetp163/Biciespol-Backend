var mongoose = require('mongoose');

const ReporteSchema = new mongoose.Schema({
    id: {
        type: String
    },
    codigoBici: {
        type: Number
    },
    usuario: {
        type: String
    },
    fecha: {
        type: String,
    },
    duracion: {
        type: String
    }
});

module.exports = mongoose.model('reporte', ReporteSchema, "reporte");