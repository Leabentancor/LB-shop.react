import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/categorias.json";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {

    let {categoriaId} = useParams();

    let [productos, setProductos] = useState([]);

    
        const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(data);
            }, 1000);
        })
    };

        useEffect(() => {

            pedirProductos() 
                .then ((res) => {
                    console.log("Productos recibidos:", res);
                    if (categoriaId){
                        setProductos(res.filter((prod) => prod.categoria.id === categoriaId))
                    } else {
                        setProductos (res);
                    }
                })
        }, []);




    return (
        <div className="item-list-container">
        <ItemList productos={productos} />
        </div>
    )
}
