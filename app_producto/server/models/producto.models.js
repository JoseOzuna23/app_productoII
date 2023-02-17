const mongoose = require('mongoose')
const ProductoSchema = mongoose.Schema({
    titulo: {
        type: String
    },
    precio: {
        type: Number
    },
    descripcion: {
        type: String
    }

}, { timestamps: true })
const Productos = mongoose.model('Productos', ProductoSchema)
module.exports = Productos