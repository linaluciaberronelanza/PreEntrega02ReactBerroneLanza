import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBarra.css';

const NavBarra = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fw-bold text-uppercase fs-5">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo en blanco y negro de la marca"
                        src="/logo.png"
                        width="auto"
                        height="80"
                        className="d-inline-block align-top"
                    />{' '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='navBarraLink navBarraItem'>Home</Nav.Link>
                        <Nav.Link href="#link" className='navBarraItem'>2D</Nav.Link>
                        <Nav.Link href="#link" className='navBarraItem'>3D</Nav.Link>
                        <Nav.Link href="#link" className='navBarraItem'>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavBarra