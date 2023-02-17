const ControladorProductos = require('../controllers/producto.controllers')

module.exports = (app) =>{
    app.get('/api/obtenerproductos', ControladorProductos.obtenerProductos)
    app.post('/api/crearproducto', ControladorProductos.crearProductos)
    app.get('/api/detalleproducto/:id', ControladorProductos.obtenerDetalleProducto)
   app.delete('/api/borrarproducto/:id', ControladorProductos.eliminarProducto)
   app.put('/api/editarproducto/:id', ControladorProductos.editarProducto)
    
}