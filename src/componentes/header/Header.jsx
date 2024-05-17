import { Carrito } from "./Carrito"
import Menu from "./Menu"
import Mode from "./Mode"
import { Navbar } from "./Navbar"


export const Header = () => {
    return (
        <header className="header">
            <Menu />
            <Navbar />
            <h1 className="logo">LB Shop</h1>
            <Mode />
            <Carrito />
            
        </header>
    )
}
