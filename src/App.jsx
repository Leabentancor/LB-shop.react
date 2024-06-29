import "./css/style.css"
import { ItemListContainer }  from "./componentes/ItemListContainer";
import { Header } from "./componentes/header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./componentes/NotFound";
import { Inicio } from "./componentes/Inicio";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { Carrito } from "./componentes/Carrito";
import { CartProvider } from "./context/CartContext";
import { Nosotros } from "./componentes/Nosotros";
import { Contacto } from "./componentes/Contacto";

function App() {


  return (
    <CartProvider >
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element= {<Inicio />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route path= "/inicio" element={<Inicio/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/*" element= {<NotFound />} />
            <Route path="/carrito" element= {<Carrito />} />
            <Route path="/nosotros" element= {<Nosotros />} />
            <Route path="/contacto" element= {<Contacto />} />


          </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
