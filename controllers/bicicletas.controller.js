const prisma = require("../app.js").prisma;
const EstacionesController = require('../controllers/estaciones.controller.js');

async function createBicicleta(bici) {
    await prisma.bicicleta.create({
        data: {
            estado: bici.estado,
            Estacion: {
                connect: {idEstacion: parseInt(bici.estacion,10)}
            }
        }
    })

}

async function showBicicleta(req,res) {
    prisma.bicicleta.findMany().then(data => {
        res.send(data)
    })
}

async function updateBicicleta(bici) {
    const bicicleta = await prisma.bicicleta.update({
        where: { idBicicleta: parseInt(bici.idBicicleta,10) },
        data: {
            estado: bici.estado,
            Estacion: {
                connect: {idEstacion: parseInt(bici.estacion,10)}
            }
        },
    })
    console.log(bicicleta);
}

async function deleteBicicleta(bici) {
    await prisma.bicicleta.delete({
        where: { idBicicleta: parseInt(bici.idBicicleta,10)}
    })
}

module.exports.createBicicleta = createBicicleta;
module.exports.showBicicleta = showBicicleta;
module.exports.updateBicicleta = updateBicicleta;
module.exports.deleteBicicleta = deleteBicicleta;