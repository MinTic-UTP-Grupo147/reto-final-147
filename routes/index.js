// const routerx = require('express-promise-router');
// importar express
const router = require('express').Router();
// traernos el users de api
const apiRouterUser = require('./api/users')
// traernos el articulo de api
const articuloRouter = require('./api/articulo');
// traernos la categoria de api
const categoriaRouter = require('./api/categoria');



// const router = routerx();

// Decirle que use las diferentes rutas
router.use('/usuario', apiRouterUser);
//router.use('/categoria', categoriaRouter);
//router.use('/articulo', articuloRouter);

module.exports = router;