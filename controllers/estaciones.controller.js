const prisma = require("../app.js").prisma;

async function createEstacion(nomb) {
    await prisma.estacion.create({
        data: {
            nombre: nomb
        }
    })
}

async function showEstaciones(req,res) {
    //const allEstaciones = await prisma.estacion.findMany()
        prisma.estacion.findMany().then(data =>{
            res.send(data)
        })
    //console.dir(allEstaciones, { depth: null });
}

async function findEstacion(idEst) {
    //const allEstaciones = await prisma.estacion.findMany()
        prisma.estacion.findMany({
            where: { idEstacion: idEst }
        }).then(data =>{
            return data
        })
    //console.dir(allEstaciones, { depth: null });
}

async function updateEstacion(idEst, nom) {
    const estacion = await prisma.estacion.update({
      where: { idEstacion: idEst },
      data: { nombre: nom },
    })
    console.log(estacion);
  }

async function deleteEstacion(idEst) {
    await prisma.estacion.delete({
        where: { idEstacion: idEst }
    })
}

module.exports.createEstacion = createEstacion;
module.exports.showEstaciones = showEstaciones;
module.exports.updateEstacion = updateEstacion;
module.exports.deleteEstacion = deleteEstacion;
module.exports.findEstacion = findEstacion;