import Logo from './logo.png'
import CartWidget from './CartWidget/CartWidget'
import CategoryList from './CategoryList'
import { Link } from 'react-router-dom'

const NavBar = ()=>{

    return(
		<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
					<Link className="navbar-brand" to="/"><img src={Logo} alt="" width="150px" /></Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link className="nav-link " to="/#">NOSOTROS</Link>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									PRODUCTOS
								</Link>
								{listCategory!==[]?<CategoryList categorys={listCategory} />: <div></div> }
							</li>
							<Link className="nav-link " to="/#">CONTACTO</Link>
							{cantItems!==0?<CartWidget numCompra={cantItems} key={Math.random().toString(36).substr(2, 9)}/>: <div></div> }
						</div>
					</div>
				</div>
		</nav>
    )
} 
export default NavBar
