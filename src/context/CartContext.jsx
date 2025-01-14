import { createContext, useState, useContext, useEffect } from "react";

const cartContext= createContext(null);

export const CartContext=({children})=>{
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem("cartArr"))||[]);
    useEffect(()=>{
        localStorage.setItem("cartArr",JSON.stringify(cart));
    },[cart]);
    return(
        <cartContext.Provider value={{ cart, setCart }}>
            {children}
        </cartContext.Provider>
    )
}
export const useCart=()=>{
    return useContext(cartContext);
}

// import { createContext, useState, useContext, useEffect } from "react";

// const cartContext = createContext(null);

// export const CartContext = ({ children }) => {
//   const initialCart = () => {
//     try {
//       const storedCart = JSON.parse(localStorage.getItem("cartArr"));
//       return Array.isArray(storedCart) ? storedCart : [];
//     } catch (error) {
//       console.error("Error parsing localStorage data:", error);
//       return [];
//     }
//   };

//   const [cart, setCart] = useState(initialCart());

//   useEffect(() => {
//     try {
//       localStorage.setItem("cartArr", JSON.stringify(cart));
//     } catch (error) {
//       console.error("Error saving to localStorage:", error);
//     }
//   }, [cart]);

//   return (
//     <cartContext.Provider value={{ cart, setCart }}>
//       {children}
//     </cartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(cartContext);
// };
