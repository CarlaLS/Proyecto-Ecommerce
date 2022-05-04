
const { Router } = require('express')
const router = new Router()
const controllerProductos = require('../Controllers/controllerProductos')
const auth = require('../Middlewares/auth')



router.get('/', controllerProductos.listaProductos)


router.get('/:id', controllerProductos.getProductById)

// Agregar
router.post('/', auth.adminAuth, controllerProductos.addNuevoProducto)

// Editar
router.put('/:id',  auth.adminAuth, controllerProductos.actualizarProducto)

// Borrar
router.delete('/:id', auth.adminAuth, controllerProductos.eliminarProducto)


module.exports = router