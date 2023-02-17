import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'


const DetalleProductos = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:8000/api/detalleproducto/${id}`)
            .then((res) => {
                console.log(res)
                setProducto(res.data)
            }).catch((error) => {
                console.log(error)
            })


    }, []);

    const borrarProducto = () => {
        axios.delete(`http://localhost:8000/api/borrarproducto/${id}`)
            .then((res) => {
                console.log(res)               
                navigate('/listaproductos')
            }).catch((error) => {
                console.log(error)
            })

    }
    return (
        <div>
            <h4>{producto.titulo}</h4>
            <p>{producto.precio}</p>
            <p>{producto.descripcion}</p>
            <Link to = {`/editarproducto/${producto._id}`} className='d-block'> Editar Producto</Link> 
            <button className='btn btn-danger' onClick={borrarProducto}>Borrar</button>


        </div>
    )
}

export default DetalleProductos
