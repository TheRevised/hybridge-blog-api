// Configura variables de entorno
require('dotenv').config({ silent: true });

const db = require('./models');

// index.js
const express = require('express');

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar la lectura de cuerpos JSON en las peticiones
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Hybridge Blog Posts' });
});

// GET - Obtener todos los posts
app.get('/api/posts', async (req, res) => {
  const posts = await db.Post.findAll();
  res.json(posts);
});

// DELETE - Eliminar una publicación por su ID
app.delete('/api/posts', (req, res) => {
  const { id } = req.body;

  // 1. Buscamos la posición de la publicación en el arreglo
  const postIndex = posts.findIndex(post => post.id === id);

  // 2. Si no existe, regresamos código 404
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Publicación no encontrada' });
  }

  // 3. Si existe, la eliminamos del arreglo
  posts.splice(postIndex, 1);

  // 4. Regresamos código 204 (No Content)
  return res.status(204).send();
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// POST - Crear un nuevo post
app.post('/api/posts', (req, res) => {
  const { title, content, author } = req.body;
  
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author,
    date: new Date()
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// ESTA PARTE DEL CODIGO ES PARA LOS AUTORES
// CRUD de autores

// POST - Crear un nuevo autor
app.post('/api/authors', async (req, res) => {
  const { name } = req.body;
  const author = await db.Author.create({ name });
  res.status(201).json(author);
});

// GET - Obtener todos los autores
app.get('/api/authors', async (req, res) => {
  const authors = await db.Author.findAll();
  res.json(authors);
});

// GET - Obtener un autor por ID
app.get('/api/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await db.Author.findByPk(id);
  
  if (!author) {
    return res.status(404).json({ error: 'Autor no encontrado' });
  }

  res.json(author);
});

// PATCH - Actualizar un autor por ID
app.patch('/api/authors/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const author = await db.Author.findByPk(id);
  
  if (!author) {
    return res.status(404).json({ error: 'Autor no encontrado' });
  }

  author.name = name;
  await author.save();
  res.json(author);
});

// DELETE - Eliminar un autor por ID
app.delete('/api/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await db.Author.findByPk(id);
  
  if (!author) {
    return res.status(404).json({ error: 'Autor no encontrado' });
  }

  await author.destroy();
  res.json({ message: 'Autor eliminado correctamente' });
});

// ESTA PARTE DEL CODIGO ES PARA LOS POSTS
// CRUD de posts

// POST - Crear un nuevo post
app.post('/api/posts', async (req, res) => {
  const { title, content, authorId } = req.body;
  const post = await db.Post.create({ title, content, authorId });
  res.status(201).json(post);
});

// GET - Obtener todos los posts
app.get('/api/posts', async (req, res) => {
  const posts = await db.Post.findAll();
  res.json(posts);
});

// GET - Obtener un post por ID
app.get('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  const post = await db.Post.findByPk(id);
  
  if (!post) {
    return res.status(404).json({ error: 'Post no encontrado' });
  }

  res.json(post);
});

// PATCH - Actualizar un post por ID
app.patch('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await db.Post.findByPk(id);
  
  if (!post) {
    return res.status(404).json({ error: 'Post no encontrado' });
  }

  post.title = title;
  post.content = content;
  await post.save();
  res.json(post);
});

// DELETE - Eliminar un post por ID
app.delete('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  const post = await db.Post.findByPk(id);
  
  if (!post) {
    return res.status(404).json({ error: 'Post no encontrado' });
  }

  await post.destroy();
  res.json({ message: 'Post eliminado correctamente' });
});
