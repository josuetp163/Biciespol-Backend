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
    const allUsuarios = await prisma.usuario.findMany();
    console.dir(allUsuarios, { depth: null });
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