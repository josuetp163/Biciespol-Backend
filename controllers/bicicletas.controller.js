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

async function showBicicleta() {
    prisma.bicicleta.findMany().then(data => {
        res.send(data)
    })
}

async function updateBicicleta(id, estado, estacion) {
    const bicicleta = await prisma.bicicleta.update({
        where: { idBicicleta: id },
        data: {
            estado: estado,
            estacion: estacion,
        },
    })
    console.log(bicicleta);
}

async function deleteBicicleta(id) {
    await prisma.bicicleta.delete({
        where: { idBicicleta: id }
    })
}

module.exports.createBicicleta = createBicicleta;
module.exports.showBicicleta = showBicicleta;
module.exports.updateBicicleta = updateBicicleta;
module.exports.deleteBicicleta = deleteBicicleta;