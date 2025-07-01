CREATE TABLE platos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(500),
  alergenos VARCHAR(100),
  precio INTEGER NOT NULL,
  disponible BOOLEAN DEFAULT TRUE,
  categoria varchar(50) NOT NULL,
  imagen varchar(500),
  subcategoria varchar(50)
);