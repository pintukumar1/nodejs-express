const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'up60x5724', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
