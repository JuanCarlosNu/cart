import { useShoppingCart } from "../context/shoppingCartContext";


type CartItemProps = {

    id: number
    quantity: number
}

export function CartItem ({ id ,quantity }) {

const { removeFromCart } = useShoppingCart();

const item = storeItems


}