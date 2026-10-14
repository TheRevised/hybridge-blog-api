// Configuración de la aplicación Express (sin levantar el servidor).
const express = require('express');
const passport = require('./config/passport');
const routes = require('./routes');
const { notFound, errorHandler } = require('./middlewares/error.middleware');

// Inicializar la aplicación Express
const app = express();

// Habilitar la lectura de cuerpos JSON en las peticiones
app.use(express.json());
app.use(passport.initialize());

// Ruta base
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Hybridge Blog Posts' });
});

// Rutas de la API
app.use('/api', routes);

// Manejo de rutas inexistentes y errores
app.use(notFound);
app.use(errorHandler);

module.exports = app;
