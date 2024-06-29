import { useEffect, useState } from "react";
import { createContext } from "react";



export const CartContext = createContext();
const carritoLS = JSON.parse(localStorage.getItem( "carrito" )) || [];
export const CartProvider = ({ children }) => {

    const [ carrito, setCarrito] = useState(carritoLS);


    // const agregarAlCarrito = (producto) =>{
    // setCarrito([...carrito, producto])
    // }
    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const itemIndex = prevCarrito.findIndex(item => item.id === producto.id);
    
            if (itemIndex !== -1) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            const updatedCarrito = [...prevCarrito];
            updatedCarrito[itemIndex].cantidad += producto.cantidad;
            return updatedCarrito;
            } else {
            // Si el producto no está en el carrito, agréguelo
            return [...prevCarrito, producto];
                }
            })
        }
        const eliminarDelCarrito = (id) => {
            setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
        }
    // const calcularCantidad = () => {
    // return carrito.length
    // }
    // const sumarTotal = () => {
    // return carrito.reduce((acc, prod) => acc + prod.precio, 0);
    // }
    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        };
    
    const sumarTotal = () => {
        return carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
        };

    const carritoVacio = () => {
    setCarrito([])
    }

    useEffect(() => {
        localStorage.setItem("carrito",JSON.stringify(carrito) )
    },[carrito])

    return(
        <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, calcularCantidad, sumarTotal, carritoVacio }}>
            {children}
        </CartContext.Provider>
    )
}