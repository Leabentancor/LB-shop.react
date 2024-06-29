import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ({producto}) => {

    const {agregarAlCarrito} = useContext(CartContext);

    return (

        <div className="producto">
                <img className="img-producto" src={producto.img} />
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>${producto.precio}</p>
                <Link className='ver-mas' to={`/item/${producto.id}`}> Ver mas </Link>
                <button className="btn-agregar-al-carrito" onClick={() => agregarAlCarrito(producto)}>AGREGAR AL CARRITO</button>

        </div>
    )
}
