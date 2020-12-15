const routerx = require('express-promise-router');
// traernos el users de api
const apiRouterUser = require('./api/users')
// traernos el articulo de api
const articuloRouter = require('./api/articulo');
// traernos la categoria de api
const categoriaRouter = require('./api/categoria');



const router = routerx();
// Decirle que use las diferentes rutas
router.use('/usuario', apiRouterUser);
router.use('/categoria', articuloRouter);
router.use('/articulo', categoriaRouter);

module.exports = router;