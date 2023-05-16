class Usuario {
  constructor(id, nome, email, senha, role, dataCriacao, dataAtualizacao) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.role = role;
    this.dataCriacao = dataCriacao;
    this.dataAtualizacao = dataAtualizacao;
  }
}

module.exports = Usuario;