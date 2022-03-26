import { Link } from 'react-router-dom'
import { useState,useEffect} from 'react';

const ItemCount = ({product,initial,addItem,setCantAdd})=>{
    let stock = product.stock
    const [itemcount,setItemcount] = useState(initial)
    const [disabled,setDisabled] = useState("active")

    useEffect(() => {
        if (initial>stock) {
            setDisabled("disabled");
        }
      },[initial,stock]);
    const Remove = ()=>{
        if (itemcount>1) {
            setItemcount(itemcount-1)
        }
    }
    const Add = ()=>{
        if (stock>itemcount) {
            setItemcount(itemcount+1)
        }
    }

    return(
        stock===0?
        <div>
            <p>Producto sin stock</p>
            <Link to={"/"}>Volver al inicio</Link>
        </div>
        :
        <div>
            <div>
                <button onClick={Remove}>Remover</button>
                <h4>{itemcount}</h4>
                <button onClick={Add}>Agregar</button>               
            </div>
            <button onClick={()=>{addItem(product,itemcount); setCantAdd()}}>Finalizar compra</button>            
        </div>
    )
} 
export default ItemCount