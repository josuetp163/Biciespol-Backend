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

async function updateEstacion() {
    const estacion = await prisma.estacion.update({
      where: { idEstacion: 1 },
      data: { nombre: 'algo' },
    })
    console.log(estacion);
  }

async function deleteEstacion() {
    const estacion = await prisma.estacion.delete({
        where: { idEstacion: 1 }
    })
}

module.exports.createEstacion = createEstacion;
module.exports.showEstaciones = showEstaciones;
module.exports.updateEstacion = updateEstacion;
module.exports.deleteEstacion = deleteEstacion;