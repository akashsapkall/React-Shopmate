import { createContext, useContext, useReducer, useEffect } from "react";

// Initial state for the cart
const initialState = {
  cart: JSON.parse(localStorage.getItem("cartArr")) || [],
  total: 0,
};

// Reducer function to handle state updates
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCartAdd = [...state.cart, action.payload];
      return {
        ...state,
        cart: updatedCartAdd,
        total: updatedCartAdd.reduce((acc, item) => acc + item.price, 0),
      };

    case "REMOVE_FROM_CART":
      const updatedCartRemove = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCartRemove,
        total: updatedCartRemove.reduce((acc, item) => acc + item.price, 0),
      };

    case "CLEAR_CART":
      return { ...state, cart: [], total: 0 };

    default:
      return state;
  }
};

// Create the Cart Context
const cartContext = createContext();

// CartContext Provider Component
export const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartArr", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

// Custom hook for using the Cart Context
export const useCart = () => {
  return useContext(cartContext);
};
