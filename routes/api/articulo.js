/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo */
// importar express
const router = require('express').Router();
// importar el controlador de articulo
const articuloController = require('../../controllers/ArticuloController');
// importamos el middleware de autenticacion
const auth = require('../../middlewares/auth')

router.get('/list', articuloController.list);
router.post('/add',auth.verificarAdministrador, articuloController.add);
router.put('/update',auth.verificarAdministrador, articuloController.update);
router.put('/activate',auth.verificarAdministrador, articuloController.activate);
router.put('/deactivate',auth.verificarAdministrador, articuloController.deactivate);

module.exports = router;

