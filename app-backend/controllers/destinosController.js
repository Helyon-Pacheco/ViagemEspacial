const Destino = require('../models/destino');

// Mock de dados para exemplo
const destinos = [
    new Destino(1, 'Marte', 'Planeta', 'Descrição de Marte...'),
    new Destino(2, 'Vesta', 'Asteroide', 'Descrição de Vesta...')
];

exports.getDestinos = (req, res) => {
    res.json(destinos);
};

exports.getDestinoById = (req, res) => {
    const destino = destinos.find(d => d.id === parseInt(req.params.id));
    if (!destino) res.status(404).send('Destino não encontrado.');
    res.json(destino);
};
