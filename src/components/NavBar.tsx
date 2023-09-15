import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavBar(){
    return (
    
    <NavbarBs className="bg-white shadow-sm mb-3"> 
    <Container>
        <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
                Home
            </Nav.Link>
            <Nav.Link to="/About" as={NavLink}>
                About
            </Nav.Link>
            <Nav.Link to="/Store" as={NavLink}>
                Store
            </Nav.Link>
        </Nav>
        logo

           </Container>
            </NavbarBs>
            )
};

 
