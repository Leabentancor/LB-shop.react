import { CartWidget } from "./CartWidget"
import { Navbar } from "./Navbar"


export const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <CartWidget />
        </header>
    )
}
