import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  data from "../data/data.json";
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
                    if (!categoriaId){
                        setProductos (res);
                    } else {
                        setProductos(res.filter((prod) => prod.categoria.id === categoriaId));
                    }
                })
        }, [categoriaId]);




    return (
        <div className="item-list-container">
        <ItemList productos={productos} />
        </div>
    )
}
