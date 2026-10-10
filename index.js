// index.js
// Cargar variables de entorno desde el archivo .env (si existe)
require('dotenv').config();

const express = require('express');

// Importar el módulo de almacenamiento en memoria de posts
const posts = require('./posts');

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware global para procesar cuerpos de petición con formato JSON (req.body)
app.use(express.json());

// ==========================================
// RUTAS / ENDPOINTS
// ==========================================

// GET / - Ruta de bienvenida / estado
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Hybridge Blog Posts' });
});

// GET /api/posts - Obtener la lista de todos los posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// POST /api/posts - Crear una nueva publicación
app.post('/api/posts', (req, res) => {
  const { title, content, author } = req.body;
  
  // Validación básica de campos requeridos
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Todos los campos son requeridos: title, content, author' });
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

// ==========================================
// INICIALIZACIÓN DEL SERVIDOR
// ==========================================
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});