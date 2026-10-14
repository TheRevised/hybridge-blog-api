// Punto de entrada: solo se encarga de iniciar el servidor HTTP.
const { PORT } = require('./src/config/env');
const app = require('./src/app');

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
