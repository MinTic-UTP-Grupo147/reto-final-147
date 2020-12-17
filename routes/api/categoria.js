// importar express
const router = require('express').Router();

// si tuvieramos un controlador seria
const categoriaController = require('../../controllers/CategoriaController');
const { verificarAdministrador } = require('../../middlewares/auth');
// importamos el middleware de autenticacion
const auth = require('../../middlewares/auth')

router.get('/list',auth.verificarAdministrador, categoriaController.list);
router.post('/add',auth.verificarAdministrador, categoriaController.add);
router.put('/update',auth.verificarAdministrador, categoriaController.update);
router.put('/activate',auth.verificarAdministrador, categoriaController.activate);
router.put('/deactivate',auth.verificarAdministrador, categoriaController.deactivate);

module.exports = router;