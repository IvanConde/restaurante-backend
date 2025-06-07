const express = require('express');
const router = express.Router();
const platosController = require('../controllers/platosController');
const verificarToken = require('../middlewares/authMiddleware');

router.post('/', verificarToken, platosController.crearPlato);
router.get('/', verificarToken, platosController.listarPlatos);
router.put('/:id', verificarToken, platosController.modificarPlato);
router.delete('/:id', verificarToken, platosController.eliminarPlato);

module.exports = router;
