import "./css/style.css"
import { Inicio }  from "./componentes/Inicio";
import { Header } from "./componentes/header/Header"
import { Carrito } from "./componentes/header/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./componentes/NotFound";
import { ItemListContainer }  from "./componentes/ItemListContainer";


function App() {



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element= {<ItemListContainer />} />
        <Route path="/inicio" element= {<Inicio />} />
        <Route path= "/:categoriaId" element={<ItemListContainer/>} />
        <Route path="/*" element= {<NotFound />} />
      </Routes>
      <Carrito />
    </BrowserRouter>
  )
}

export default App
