import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ListaProductos = () => {

    const [lista, setLista] = useState([])

    useEffect(() => {

        axios.get('http://localhost:8000/api/obtenerproductos')
            .then((res) => {
                console.log(res)
                setLista(res.data)
            }).catch((error) => {
                console.log(error)
            })


    }, [])
    return (
        <div>

            <h1> Litas de Productos</h1>

            {
                lista.map((producto) => (
                    <div>
                        <li>  {producto.titulo} </li>
                        <Link to = {`/detalleproducto/${producto._id}`} className='d-block'> Mas info</Link> 
                                            
                    </div>

                ))
            }

        </div>
    )
}

export default ListaProductos
