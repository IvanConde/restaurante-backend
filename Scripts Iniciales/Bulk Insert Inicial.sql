INSERT INTO platos (nombre, descripcion, alergenos, precio, disponible, imagen, categoria, subcategoria) VALUES
-- Entrantes
('Tartar de Salmón', 'Salmón fresco con aguacate y caviar negro.', 'Pescado, Moluscos, Lácteos', 20000, 1, 'src/assets/Imagenes/entrantes/tartarDeSalmon.jpg', 'Entrantes', null),
('Carpaccio de Trufa', 'Finas láminas de res con aceite de trufa y parmesano.', 'Lácteos', 16500, 1, 'src/assets/Imagenes/entrantes/carpaccioDeRes.jpg', 'Entrantes', null),
('Burrata', 'Burrata cremosa con tomates y vinagreta balsámico.', 'Lácteos', 16500, 1, 'src/assets/Imagenes/entrantes/burrata.jpg', 'Entrantes', null),

-- Ensaladas
('Langosta y Pomelo', 'Langosta, pomelo y vinagreta de miel y mostaza.', 'Mariscos, Mostaza', 22500, 1, 'src/assets/Imagenes/ensaladas/ensaladaLangostaPomelo.jpg', 'Ensaladas', null),
('Quinoa y Granada', 'Quinoa, verduras asadas y semillas de granada.', 'Ninguno', 16500, 1, 'src/assets/Imagenes/ensaladas/quinoaGranada.jpg', 'Ensaladas', null),
('Capresse', 'Tomates frescos, mozzarella de búfala, y albahaca.', 'Lácteos', 18500, 1, 'src/assets/Imagenes/ensaladas/capresse.jpg', 'Ensaladas', null),

-- Carnes rojas
('Filete de Res', 'Filete de res con salsa de vino tinto y puré de trufas.', 'Lácteos, Sulfitos', 36500, 1, 'src/assets/Imagenes/Platos/fileteDeRes.jpg', 'Platos', 'Carnes rojas'),
('Costillas de Cordero', 'Costillas asadas con reducción de romero y papas gratinadas.', 'Lácteos', 30500, 1, 'src/assets/Imagenes/Platos/costillasDeCordero.jpg', 'Platos', 'Carnes rojas'),

-- Carnes blancas
('Pechuga de Pato', 'Pato con salsa de oporto y frutos rojos.', 'Sulfitos', 28500, 1, 'src/assets/Imagenes/Platos/pechugaDePato.jpg', 'Platos', 'Carnes blancas'),
('Pollo de Corral', 'Pollo asado con salsa de limón y espárragos.', 'Ninguno', 18500, 1, 'src/assets/Imagenes/Platos/polloDeCorral.jpg', 'Platos', 'Carnes blancas'),

-- Pescados
('Lubina con Azafrán', 'Lubina con espárragos y salsa de azafrán.', 'Pescado', 24500, 1, 'src/assets/Imagenes/Platos/lubina.jpg', 'Platos', 'Pescados'),
('Trucha y Alcaparras', 'Trucha con mantequilla de limón y alcaparras.', 'Lácteos', 26400, 1, 'src/assets/Imagenes/Platos/truchaAlcaparras.jpg', 'Platos', 'Pescados'),

-- Pastas
('Tagliatelle con Trufa', 'Pasta fresca con salsa de trufa y parmesano.', 'Gluten, Lácteos', 22700, 1, 'src/assets/Imagenes/Pastas/tagliatelleTrufas.jpg', 'Platos', 'Pastas'),
('Ravioli Ricotta y Espinaca', 'Ravioli con salsa de mantequilla y salvia.', 'Gluten, Lácteos', 21500, 1, 'src/assets/Imagenes/Pastas/ravioli.jpg', 'Platos', 'Pastas'),

-- Postres
('Mousse Chocolate', 'Mousse de chocolate con frambuesas frescas.', 'Lácteos, Soja', 15500, 1, 'src/assets/Imagenes/Postres/mouseChocolate.jpg', 'Postres', null),
('Lemon Pie', 'Tarta de limón con base de almendra.', 'Gluten, Frutos secos, Lácteos', 13500, 1, 'src/assets/Imagenes/Postres/lemonPie.jpg', 'Postres', null),
('Macarons de Pistacho y Frambuesa', 'Macarons rellenos de pistacho y frambuesa.', 'Lácteos', 12200, 1, 'src/assets/Imagenes/Postres/macarronesPistacchio.jpg', 'Postres', null),

-- Bebidas con alcohol
('Atelier Martini', 'Gin, vermouth seco y esencia cítrica artesana.', 'Ninguno', 10500, 1, 'src/assets/Imagenes/Tragos/atelierMartini.jpg', 'Bebidas', 'Con alcohol'),
('Nocturno Spritz', 'Aperol, espumante rosado, frutos rojos y albahaca fresca.', 'Ninguno', 11500, 1, 'src/assets/Imagenes/Tragos/nocturnoSpritz.png', 'Bebidas', 'Con alcohol'),
('Brisa del Plata', 'Vodka Grey Goose, lima fresca y almíbar de jazmín.', 'Ninguno', 15500, 1, 'src/assets/Imagenes/Tragos/brisaDelPlata.png', 'Bebidas', 'Con alcohol'),
('Negroni Reserva', 'Gin, vermouth seco y esencia cítrica artesanal.', 'Ninguno', 10500, 1, 'src/assets/Imagenes/Tragos/negroniReserva.jpg', 'Bebidas', 'Con alcohol'),
('Golden Mule', 'Aperol, espumante rosado, frutos rojos y albahaca fresca.', 'Ninguno', 11500, 1, 'src/assets/Imagenes/Tragos/goldenMule.jpg', 'Bebidas', 'Con alcohol'),

-- Bebidas sin alcohol
('Limonada Fizz', 'Limonada con un toque de menta fresca y jengibre.', 'Ninguno', 9500, 1, 'src/assets/Imagenes/BebidasSinAlcohol/limonadaFizz.jpg', 'Bebidas', 'Sin alcohol'),
('Agua Manantial', 'Agua mineral premium de los Andes.', 'Ninguno', 3500, 1, 'src/assets/Imagenes/BebidasSinAlcohol/aguaManantial.jpg', 'Bebidas', 'Sin alcohol'),
('Gaseosa', 'Exclusiva selección de gaseosas de Coca-Cola.', 'Ninguno', 5500, 1, 'src/assets/Imagenes/BebidasSinAlcohol/gaseosas.jpg', 'Bebidas', 'Sin alcohol');
