const  connObj = require('../config/db')
const { DataTypes, UUIDV4 } = require('sequelize')

const Usuario = connObj.define('user', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Usuario.sync().then(() => {
  console.log('Table created');
})

module.exports = Usuario;