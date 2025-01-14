import { createContext, useState, useContext, useEffect } from "react";

const cartContext = createContext(null);

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartArr")) || []);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((prod) => prod.id !== product.id));
  };

  useEffect(() => {
    // Update localStorage whenever cart changes
    localStorage.setItem("cartArr", JSON.stringify(cart));

    // Recalculate total whenever cart changes
    const newTotal = cart.reduce((acc, curProduct) => acc + curProduct.price, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, total }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(cartContext);
};
