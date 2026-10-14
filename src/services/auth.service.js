// Lógica de negocio de autenticación (sin depender de req/res).
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/env');
const db = require('../../models');

// Registra un usuario guardando la contraseña cifrada.
const register = async ({ name, email, password }) => {
  const hash = await bcrypt.hash(password, 10);
  return db.User.create({ name, email, password: hash });
};

// Compara una contraseña en texto plano con su hash.
const comparePassword = (password, hash) => bcrypt.compare(password, hash);

// Genera un token JWT para el usuario.
const generateToken = (user) => {
  const payload = { id: user.id };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

module.exports = { register, comparePassword, generateToken };
