const Sequelize = require('sequelize');

const sequelize = new Sequelize('viagem_espacial_db', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
