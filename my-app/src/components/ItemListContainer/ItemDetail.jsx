function ItemDetail({producto}) {
    return (
        <div >
            <center>
                <p className='alert alert-primary w-25'>{producto.name}</p>
                <p className='alert alert-primary w-25'>{producto.price}</p>
                <p className='alert alert-primary w-25'>{producto.categoria}</p>
            </center>
        </div>
    )
}
export default ItemDetail
