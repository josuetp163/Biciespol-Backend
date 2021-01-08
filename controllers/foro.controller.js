const prisma = require("../app.js").prisma;

async function createForo(desc) {
    await prisma.foro.create({
        data: {
            descripcion: desc
        }
    }) 
}

async function showForos() {
    const allForos = await prisma.foro.findMany();
    console.dir(allForos, { depth: null });
}

async function updateForo(id, desc) {
    const foro = await prisma.foro.update({
      where: { idForo: id },
      data: { 
          descripcion: desc  
        },
    })
    console.log(foro);
  }

async function deleteForo(id) {
    await prisma.foro.delete({
        where: { idForo: id }
    })
}

module.exports.createForo = createForo;
module.exports.showForo = showForos;
module.exports.updateForo = updateForo;
module.exports.deleteForo = deleteForo;