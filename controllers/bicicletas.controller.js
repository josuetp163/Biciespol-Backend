const prisma = require("../app.js").prisma;

async function createBicicleta(estado, idEst) {
    await prisma.bicicleta.create({
        data: {
            estado: estado,
            estacion: idEst
        }
    }) 
}

async function showBicicleta() {
    const allBicicletas = await prisma.bicicleta.findMany();
    console.dir(allBicicletas, { depth: null });
}

async function updateBicicleta(id, estado, estacion) {
    const bicicleta = await prisma.bicicleta.update({
      where: { idBicicleta: id },
      data: { 
          estado:  estado,
          estacion: estacion  
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