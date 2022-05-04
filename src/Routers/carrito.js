

const { Router } = require('express')
const router = new Router()
const controllerCarrito= require('../Controllers/controllerCarrito')



router.get('/', controllerCarrito.ListaCarrito)


router.get('/:id', controllerCarrito.getCarritoById)

router.get('/:id/productos', controllerCarrito.ListaProductoCarrito)



router.post('/', controllerCarrito.crearNuevoCarrito)

router.post('/:id/productos/:id_prod', controllerCarrito.addProductosAlCarrito)


router.delete('/:id/productos/:id_prod', controllerCarrito.eliminarProductoCarrito)

router.delete('/:id', controllerCarrito.vaciarCarrito)


module.exports = router