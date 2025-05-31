const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// DB init
require('./db/database');

// Rutas
app.get('/', (req, res) => {
  res.send('API de Carta de Restaurante');
});

const platosRoutes = require('./routes/platosRoutes');
app.use('/api/platos', platosRoutes);

const usuariosRoutes = require('./routes/usuariosRoutes');
app.use('/api/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});