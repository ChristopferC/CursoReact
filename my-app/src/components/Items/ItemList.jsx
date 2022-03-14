
import Item from "./Items";

const products = [
    {id: 1, nombre: "taza"},
    {id: 1, nombre: "vaso"},
    {id: 1, nombre: "termo"},
    {id: 1, nombre: "mate"}]

const Task = new Promise((resolve, reject)=>{
        //acciones 
        let condition = true
        if (condition) {
            setTimeout(() => {
                resolve(products)                    
            }, 2000);
        } else {
            reject('404 - not found')        
        }
    })
    
export default Task