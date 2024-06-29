import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/data"

export const ItemListContainer = () => {

    let {categoriaId} = useParams();

    let [productos, setProductos] = useState([]);

        useEffect(() => {

            const productosRef = collection(db, "productos");
            const productosFiltrados = query(productosRef, where("categoria.id", "==", categoriaId));

            getDocs(productosFiltrados)
            .then((res) => {

                setProductos(
                    res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id}
                    })
                )
            })

        }, [categoriaId]);




    return (
        <div className="item-list-container">
        <ItemList productos={productos} />
        </div>
    )
}
