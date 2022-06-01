const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'BeduShop', // Nombre de la BD
  'root', // Usuario
  '*9ak/oVTwtY_eI:.', //contraseña
{
  host: '34.221.160.76', // host 
  dialect: 'mysql' // gestor de bases de datos
});

module.exports = sequelize;
