const prisma = require("../app.js").prisma;

async function createUsuario(nomUsuario, password, matricula) {
    await prisma.usuario.create({
        data: {
            usuario: nomUsuario,
            pass: password,
            matricula: matricula
        }
    }) 
}

async function showUsuarios() {
    prisma.usuario.findMany().then(data =>{
        res.send(data)
    })
}

async function updateUsuario(id, password) {
    const user = await prisma.usuario.update({
      where: { idUsuario: id },
      data: { pass: password },
    })
    console.log(user);
  }

async function deleteUsuario(id) {
    await prisma.usuario.delete({
        where: { idUsuario: id }
    })
}

module.exports.createUsuario = createUsuario;
module.exports.showUsuarios = showUsuarios;
module.exports.updateUsuario = updateUsuario;
module.exports.deleteUsuario = deleteUsuario;