import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)
    
    return (
        <Link className="carrito" to= "/carrito">
            🛒{calcularCantidad()}
        </Link>
    )
}
