const db = require('../db/database');

async function getUsuarioPorNombre(nombre) {
  const [rows] = await db.query(
    `SELECT * FROM usuarios WHERE nombre = ? AND activo = 1`,
    [nombre]
  );
  return rows[0]; // Devuelve el primero o undefined
}

module.exports = {
  getUsuarioPorNombre
};
