const prisma = require("../app.js").prisma;

async function createPublicacion(contenido, foro, usuario) {
    await prisma.publicacion.create({
        data: {
            contenido: contenido,
            foro: foro,
            usuario: usuario   
        }
    }) 
}

async function showPublicaciones() {
    const allPublicaciones = await prisma.publicacion.findMany();
    console.dir(allPublicaciones, { depth: null });
}

async function updatePublicacion(id, contenido) {
    const publicacion = await prisma.publicacion.update({
      where: { idPublicacion: id },
      data: { 
          contenido: contenido  
        },
    })
    console.log(publicacion);
  }

async function deletePublicacion(id) {
    await prisma.publicacion.delete({
        where: { idPublicacion: id }
    })
}

module.exports.createPublicacion = createPublicacion;
module.exports.showPublicaciones = showPublicaciones;
module.exports.updatePublicacion = updatePublicacion;
module.exports.deletePublicacion = deletePublicacion;