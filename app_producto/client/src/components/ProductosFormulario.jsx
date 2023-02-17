import React, { useState } from 'react'
import axios from 'axios'
const ProductosFormulario = () => {

    const [titulo, setTitulo] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const prevenirCarga = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/crearproducto', {
            titulo,
            precio,
            descripcion
        }).then((res) => {
            console.log(res)
        }).then((error) => {
            console.log(error)
            

        })

    }
    return (
        <div className='col-6 mx-auto'>
            <h1> Listas de Produts de la base de datos</h1>
            <form onSubmit={prevenirCarga}>
                <label htmlFor='' className='form-label mt-3'> titulo </label>
                <input type="text" className='form-control' onChange={(e) => setTitulo(e.target.value)} />
                <label htmlFor='' className='form-label mt-3'> Precio </label>
                <input type="number" className='form-control' onChange={(e) => setPrecio(e.target.value)} />
                <label htmlFor='' className='form-label mt-3'> Desripicion </label>
                <input type="text" className='form-control' onChange={(e) => setDescripcion(e.target.value)} />
                <button className='btn btn-danger mt-5'> Crear Producto</button>
            </form>


        </div>
    )
}

export default ProductosFormulario
