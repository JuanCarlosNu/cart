import { ReactNode, createContext, useContext } from "react";

const ShoppingCartContext = createContext({});

export function useShopingCart(){
    return useContext(ShoppingCartContext)
}
type ShoppingCartProviderProps = {
    children: ReactNode  /// is the type given to every react childre property
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    return(
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )

}