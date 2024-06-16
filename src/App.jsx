import "./css/style.css"
import { ItemListContainer }  from "./componentes/ItemListContainer";
import { Header } from "./componentes/header/Header"
import { Carrito } from "./componentes/header/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./componentes/NotFound";
import { Inicio } from "./componentes/Inicio";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { ItemDetail } from "./componentes/ItemDetail";

function App() {



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element= {<Inicio />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route path= "/inicio" element={<Inicio/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/*" element= {<NotFound />} />
      </Routes>
      <Carrito />
    </BrowserRouter>
  )
}

export default App
