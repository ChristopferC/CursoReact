import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../Items/ItemCount";
import ItemList from "../Items/ItemList";
import { getFetch } from "./gFetch";


function ItemListContainer({ saludo }) {
    const [ loading, setLoading ] = useState(true)
    const [prods, setProds ] = useState([])
    const { id } = useParams()
    

    useEffect(()=> {
        if (id) {
            getFetch       
            .then(resp => setProds(resp.filter(prod=> prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))           
        } else {
            getFetch       
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }
    }, [id])

    const onAdd = (cant) => {
        console.log(cant)
    }


    console.log(id)
    return (
            <>
                <div><h1>{saludo}</h1></div> 
                {       loading ? <h3>Cargando...</h3> 
                    :
                        <ItemList prods={prods} />
                }
                <ItemCount min={1} stock={10} onAdd= { onAdd } />
            </>
    )
}

export default ItemListContainer
