const prisma = require("../app.js").prisma;

async function createForo(foro) {
    await prisma.foro.create({
        data: {
            descripcion: foro.desc
        }
    }) 
}

async function showForos() {
    prisma.foro.findMany().then(data =>{
        res.send(data)
    })
}

async function updateForo(foro) {
    const fo = await prisma.foro.update({
      where: { idForo: parseInt(foro.id,10) },
      data: { 
          descripcion: foro.desc  
        },
    })
    console.log(fo);
  }

async function deleteForo(foro) {
    await prisma.foro.delete({
        where: { idForo: parseInt(foro.id,10) }
    })
}

module.exports.createForo = createForo;
module.exports.showForo = showForos;
module.exports.updateForo = updateForo;
module.exports.deleteForo = deleteForo;