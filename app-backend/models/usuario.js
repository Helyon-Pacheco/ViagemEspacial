const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Usuario = sequelize.define('usuario', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Hook para hash da senha antes de salvar o usuário
Usuario.beforeCreate((usuario, options) => {
    usuario.senha = bcrypt.hashSync(usuario.senha, 10);
});

module.exports = Usuario;
