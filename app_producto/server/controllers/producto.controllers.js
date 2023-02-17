const Productos = require ('../models/producto.models')

const obtenerProductos = (req, res)=>{
    Productos.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })

}
const crearProductos = (req, res)=>{
    Productos.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)

    })
}
const obtenerDetalleProducto = (req, res)=>{
    Productos.findById(req.params.id)
    .then((resultado)=>{
        console.log(resultado)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const eliminarProducto = (req, res)=>{
    Productos.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const editarProducto = (req, res)=>{
    Productos.updateOne({_id: req.params.id}, req.body, {runValidators:true})
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)
    })
}

module.exports = {
    crearProductos,
    obtenerProductos,
    obtenerDetalleProducto,
    eliminarProducto,
    editarProducto
}
