const prisma = require("../app.js").prisma;

async function createAlquiler(usuario, bici) {
    await prisma.alquiler.create({
        data: {
            usuario: usuario,
            bicicleta: bici,
        }
    }) 
}

async function showAlquileres(req,res) {
    prisma.alquiler.findMany().then(data =>{
        res.send(data)
    })
}

async function updateAlquiler(id) {
    const alquiler = await prisma.alquilar.update({
      where: { idAlquilar: id },
      data: { estado: true },
    })
    console.log(alquiler);
  }

async function deleteAlquiler(id) {
    await prisma.alquilar.delete({
        where: { idAlquilar: id }
    })
}

module.exports.createAlquiler = createAlquiler;
module.exports.showAlquileres = showAlquileres;
module.exports.updateAlquiler = updateAlquiler;
module.exports.deleteAlquiler = deleteAlquiler;