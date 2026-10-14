// Controlador de publicaciones: recibe la petición y arma la respuesta HTTP.
const postsService = require('../services/posts.service');

// GET /api/posts - Obtener todos los posts
const getAll = async (req, res) => {
  const posts = await postsService.findAll();
  res.json(posts);
};

// GET /api/posts/:id - Obtener un post por ID
const getById = async (req, res) => {
  const post = await postsService.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ error: 'Post no encontrado' });
  }
  res.json(post);
};

// POST /api/posts - Crear un nuevo post
const create = async (req, res) => {
  const post = await postsService.create(req.body);
  res.status(201).json(post);
};

// PATCH /api/posts/:id - Actualizar un post por ID
const update = async (req, res) => {
  const post = await postsService.update(req.params.id, req.body);
  if (!post) {
    return res.status(404).json({ error: 'Post no encontrado' });
  }
  res.json(post);
};

// DELETE /api/posts/:id - Eliminar un post por ID
const remove = async (req, res) => {
  const deleted = await postsService.remove(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'Post no encontrado' });
  }
  res.json({ message: 'Post eliminado correctamente' });
};

module.exports = { getAll, getById, create, update, remove };
