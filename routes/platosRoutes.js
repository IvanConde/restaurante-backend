const express = require('express');
const router = express.Router();
const platosController = require('../controllers/platosController');
const verificarToken = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');

router.post('/', verificarToken, platosController.crearPlato);
router.get('/', verificarToken, platosController.listarPlatos);
router.put('/:id', verificarToken, platosController.modificarPlato);
router.delete('/:id', verificarToken, platosController.eliminarPlato);

// POST /api/platos/:id/imagen
router.post(
  '/:id/imagen',
  verificarToken,
  upload.single('foto'),
  platosController.actualizarImagen
);

module.exports = router;
