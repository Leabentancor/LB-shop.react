import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
    return (
        <div className="producto">
                <img className="img-producto" src={producto.img} />
                <h2>{producto.nombre}</h2>
                <p>${producto.precio}</p>
                <Link className='ver-mas' to={`/item/${producto.id}`}> Ver mas </Link>
        </div>
    )
}
