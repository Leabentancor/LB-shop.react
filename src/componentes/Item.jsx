import React from 'react'

export const Item = ({producto}) => {
    return (
        <div className="producto">
                <img className="img-producto" src={producto.img} />
                <h2>{producto.nombre}</h2>
                <p>${producto.precio}</p>
                <button className='ver-mas'> Ver mas </button>
        </div>
    )
}
