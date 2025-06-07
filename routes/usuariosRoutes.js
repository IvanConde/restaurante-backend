const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const verificarToken = require('../middlewares/authMiddleware');

router.post('/', verificarToken, usuariosController.crearUsuario);
router.get('/', verificarToken, usuariosController.listarUsuarios);
router.put('/:id', verificarToken, usuariosController.modificarUsuario);
router.delete('/:id', verificarToken, usuariosController.eliminarUsuario);

module.exports = router;
