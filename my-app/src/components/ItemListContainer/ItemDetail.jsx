import ItemCount from "../Items/ItemCount"
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto})=>{
    const [itemCount,setItemCount] = useState (1)
    const [cantAdd,setCantAdd] = useState (false)
    const [compra,setCompra] = useState (0)

    const onAdd= () => {
        console.log(producto)
        compra(true)
    }


    return (
        <div >
            <center>
                <p className='alert alert-primary w-25'>{producto.name}</p>
                <p className='alert alert-primary w-25'>{producto.price}</p>
                <p className='alert alert-primary w-25'>{producto.categoria}</p>
            </center>
            {
                <ItemCount inicial={1} stock={5} setCantAdd={setCantAdd} itemCount={itemCount} setItemCount={setItemCount} onAdd={onAdd} compra={compra}/>
            }
        </div>
    )
}
export default ItemDetail



