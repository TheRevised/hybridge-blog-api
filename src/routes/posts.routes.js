// Rutas CRUD de publicaciones: /api/posts
// Lectura pública; creación, edición y borrado requieren JWT.
const { Router } = require('express');
const requireAuth = require('../middlewares/auth.middleware');
const postsController = require('../controllers/posts.controller');

const router = Router();

router.get('/', postsController.getAll);
router.get('/:id', postsController.getById);
router.post('/', requireAuth, postsController.create);
router.patch('/:id', requireAuth, postsController.update);
router.delete('/:id', requireAuth, postsController.remove);

module.exports = router;
