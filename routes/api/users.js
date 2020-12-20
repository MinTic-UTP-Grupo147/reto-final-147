// importar express
const router = require('express').Router();
// traernos el modelo user
// si tuvieramos un controlador seria
const userController = require('../../controllers/UserController');
// importamos el encriptador
const bcrypt = require('bcryptjs');
// importamos el middleware de autenticacion
const auth = require('../../middlewares/auth')

// usar un controlador para login
router.post('/login', userController.login);

//usar un controlador para listar los usuarios
router.use('/list',auth.verificarAdministrador, userController.list);
router.post('/add',auth.verificarAdministrador, userController.add);
router.put('/update',auth.verificarAdministrador, userController.update);
router.put('/activate',auth.verificarAdministrador, userController.activate);
router.put('/deactivate',auth.verificarAdministrador, userController.deactivate);
// usar un controlador para registrar usuarios
// router.post('/register',auth.verificarAdministrador, userController.register);
// usar un controlador para actualizar usuario
// router.put('/update',auth.verificarAdministrador, userController.update)

// exportar este router

module.exports = router;