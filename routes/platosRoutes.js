// routes/platosRoutes.js
const express = require('express');
const router = express.Router();
const platosController = require('../controllers/platosController');

router.get('/', platosController.listarPlatos);
router.post('/', platosController.crearPlato);
router.put('/:id', platosController.modificarPlato);
router.delete('/:id', platosController.eliminarPlato);

module.exports = router;
