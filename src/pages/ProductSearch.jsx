import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";
export const ProductSearch = () => {
  const [url, setUrl] = useState("http://localhost:8000/products");
  const [searchParams] = useSearchParams();
  const squery = searchParams.get("q")||"";
  console.log(squery);
  const { data:products}=useFetch(`${url}?name_like=${squery}`);
  console.log(products);
  return (
    <main className="dark:bg-gray-700">
      <div className="flex justify-center flex-wrap">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
};
