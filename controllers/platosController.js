const platosModel = require('../models/platosModel');

async function listarPlatos(req, res) {
  try {
    const platos = await platosModel.getPlatos();
    res.json(platos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los platos' });
  }
}

async function crearPlato(req, res) {
  try {
    const { nombre, descripcion, alergenos, precio, disponible, categoria } = req.body;

    // Validación mínima
    if (!nombre || !precio || !categoria) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    const nuevoId = await platosModel.createPlato({
      nombre,
      descripcion,
      alergenos,
      precio,
      disponible: disponible !== undefined ? disponible : true,
      categoria,
    });

    res.status(201).json({ mensaje: 'Plato creado', id: nuevoId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear el plato' });
  }
}

async function modificarPlato(req, res) {
  const id = parseInt(req.params.id);
  const camposPermitidos = ['nombre', 'descripcion', 'alergenos', 'precio', 'disponible', 'categoria'];

  // Filtrar solo los campos válidos
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
    const actualizado = await platosModel.updatePlato(id, camposActualizados);

    if (actualizado) {
      res.json({ mensaje: 'Plato actualizado correctamente' });
    } else {
      res.status(404).json({ error: 'Plato no encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar el plato' });
  }
}

async function eliminarPlato(req, res) {
  const id = parseInt(req.params.id);

  try {
    const eliminado = await platosModel.deletePlato(id);

    if (eliminado) {
      res.json({ mensaje: 'Plato eliminado (lógicamente)' });
    } else {
      res.status(404).json({ error: 'Plato no encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar el plato' });
  }
}

module.exports = {
  listarPlatos,
  crearPlato,
  modificarPlato,
  eliminarPlato
};
