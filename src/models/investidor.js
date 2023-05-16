const Usuario = require('./usuario');

class Investidor extends Usuario {
  constructor(id, nome, email, senha, role, dataCriacao, dataAtualizacao, idade, toleranciaRisco, renda, prazoInvestimento, perfilInvestimento) {
    super(id, nome, email, senha, role, dataCriacao, dataAtualizacao);
    this.idade = idade;
    this.toleranciaRisco = toleranciaRisco;
    this.renda = renda;
    this.prazoInvestimento = prazoInvestimento;
    this.perfilInvestimento = perfilInvestimento;
  }
}

module.exports = Investidor;