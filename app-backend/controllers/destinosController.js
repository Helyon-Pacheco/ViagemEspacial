const Destino = require('../models/destino');

exports.getDestinos = async (req, res) => {
    try {
        const destinos = await Destino.findAll();
        res.json(destinos);
    } catch (error) {
        res.status(500).send('Erro ao buscar destinos: ' + error.message);
    }
};

exports.getDestinoById = async (req, res) => {
    try {
        const destino = await Destino.findByPk(req.params.id);
        if (!destino) {
            res.status(404).send('Destino não encontrado.');
        } else {
            res.json(destino);
        }
    } catch (error) {
        res.status(500).send('Erro ao buscar destino: ' + error.message);
    }
};

exports.addDestino = async (req, res) => {
    try {
        const { nome, descricao, tipo } = req.body;
        const novoDestino = await Destino.create({ nome, descricao, tipo });
        res.status(201).json(novoDestino);
    } catch (error) {
        res.status(500).send('Erro ao adicionar destino: ' + error.message);
    }
};

exports.getInformacoesCientificas = async (req, res) => {
    try {
        const destino = await Destino.findByPk(req.params.id);
        if (!destino) {
            return res.status(404).send('Destino não encontrado.');
        }
        res.json({ informacoesCientificas: destino.informacoesCientificas });
    } catch (error) {
        res.status(500).send('Erro ao buscar informações científicas: ' + error.message);
    }
};
