// Configuración de las estrategias de autenticación de Passport.
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const { JWT_SECRET } = require('./env');
const authService = require('../services/auth.service');
const db = require('../../models');

/* ───── Estrategia Local (login con email y contraseña) ───── */
passport.use('local',
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password', session: false },
    async (email, password, done) => {
      try {
        const user = await db.User.findOne({ where: { email } });
        if (!user) {
          return done(null, false, { message: 'Usuario no existe' });
        }
        const ok = await authService.comparePassword(password, user.password);
        if (!ok) {
          return done(null, false, { message: 'Contraseña incorrecta' });
        }
        return done(null, user); // autenticado
      } catch (err) { return done(err); }
    }
  )
);

/* ───── Estrategia JWT (protección de rutas) ───── */
passport.use('jwt',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
      session: false
    },
    async (payload, done) => {
      try {
        const user = await db.User.findByPk(payload.id);
        if (!user) return done(null, false);
        return done(null, user);
      } catch (err) { return done(err, false); }
    }
  )
);

module.exports = passport;
