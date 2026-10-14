// Punto central de rutas: agrupa todos los módulos bajo /api
const { Router } = require('express');

const router = Router();

router.use('/', require('./auth.routes'));
router.use('/authors', require('./authors.routes'));
router.use('/posts', require('./posts.routes'));

module.exports = router;
