// importar express
const router = require('express').Router();
// traernos el modelo user
// si tuvieramos un controlador seria
const userController = require('../../controllers/UserControler');
// importamos el encriptador
const bcrypt = require('bcryptjs');

// usar un controlador para login
router.post('/login', userController.login);

// usar un controlador para listar los usuarios
router.use('/listar', userController.listar);
// usar un controlador para registrar usuarios
router.post('/registrar', userController.registrar)

// exportar este router

module.exports = router;