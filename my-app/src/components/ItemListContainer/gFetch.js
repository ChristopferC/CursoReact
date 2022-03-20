const productos = [
    { id: '1', categoria: 'termos', name: "termo autocebante", price: 380 },
    { id: '2', categoria: 'tazas', name: "taza mágica", price: 350 },
    { id: '3', categoria: 'mates', name: "mate para sublimar", price: 290 },
]

export const getFetch = new Promise((resolve, reject)=>{
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)                    
        }, 12000);
    } else {
        reject('400 - not found')        
    }
})



