import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getFetch } from "./gFetch"


function ItemDetailContainer() {
    const [producto, setProducto] = useState({}) 
    const {detalleId} = useParams()

    useEffect(()=>{

        getFetch

        .then(prod => setProducto(prod.find(item => item.id === detalleId )))

        .catch(err => console.log(err))

    }, [])
    
    return (
        <div>
            <ItemDetail producto={producto} />      
        </div>
    )
}

export default ItemDetailContainer
