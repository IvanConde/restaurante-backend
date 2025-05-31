const usuariosModel = require('../models/usuariosModel');
const bcrypt = require('bcryptjs');

async function crearUsuario(req, res) {
  try {
    const { nombre, password } = req.body;

    if (!nombre || !password) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Hashear la contraseña
    const passwordHasheada = await bcrypt.hash(password, 10);

    const nuevoId = await usuariosModel.createUsuario({
      nombre,
      password: passwordHasheada,
    });

    res.status(201).json({ mensaje: 'Usuario creado', id: nuevoId });
  } catch (err) {
    console.error(err);
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(409).json({ error: 'El email ya está registrado' });
    } else {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  }
}

async function listarUsuarios(req, res) {
  try {
    const usuarios = await usuariosModel.getUsuarios();
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar los usuarios' });
  }
}

async function modificarUsuario(req, res) {
  const id = parseInt(req.params.id);
  const camposPermitidos = ['nombre', 'password', 'activo'];

  const camposActualizados = {};
  for (const campo of camposPermitidos) {
    if (req.body[campo] !== undefined) {
      camposActualizados[campo] = req.body[campo];
    }
  }

  if (Object.keys(camposActualizados).length === 0) {
    return res.status(400).json({ error: 'No se enviaron campos válidos para actualizar' });
  }

  try {
    // Si quiere cambiar la password, la encriptamos
    if (camposActualizados.password) {
      const bcrypt = require('bcryptjs');
      camposActualizados.password = await bcrypt.hash(camposActualizados.password, 10);
    }

    const actualizado = await usuariosModel.updateUsuario(id, camposActualizados);

    if (actualizado) {
      res.json({ mensaje: 'Usuario actualizado correctamente' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
}

async function eliminarUsuario(req, res) {
  const id = parseInt(req.params.id);

  try {
    const eliminado = await usuariosModel.deleteUsuario(id);

    if (eliminado) {
      res.json({ mensaje: 'Usuario eliminado (lógicamente)' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
}

module.exports = {
  crearUsuario,
  listarUsuarios,
  modificarUsuario,
  eliminarUsuario
};
