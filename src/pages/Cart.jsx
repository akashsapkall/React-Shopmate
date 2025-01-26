import { useTitle } from "../hooks/useTitle"
import { remove} from '../store/cartSlice'
// import { useCart } from "../context/CartContext";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export const Cart=()=>{
    // const { cart, removeFromCart, total }=useCart();
    const dispatch=useDispatch();
    const cart=useSelector((state)=>state.cart.cartList);
    // const total=useSelector((state)=>state.cart.total);
    useTitle("Cart");
    let total=0;
    cart.map((product)=>{
        total+=product.price;
    });
    // const handleClick=(pid)=>{
    //     const arr=cartContext.cart.filter((prod)=>prod.id!==pid);
    //     cartContext.setCart(arr);
    // }
    return (
        <main className="dark:bg-gray-700">
            <div className="w-4/5 py-11 mx-auto">
                {cart && cart.map((product)=>(
                    <div key={product.id} className="w-full h-28 m-4 bg-white rounded border border-slate-400 flex justify-around items-center text-xl font-semibold">
                    <img src={product.image} alt="Product Img" className="w-40 h-24 rounded"/>
                    <span className="w-52">{product.name}</span>
                    <span className="w-16">${product.price}</span>
                    <button className="bg-red-700 hover:bg-red-900 text-white text-lg px-2 py-1 rounded"
                    onClick={()=>dispatch(remove(product))}
                    >Remove</button>
                </div>
                ))}
                <div className="w-full h-20 flex justify-end items-center">
                    <span className="text-2xl font-semibold text-gray-700 dark:text-white">Total Amount : ${total}</span>
                </div>
            </div>
        </main>
    )
}