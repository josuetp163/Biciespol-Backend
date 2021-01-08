const prisma = require("../app.js").prisma;

async function createReporte(usuario, bici) {
    await prisma.reportar.create({
        data: {
            usuario: usuario,
            bicicleta: bici,
        }
    }) 
}

async function showReportes() {
    const allReportes = await prisma.reportar.findMany();
    console.dir(allReportes, { depth: null });
}

async function updateReporte(id) {
    const reporte = await prisma.reporter.update({
      where: { idReportar: id },
      data: { estado: true },
    })
    console.log(reporte);
  }

async function deleteReporte(id) {
    await prisma.reportar.delete({
        where: { idReportar: id }
    })
}

module.exports.createReporte = createReporte;
module.exports.showReportes = showReportes;
module.exports.updateReporte = updateReporte;
module.exports.deleteReporte = deleteReporte;