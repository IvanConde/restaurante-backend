const platosModel = require('../models/platosModel');
const auditoria = require('../models/auditoriaModel');

async function listarPlatos(req, res) {
  try {
    const filtros = req.query;
    const platos = await platosModel.getPlatos(filtros);
    res.json(platos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los platos' });
  }
}

async function crearPlato(req, res) {
  try {
    const { nombre, descripcion, alergenos, precio, disponible, categoria, subcategoria } = req.body;

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
      subcategoria: subcategoria !== undefined ? subcategoria : "General",
    });

    await auditoria.registrarAccion({
      usuario_id: req.usuario.id,
      accion: `Creo el plato con id ${nuevoId}`,
      entidad: 'plato',
      entidad_id: nuevoId
    });

    res.status(201).json({ mensaje: 'Plato creado', id: nuevoId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear el plato' });
  }
}

async function modificarPlato(req, res) {
  const id = parseInt(req.params.id);
  const camposPermitidos = ['nombre', 'descripcion', 'alergenos', 'precio', 'disponible', 'categoria', 'subcategoria'];

  const bodyId = req.body.id;
  if (bodyId !== undefined && parseInt(bodyId) !== id) {
    return res.status(400).json({ error: 'No se puede modificar el ID del plato' });
  }

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
      await auditoria.registrarAccion({
        usuario_id: req.usuario.id,
        accion: `Modificó el plato con id ${id}`,
        entidad: 'plato',
        entidad_id: id
      });
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
      await auditoria.registrarAccion({
        usuario_id: req.usuario.id,
        accion: `Eliminó el plato con id ${id}`,
        entidad: 'plato',
        entidad_id: id
      });
      res.json({ mensaje: 'Plato eliminado (lógicamente)' });
    } else {
      res.status(404).json({ error: 'Plato no encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar el plato' });
  }
}

async function actualizarImagen(req, res) {
  const id = parseInt(req.params.id);
  const imagenUrl = req.file.path;

  try {
    await platosModel.updatePlato(id, { imagen: imagenUrl });

    await auditoria.registrarAccion({
      usuario_id: req.usuario.id,
      accion: `Se actualizo la imagen del plato con id ${id}`,
      entidad: 'plato',
      entidad_id: id
    });

    res.json({ mensaje: 'Imagen subida correctamente', url: imagenUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al subir la imagen' });
  }
}

module.exports = {
  listarPlatos,
  crearPlato,
  modificarPlato,
  eliminarPlato,
  actualizarImagen
};
