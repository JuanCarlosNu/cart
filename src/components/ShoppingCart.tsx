import { Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../context/shoppingCartContext"

export function ShoppingCart(){
    

return  <Offcanvas show={true}  placement="end">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        </Offcanvas>

    

}