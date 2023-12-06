const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Destino = sequelize.define('destino', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    informacoesCientificas: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});

module.exports = Destino;
