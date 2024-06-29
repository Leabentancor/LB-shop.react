import React, { useState } from 'react'

export const ItemCantidad = ({ cantidad, sumarItem, restarItem, agregarAlCarrito}) => {


    return (
        <div>
            <div className="btn-cantidad">
                <button onClick={restarItem}>-</button>
                <span>{cantidad}</span>
                <button onClick={sumarItem}>+</button>
            </div>
            <button className="btn-agregar-al-carrito" onClick={agregarAlCarrito}>AGREGAR AL CARRITO</button>
        </div>
    )
}
