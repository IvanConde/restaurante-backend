const db = require('../db/database');

async function registrarAccion({ usuario_id, accion, entidad, entidad_id }) {
  await db.query(
    `INSERT INTO auditoria (usuario_id, accion, entidad, entidad_id)
     VALUES (?, ?, ?, ?)`,
    [usuario_id, accion, entidad, entidad_id]
  );
}

module.exports = { registrarAccion };
