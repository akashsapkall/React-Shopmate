import { useState } from "react"
import { useFetch } from "../hooks/useFetch";

import { ProductCard } from "../components/ProductCard";
import { useTitle } from "../hooks/useTitle";

export const ProductList=()=>{
    const [url,setUrl]=useState("http://localhost:8000/products");
    const { data:products }=useFetch(url);
    useTitle("Home");
    return (
        <main className="dark:bg-gray-700">
            <div className="flex justify-center flex-wrap">
                {products && products.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    )
}