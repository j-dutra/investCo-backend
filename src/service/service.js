const  Usuario  = require('../models/usuario')

exports.create = async (body) => {
    if(!body.nome) {
        throw new Error('Nao e possivel adicionar usuario com nome em branco');
    }

    const usuario = {
        nome: body.nome,
        email: body.email
    }

    const createdUser = await Usuario.create(usuario);
    return createdUser;
} 