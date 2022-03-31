import { Link } from 'react-router-dom'
import { useState,useEffect} from 'react';

const ItemCount = ({product,inicial,setCantAdd,itemcount,setItemcount,stock,onAdd,compra})=>{
    
    
    const [disabled,setDisabled] = useState("active")

    useEffect(() => {
        if (inicial>stock) {
            setDisabled("disabled");
        }
      },[inicial,stock]);
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
          {!compra &&
            <div>
                <button onClick={Remove}>Restar</button>
                <h4>{itemcount}</h4>
                <button onClick={Add}>Sumar</button>  
                <button onClick={Add}>Agregar al carrito</button>              
            </div>}
            {compra && (
            <><button>Continuar comprando</button> 
            <button>Finalizar compra</button> </>)} 
        </div>
    )
} 
export default ItemCount