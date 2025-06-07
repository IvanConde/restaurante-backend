const db = require('./database');
const bcrypt = require('bcryptjs');

async function crearUsuarioAdminSiNoExiste() {
  try {
    const [rows] = await db.query(`SELECT COUNT(*) AS total FROM usuarios WHERE activo = 1`);
    const totalUsuarios = rows[0].total;

    if (totalUsuarios === 0) {
      const passwordHasheada = await bcrypt.hash('admin123', 10);

      await db.query(
        `INSERT INTO usuarios (nombre, password, activo) VALUES (?, ?, ?)`,
        ['admin', passwordHasheada, true]
      );

      console.log('Usuario admin creado: nombre="admin", password="admin123"');
    } else {
      console.log(`Ya existen ${totalUsuarios} usuario(s) en la base de datos`);
    }
  } catch (err) {
    console.error('Error al verificar o crear el usuario admin:', err);
  }
}

module.exports = { crearUsuarioAdminSiNoExiste };
