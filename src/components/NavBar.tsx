import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";

export function NavBar(){

  const {openCart, cartQuantity} = useShoppingCart();
  
    return (
    
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3"> 
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
        {cartQuantity> 0 && (
        <Button 
        onClick={openCart}
        style={{width: "3rem", height: "3rem", position: "relative"}}
        variant="outline-primary"
        className="rounded-circle">
            
         <svg 
         fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" 
         enableBackground="new 0 0 512 512">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier"
          strokeLinecap="round" 
          strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
            <g> 
              <g> 
            <path d="m464.5,301.1l36.5-178h-359.7l-12.5-59.2-108.4-52.9-9.4,18.7 99,47.8 50,238.8h289c0,0 28.5,17.9 17.5,40.5-4.9,7-12.5,15.6-26.1,15.6h-287.6v20.6h287.7c19.8,0 36.5-10.4 45.9-27 18.4-34.4-21.9-64.9-21.9-64.9zm-286.7-5.7l-32.3-151.6h330.5l-31.3,151.6h-266.9z"></path> <path d="m212.2,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.4 39.6,39.4 39.6-17.6 39.6-39.4-17.7-39.4-39.6-39.4zm0,58.1c-10.4,0-18.8-8.3-18.8-18.7s8.3-18.7 18.8-18.7 18.8,8.3 18.8,18.7-8.4,18.7-18.8,18.7z"></path> <path d="m424.9,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.5 39.6,39.5 40.7-17.6 39.6-39.4c0-21.8-17.7-39.5-39.6-39.5zm18.8,39.5c0,10.4-8.3,18.7-18.8,18.7s-18.8-8.3-18.8-18.7 8.3-18.7 18.8-18.7 19.8,8.3 18.8,18.7z"></path> 
              </g>
            </g>
          </g>
            </svg>
           
         <div className="
           rounded-circle 
             bg-danger 
             d-flex
             justify-content-center
             align-items-center" 

         style={{
            color:"white", 
            width:"1.5rem", 
            height:"1.5rem",
            position:"absolute",
            bottom: 0 ,
            right: 0,
            transform: "translate(25%, 25%)",
              }}>
                {cartQuantity}
              </div>
              
         </Button>
         )}

           </Container>
            </NavbarBs>
            )
};

 
