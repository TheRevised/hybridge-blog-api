// Middleware para proteger rutas con JWT.
// Si el token es válido, Passport coloca al usuario en `req.user`.
const passport = require('../config/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = requireAuth;
