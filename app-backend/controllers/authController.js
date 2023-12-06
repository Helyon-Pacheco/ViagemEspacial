const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registrar = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuario.create({ email, senha });
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(401).send('Credenciais inválidas');
        }

        const token = jwt.sign({ id: usuario.id }, 'chave_secreta', { expiresIn: '1h' });
        res.json({ message: 'Login bem-sucedido!', token });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
