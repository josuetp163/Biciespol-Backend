const prisma = require("../app.js").prisma;

async function createInformacion(titulo, contenido, foro) {
    await prisma.informacion.create({
        data: {
            titulo: titulo,
            contenido: contenido,
            foro: foro   
        }
    }) 
}

async function showInfos() {
    prisma.informacion.findMany().then(data =>{
        res.send(data)
    })
}

async function updateInfo(id, titulo, contenido) {
    const informacion = await prisma.informacion.update({
      where: { idInformacion: id },
      data: { 
          titulo: titulo,
          contenido: contenido  
        },
    })
    console.log(informacion);
  }

async function deleteInfo(id) {
    await prisma.informacion.delete({
        where: { idInformacion: id }
    })
}

module.exports.createInformacion = createInformacion;
module.exports.showInfos = showInfos;
module.exports.updateInfo = updateInfo;
module.exports.deleteInfo = deleteInfo;