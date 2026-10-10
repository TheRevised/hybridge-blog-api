// index.js
const express = require('express');

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta base
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Hybridge Blog Posts' });
});

// GET - Obtener todos los posts
app.get('/api/posts', (req, res) => {
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