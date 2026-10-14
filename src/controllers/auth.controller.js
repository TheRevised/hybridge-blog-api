// Controlador de autenticación: recibe la petición y arma la respuesta HTTP.
const authService = require('../services/auth.service');

// POST /api/signup - Registrar un usuario
const signup = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ id: user.id, email: user.email });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// POST /api/login - Passport ya validó las credenciales y dejó el usuario en req.user
const login = (req, res) => {
  const token = authService.generateToken(req.user);
  res.json({ token, token_type: 'Bearer' });
};

// GET /api/profile - Ruta protegida, `req.user` viene de la estrategia JWT
const profile = (req, res) => {
  res.json({ id: req.user.id, email: req.user.email, msg: 'Acceso concedido 👋' });
};

module.exports = { signup, login, profile };
