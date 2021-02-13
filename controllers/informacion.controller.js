const prisma = require("../app.js").prisma;

async function createInfo(informacion) {
    await prisma.informacion.create({
        data: {
            titulo: informacion.titulo,
            contenido: informacion.contenido,
            foro: parseInt(informacion.foro,10)   
        }
    }) 
}

async function showInfos() {
    prisma.informacion.findMany().then(data =>{
        res.send(data)
    })
}

async function updateInfo(informacion) {
    const info = await prisma.informacion.update({
      where: { idInformacion: parseInt(informacion.id,10) },
      data: { 
          titulo: informacion.titulo,
          contenido: informacion.contenido  
        },
    })
    console.log(info);
  }

async function deleteInfo(informacion) {
    await prisma.informacion.delete({
        where: { idInformacion: parseInt(informacion.id,10) }
    })
}

module.exports.createInfo = createInfo;
module.exports.showInfos = showInfos;
module.exports.updateInfo = updateInfo;
module.exports.deleteInfo = deleteInfo;