import { createContext, useState, useContext } from "react";

const cartContext= createContext(null);

export const CartContext=({children})=>{
    const [cart,setCart]=useState([]);
    const [cartCount,setCartCount]=useState(0);

    return(
        <cartContext.Provider value={{ cart, setCart, cartCount, setCartCount }}>
            {children}
        </cartContext.Provider>
    )
}
export const useCart=()=>{
    return useContext(cartContext);
}