import { Link } from "react-router-dom"

function Items({prod}) {
    return (
        <Link to={`detalle/${prod.id}`}>
            <div 
            
                className='col-md-4'
            >                        
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name} - ${prod.categoria}`}
                    </div>
                    <div className="card-body">
                        {prod.price}                                                            
                    </div>
                    <div className="card-footer">  
                        
                        <button className="btn btn-outline-primary btn-block">
                                    Termo para sublimación
                        </button>
                                                                
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Items
