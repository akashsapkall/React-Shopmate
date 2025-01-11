import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch";

import { ProductCard } from "../components/ProductCard";
export const ProductList=()=>{
    const [url,setUrl]=useState("http://localhost:8000/products");
    const { data:products }=useFetch(url);
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