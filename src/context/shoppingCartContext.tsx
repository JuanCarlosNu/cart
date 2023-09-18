import { ReactNode, createContext, useContext } from "react";
type ShoppingCartProviderProps = {
    children: ReactNode  /// is the type given to every react childre property
}

type shoppingcartContext = {

    getItemQuantity: (id: number)=> number;
    increaseCartQuantity: (id: number)=> void;
    decreaseCartQuantity: (id: number)=> void;
    removeItemQuantity: (id: number)=> void;


} 


const ShoppingCartContext = createContext({} as shoppingcartContext);

export function useShopingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    return(
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )

}