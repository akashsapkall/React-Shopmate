import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";
import { useTitle } from "../hooks/useTitle";

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

  useTitle(`Search Results For '${squery}'`);
  return (
    <main className="dark:bg-gray-700">
      <div className="w-4/5 py-4 mx-auto text-2xl text-gray-700 dark:text-white">
        <span className="">{(filteredProducts.length>0)?`Search Results For '${squery}'`:`No Search Results Found For '${squery}'`}</span>
      </div>
      <div className="flex justify-center flex-wrap">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
};
