//Suarabh adam
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const [prodAdded, setProdAdded] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  useEffect(() => {
    const isAdded = cart.find((curProd) => curProd.id === product.id);
    if (isAdded) {
      setProdAdded(true);
    } else {
      setProdAdded(false);
    }
  }, [cart]);
  // console.log(cartContext.cart);
  // useEffect(() => {
  //   localStorage.setItem(`prodAdded${product.id}`, JSON.stringify(prodAdded));
  // }, [prodAdded]);

  return (
    <>
      <div className="w-80 m-4 p-2 text-gray-700 bg-white border rounded border-slate-700 flex-col justify-center">
        <div className="w-72 h-48 my-5 mx-auto">
          <img
            src={product.image}
            alt="product img"
            className="w-72 h-48 rounded"
          />
        </div>
        <span className="mx-4 font-semibold">{product.name}</span>
        <div className="mx-4 py-1 flex justify-between items-center">
          <span className="text-xl font-semibold">${product.price}</span>
          {prodAdded ? (
            <button
              className="px-2 py-1 rounded bg-red-700 text-white hover:bg-red-900"
              onClick={()=>removeFromCart(product)}
            >
              Remove
            </button>
          ) : (
            <button
              className="px-2 py-1 rounded bg-blue-700 text-white hover:bg-blue-900"
              onClick={()=>addToCart(product)}
            >
              Add To Cart
            </button>
          )}
        </div>
        <span
          className={`mx-4 ${
            product.in_stock ? "text-green-700" : "text-red-700"
          }`}
        >
          {product.in_stock ? "Available" : "Not Availabel"}
        </span>
      </div>
    </>
  );
};
