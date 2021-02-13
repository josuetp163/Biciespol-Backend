const prisma = require("../app.js").prisma;

async function createPublicacion(publicacion) {
    await prisma.publicacion.create({
        data: {
            contenido: publicacion.contenido,
            foro: parseInt(publicacion.foro,10),
            usuario: parseInt(publicacion.usuario,10)   
        }
    }) 
}

async function showPublicaciones() {
    prisma.publicacion.findMany().then(data =>{
        res.send(data)
    })
}

async function updatePublicacion(publicacion) {
    const publi = await prisma.publicacion.update({
      where: { idPublicacion: parseInt(publicacion.id,10) },
      data: { 
          contenido: publicacion.contenido  
        },
    })
    console.log(publi);
  }

async function deletePublicacion(publicacion) {
    await prisma.publicacion.delete({
        where: { idPublicacion: parseInt(publicacion.id,10) }
    })
}

module.exports.createPublicacion = createPublicacion;
module.exports.showPublicaciones = showPublicaciones;
module.exports.updatePublicacion = updatePublicacion;
module.exports.deletePublicacion = deletePublicacion;