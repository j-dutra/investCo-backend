const Usuario = require('./usuario');

class Administrador extends Usuario {
  constructor(id, nome, email, senha, role, dataCriacao, dataAtualizacao, nivelAcesso, codigoAcesso) {
    super(id, nome, email, senha, role, dataCriacao, dataAtualizacao);
    this.nivelAcesso = nivelAcesso;
    this.codigoAcesso = codigoAcesso;
  }
}

module.exports = Administrador;