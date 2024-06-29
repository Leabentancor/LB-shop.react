import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';

export const Carrito = () => {

    const {carrito, sumarTotal, carritoVacio, eliminarDelCarrito} = useContext(CartContext);

    const vaciarCarrito = () => {
        carritoVacio(); 
    }
    const eliminarProducto = (id) => {
        eliminarDelCarrito(id);
    };
    
    return (
        <div className="contenedor-carrito">
            
            {carrito.map((prod) => 
        <div key={prod.id} className="producto-carrito">
            <img src={prod.img} alt={prod.nombre} className="imagen-producto" />
            <h1>{prod.nombre}</h1>
            <p>Precio: ${prod.precio}</p>
            <p>Cantidad: {prod.cant}</p>
            <p>Total: ${prod.precio * prod.cant}</p>
            <button onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
        </div>
        )}
            
            
            {
            /* {carrito.map((prod) => <h1>{prod.nombre}: ${prod.precio} Cantidad: {prod.cantidad}</h1>)}
             */}
            {
                carrito.length > 0 ? 
                    <>
                        <h2>Total: ${sumarTotal()}</h2>
                        <button onClick={vaciarCarrito}>X</button>
                        <button className="btn-finalizar compra">Finalizar compra</button>
                    </> 
                    : <h2 className="mensaje-carrito-vacio">🤔 ¿Que estas esperando? <br></br> Agrega productos a tu carrito 😁 </h2>
            }
        </div>
    )
}
