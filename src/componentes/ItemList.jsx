import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos} ) => {
    return (
        <div className="productos-grilla">
            {
                productos.lenght > 0 ?
                productos.map(producto => {
                    return <Item key={producto.id} producto={producto} />
                })
                : "Cargando productos..."
            }
        </div>
    )
}
