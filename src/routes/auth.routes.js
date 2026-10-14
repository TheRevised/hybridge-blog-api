// Rutas de autenticación: /api/signup, /api/login, /api/profile
const { Router } = require('express');
const passport = require('../config/passport');
const requireAuth = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');

const router = Router();

router.post('/signup', authController.signup);
router.post('/login', passport.authenticate('local', { session: false }), authController.login);
router.get('/profile', requireAuth, authController.profile);

module.exports = router;
