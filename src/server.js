
const express = require('express')
const routerProductos= require('./Routers/productos')
const routerCarrito= require('./Routers/carrito')
const routerMain = require('./Routers/main')

const app = express()

    
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/api', routerMain);
app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarrito);
 
app.all('*', (req, res) => {
  res.status(404).json({
    error: -2,
    description: `Route '${req.originalUrl}' method '${req.method}' not implemented.`,
  })
})



const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servido http escuchando en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))
