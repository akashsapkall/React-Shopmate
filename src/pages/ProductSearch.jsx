import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";

export const ProductSearch = () => {
  const [url] = useState("http://localhost:8000/products");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const squery = searchParams.get("q") || "";
  const { data: products } = useFetch(url);

  useEffect(() => {
    function sort() {
      if (products) {
        const filteredArray = products.filter((product) =>
          product.name.toLowerCase().includes(squery.toLowerCase())
        );
        setFilteredProducts(filteredArray);
      }
    }
    sort();
  }, [products, squery]);

  console.log(filteredProducts);

  return (
    <main className="dark:bg-gray-700">
      <div className="flex justify-center flex-wrap">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
};
