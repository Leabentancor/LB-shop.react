import React, { useEffect, useState } from 'react'
import  data from "../data/data.json";
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState();

    useEffect(()=> {
        setProducto(data.find((prod) => prod.id === itemId))
    },[itemId])

    return (
        <div> {producto ? <ItemDetail producto={producto} /> : "Cargando..."}</div>
    )
}
