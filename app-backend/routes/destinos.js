const express = require('express');
const router = express.Router();
const destinosController = require('../controllers/destinosController');

// Rota para listar todos os destinos
router.get('/', destinosController.getDestinos);

// Rota para obter um destino específico pelo ID
router.get('/:id', destinosController.getDestinoById);

// Rota para adicionar um novo destino
router.post('/', destinosController.addDestino);

module.exports = router;
