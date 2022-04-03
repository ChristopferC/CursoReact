import ItemCount from "../Items/ItemCount"
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({product})=>{
    const [itemCount,setItemCount] = useState (1)
    const [cantAdd,setCantAdd] = useState (false)
    const [compra,setCompra] = useState (0)
    const { addItem } = useContext(CartContextProvider)

    const onAdd= () => {
        console.log(product)
        compra(true)
    }


    return (
        <div >
            <center>
                <p className='alert alert-primary w-25'>{product.name}</p>
                <p className='alert alert-primary w-25'>{product.price}</p>
                <p className='alert alert-primary w-25'>{product.categoria}</p>
            </center>
            {
                <ItemCount product={product} inicial={1}  addItem={addItem} stock={5} setCantAdd={setCantAdd} itemCount={itemCount} setItemCount={setItemCount} onAdd={onAdd} compra={compra}/>
            }
        </div>
    )
}
export default ItemDetail



