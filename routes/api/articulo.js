/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo */
// importar express
const router = require('express').Router();
// importar el controlador de articulo
const articuloController = require('../../controllers/ArticuloController');
// importamos el middleware de autenticacion
const auth = require('../../middlewares/auth')

router.get('/list', articuloController.list);
router.post('/add', articuloController.add);
router.put('/update', articuloController.update);
router.put('/activate', articuloController.activate);
router.put('/deactivate', articuloController.deactivate);

module.exports = router;

