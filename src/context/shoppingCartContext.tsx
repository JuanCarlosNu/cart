import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
type ShoppingCartProviderProps = {
    children: ReactNode  /// is the type given to every react childre property
}

type shoppingcartContext = {
    openCart: ()=> void;
    closeCart: ()=> void;
    getItemQuantity: (id: number)=> number;
    increaseCartQuantity: (id: number)=> void;
    decreaseCartQuantity: (id: number)=> void;
    removeFromCart: (id: number)=> void;
    cartQuantity: number;
    cartItems: CartItem[];


} 
type CartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as shoppingcartContext);


export function useShoppingCart(){
    return useContext(ShoppingCartContext)  
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){

    const [ isOpen, setIsOpen] = useState(false);
    

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

        const cartQuantity = cartItems.reduce((quantity, item)=>               /// counts every item.
        item.quantity + quantity, 0)

    
    const openCart = ()=> setIsOpen(true);
    const closeCart = ()=> setIsOpen(false);


    function getItemQuantity(id:number){
        return cartItems.find(item => item.id === id)?.quantity || 0;
    };
    function increaseCartQuantity(id:number){
        setCartItems(currItems => {
            if(currItems.find(item=> item.id === id)==null){ 
                return [...currItems,{id:id , quantity: 1}]  /// if it doesnt exists add one to the array
            }else{
                return currItems.map(item=>{                 /// if it exist allready, look for it and chanche Qtty
                    if(item.id=== id) {
                        return {...item, quantity: item.quantity + 1}
                    } else{                                 /// the rest of the item leave them as the are    
                        return item
                    }
                })
            }

        })
        
    };
    function decreaseCartQuantity(id:number){
        setCartItems(currItems => {
            if(currItems.find(item=> item.id === id)?.quantity=== 1){  //if our id item has quantity equal to one,
                return currItems.filter (item=> item.id != id)      ///it disapears, so filter all the rest of them.
            }else{
                return currItems.map(item=>{                
                    if(item.id=== id) {
                        return {...item, quantity: item.quantity - 1}  /// if exist an is greater than one, decrease Q.
                    } else{                                
                        return item
                    }
                })
            }

        })
        
    };
    function removeFromCart(id: number){
        setCartItems(currItems=>{
            return currItems.filter(item=> item.id == id)
        })
    };

    return(
<ShoppingCartContext.Provider               
        value={{
            getItemQuantity,   
            increaseCartQuantity, 
            decreaseCartQuantity,
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity,
              }}
              >


            {children}
            <ShoppingCart />
        </ShoppingCartContext.Provider>
    )

}