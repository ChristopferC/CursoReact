import Container from 'react-bootstrap/Container'
import  Nav from "react-bootstrap/Nav"
import  Navbar from "react-bootstrap/Navbar"
import  NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from './CartWidget'

function NavBar() {

return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <a className="navbar-brand" href="#">Santisublime</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Novedades</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contacto
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Facebook</a></li>
                                    <li><a className="dropdown-item" href="#">Instagram</a></li>
                                    <li><a className="dropdown-item" href="#">Whatsapp</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Nav.Link eventKey={2} href="#">
                        <CartWidget/>
                    </Nav.Link>

            </Container>
        </Navbar>
        
    </>
    
  )
}

export default NavBar
