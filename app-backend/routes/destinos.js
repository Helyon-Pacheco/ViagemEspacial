const express = require('express');
const router = express.Router();
const destinosController = require('../controllers/destinosController');

router.get('/', destinosController.getDestinos);
router.get('/:id', destinosController.getDestinoById);

module.exports = router;
