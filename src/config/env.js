// Carga las variables de entorno desde el archivo .env
// y las expone en un solo lugar para el resto de la aplicación.
require('dotenv').config({ silent: true });

module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: '1h',
};
