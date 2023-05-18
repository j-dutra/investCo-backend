const { Sequelize } = require('sequelize')
const connObj = new Sequelize('nomedodb', 'nomedouser', 'senha', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const tryConnect = async () => {
    const result = await connObj.authenticate();
    console.log('Conectado: ', result);
}

module.exports = connObj