import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from "../data/items.json";


type CartItemProps = {

    id: number
    quantity: number
}

export function CartItem ({ id ,quantity }) {

const { removeFromCart } = useShoppingCart();




}