import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getFetch } from "./gFetch"


function ItemDetailContainer() {
    const [producto, setProducto] = useState({}) 
    
    useEffect(()=>{
        getFetch
        .then(prod => setProducto(prod))
        .catch(err => console.log(err))

    }, [])
    
    return (
        <div>
            <ItemDetail producto={producto} />      
        </div>
    )
}

export default ItemDetailContainer
