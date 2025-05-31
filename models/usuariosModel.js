const db = require('../db/database');

async function createUsuario({ nombre, password}) {
  const [result] = await db.query(
    `INSERT INTO usuarios (nombre, password)
     VALUES (?, ?)`,
    [nombre, password]
  );
  return result.insertId;
}

async function getUsuarios() {
  const [rows] = await db.query(
    `SELECT id, nombre FROM usuarios WHERE activo = 1`
  );
  return rows;
}

async function updateUsuario(id, campos) {
  const columnas = [];
  const valores = [];

  for (const [key, value] of Object.entries(campos)) {
    columnas.push(`${key} = ?`);
    valores.push(value);
  }

  if (columnas.length === 0) return false;

  const sql = `UPDATE usuarios SET ${columnas.join(', ')} WHERE id = ?`;
  valores.push(id);

  const [result] = await db.query(sql, valores);
  return result.affectedRows > 0;
}

async function deleteUsuario(id) {
  const [result] = await db.query(
    `UPDATE usuarios SET activo = 0 WHERE id = ?`,
    [id]
  );
  return result.affectedRows > 0;
}

module.exports = {
  createUsuario,
  getUsuarios,
  updateUsuario,
  deleteUsuario
};
