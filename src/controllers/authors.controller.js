// Controlador de autores: recibe la petición y arma la respuesta HTTP.
const authorsService = require('../services/authors.service');

// GET /api/authors - Obtener todos los autores
const getAll = async (req, res) => {
  const authors = await authorsService.findAll();
  res.json(authors);
};

// GET /api/authors/:id - Obtener un autor por ID
const getById = async (req, res) => {
  const author = await authorsService.findById(req.params.id);
  if (!author) {
    return res.status(404).json({ error: 'Autor no encontrado' });
  }
  res.json(author);
};

// POST /api/authors - Crear un nuevo autor
const create = async (req, res) => {
  const author = await authorsService.create(req.body);
  res.status(201).json(author);
};

// PATCH /api/authors/:id - Actualizar un autor por ID
const update = async (req, res) => {
  const author = await authorsService.update(req.params.id, req.body);
  if (!author) {
    return res.status(404).json({ error: 'Autor no encontrado' });
  }
  res.json(author);
};

// DELETE /api/authors/:id - Eliminar un autor por ID
const remove = async (req, res) => {
  const deleted = await authorsService.remove(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'Autor no encontrado' });
  }
  res.json({ message: 'Autor eliminado correctamente' });
};

module.exports = { getAll, getById, create, update, remove };
