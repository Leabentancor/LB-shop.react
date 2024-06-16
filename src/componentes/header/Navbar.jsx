import { NavLink } from "react-router-dom";
import categorias from "../../data/categorias.json";

export const Navbar = () => {
    return (
        <nav className="cabecera">
            <ul className="nav categorias">
                {
                    categorias.map((categoria) => {
                        return (
                            <li className="link" key={categoria.id}>
                                <NavLink to={`/categoria/${categoria.id}`} activeclassname="active" className="imagen">
                                    {categoria.nombre}
                                </NavLink>
                            </li>
                        )
                        
                    })
                }
                <li>
                <NavLink to="/inicio"><h1 className="logo">PEDACITOS DE MUNDO</h1></NavLink>
                </li>
                <li className="nosotros link">
                    <NavLink to="/" activeclassname="active" className="imagen">NOSOTROS</NavLink>
                </li>
                <li className="contacto link">
                    <NavLink to="/" activeclassname="active" className="imagen">CONTACTO</NavLink>
                </li>
            </ul>
        </nav>
    )
}  
