/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo */
// importar express
const router = require('express').Router();
// importar el controlador de articulo
const articuloController = require('../../controllers/ArticuloController');
// importamos el middleware de autenticacion
const auth = require('../../middlewares/auth')

router.get('/list', auth.verifyUsuario, articuloController.list);
router.post('/add', auth.verifyUsuario, articuloController.add);
router.put('/update', auth.verifyUsuario, articuloController.update);
router.put('/activate', auth.verifyUsuario, articuloController.activate);
router.put('/deactivate', auth.verifyUsuario, articuloController.deactivate);

module.exports = router;

