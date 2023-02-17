import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditarProducto = () => {

    const [titulo, setTitulo] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const { id } = useParams()
    const navigate = useNavigate() 

    useEffect(() => {

        axios.get(`http://localhost:8000/api/detalleproducto/${id}`)
            .then((res) => {
                console.log(res)
                setTitulo(res.data.titulo)
                setPrecio(res.data.precio)
                setDescripcion(res.data.descripcion)
            }).catch((error) => {
                console.log(error)
            })


    }, []);

    const prevenirCarga = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/editarproducto/${id}`, {
            titulo,
            precio,
            descripcion
        }).then((res) => {
            console.log(res)
            navigate('/listaproductos')
        }).then((error) => {
            console.log(error)
            

        })

    }
    return (
        <div className='col-6 mx-auto'>
            <h1> Editar Producto</h1>
            <form onSubmit={prevenirCarga}>
                <label htmlFor='' className='form-label mt-3'> titulo </label>
                <input type="text" value={titulo} className='form-control' onChange={(e) => setTitulo(e.target.value)} />
                <label htmlFor='' className='form-label mt-3'> Precio </label>
                <input type="number" value={precio}className='form-control' onChange={(e) => setPrecio(e.target.value)} />
                <label htmlFor='' className='form-label mt-3'> Desripicion </label>
                <input type="text" value={descripcion}className='form-control' onChange={(e) => setDescripcion(e.target.value)} />
                <button className='btn btn-danger mt-5'> Crear Producto</button>
            </form>
        </div>
    )
}

export default EditarProducto
