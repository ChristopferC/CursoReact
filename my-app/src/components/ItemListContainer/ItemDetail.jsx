import ItemCount from "../Items/ItemCount"
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto})=>{
    const [cantAdd,setCantAdd] = useState (0)
    const { addItem } = useContext()

    return (
        <div >
            <center>
                <p className='alert alert-primary w-25'>{producto.name}</p>
                <p className='alert alert-primary w-25'>{producto.price}</p>
                <p className='alert alert-primary w-25'>{producto.categoria}</p>
            </center>
            {
                <ItemCount producto={producto} initial={1} addItem={addItem} setCantAdd = {setCantAdd}/>
            }
        </div>
    )
}
export default ItemDetail



