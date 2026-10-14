// Rutas CRUD de autores: /api/authors
// Lectura pública; creación, edición y borrado requieren JWT.
const { Router } = require('express');
const requireAuth = require('../middlewares/auth.middleware');
const authorsController = require('../controllers/authors.controller');

const router = Router();

router.get('/', authorsController.getAll);
router.get('/:id', authorsController.getById);
router.post('/', requireAuth, authorsController.create);
router.patch('/:id', requireAuth, authorsController.update);
router.delete('/:id', requireAuth, authorsController.remove);

module.exports = router;
