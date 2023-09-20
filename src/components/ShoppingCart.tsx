import { Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../context/shoppingCartContext"

export function ShoppingCart(){
    
    const {closeCart} = useShoppingCart();


return  <Offcanvas show={true} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        </Offcanvas>

    

}