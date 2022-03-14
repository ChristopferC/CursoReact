import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemCount from "../Items/ItemCount"
import Task from "../Items/ItemList";


function ItemListContainer({ saludo }) {

    Task
    .then((resp)=>{
        console.log(resp)
    })

    .catch(reject => console.log(reject))

    const onAdd = (cant) => {
        console.log(cant)
    }

    return (
            <>
                <div>{saludo}</div> 
                <ItemCount min={1} stock={10} onAdd= { onAdd }/>
            </>
    )
}

export default ItemListContainer