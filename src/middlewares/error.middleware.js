// Middlewares de manejo de errores centralizado.

// Responde 404 cuando ninguna ruta coincide con la petición.
const notFound = (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
};

// Captura cualquier error no controlado.
// Express 5 envía aquí automáticamente los errores de funciones async.
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
};

module.exports = { notFound, errorHandler };
