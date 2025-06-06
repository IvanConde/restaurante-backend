const db = require('../db/database');

async function getPlatos() {
  const [rows] = await db.query('SELECT * FROM platos WHERE disponible = 1');
  return rows;
}

async function createPlato({ nombre, descripcion, alergenos, precio, disponible, categoria }) {
  const [result] = await db.query(
    `INSERT INTO platos (nombre, descripcion, alergenos, precio, disponible, categoria)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [nombre, descripcion, alergenos, precio, disponible, categoria]
  );
  return result.insertId;
}

async function updatePlato(id, campos) {
  const columnas = [];
  const valores = [];

  for (const [key, value] of Object.entries(campos)) {
    columnas.push(`${key} = ?`);
    valores.push(value);
  }

  // No hay campos a actualizar
  if (columnas.length === 0) return false;

  const sql = `UPDATE platos SET ${columnas.join(', ')} WHERE id = ?`;
  valores.push(id); // el id va al final

  const [result] = await db.query(sql, valores);
  return result.affectedRows > 0;
}

async function deletePlato(id) {
  // En lugar de eliminar, marcamos como no disponible ya que es eliminacion logica.
  const [result] = await db.query(
    `UPDATE platos SET disponible = 0 WHERE id = ?`,
    [id]
  );
  return result.affectedRows > 0;
}

module.exports = {
  getPlatos,
  createPlato,
  updatePlato,
  deletePlato
};
