const loginModel = require('../models/loginModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auditoria = require('../models/auditoriaModel');

async function login(req, res) {
  const { nombre, password } = req.body;

  if (!nombre || !password) {
    return res.status(400).json({ error: 'Nombre y contraseña requeridos' });
  }

  try {
    const usuario = await loginModel.getUsuarioPorNombre(nombre);

    if (!usuario) {
      return res.status(401).json({ error: 'Usuario no encontrado o inactivo' });
    }

    const coincide = await bcrypt.compare(password, usuario.password);
    if (!coincide) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: usuario.id, nombre: usuario.nombre },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // token válido por 1 hora
    );

    await auditoria.registrarAccion({
      usuario_id: usuario.id,
      accion: `Inicio Sesión el usuario con ID ${usuario.id}`,
      entidad: 'login',
      entidad_id: usuario.id
    });

    res.json({ mensaje: 'Login exitoso', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
}

module.exports = {
  login
};
