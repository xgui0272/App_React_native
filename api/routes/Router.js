/**
 * Bibliotecas externas
 */
const express = require('express');
const cors = require('cors');

/**
 * instanciando o router
 */
const router = express();

/**
 * Controller da aplicação
 */
const ManutencaoController = require('../controllers/ManutencaoController');

/**
 * Rotas
 */

router.post('/create', ManutencaoController.insertManutencao);
router.get('/show', ManutencaoController.show)
router.get('/showemail', ManutencaoController.showManutencaoEmail);

module.exports = router;