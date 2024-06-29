import React, { useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { ItemCantidad } from './ItemCantidad';

export const ItemDetail = ( {producto} ) => {

    const { agregarAlCarrito } = useContext( CartContext );
    const [cant, setCantidad] = useState(1);

    
    const sumarItem = () => {
        setCantidad(cant + 1)
    }
    const restarItem = () => {
        cant > 1 && setCantidad (cant - 1)
    }
    const handeleAgregar = () => {
        agregarAlCarrito({...producto, cantidad: cant});
    };

    return (
        <div>
            <img className="img-producto detail" src={producto.img} />
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
            
            <ItemCantidad sumarItem={sumarItem} restarItem={restarItem}  agregarAlCarrito={handeleAgregar} cantidad={cant}/>
        </div>
    )
}