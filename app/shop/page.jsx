import { use } from "react";
import ProductCard from "../../components/ProductCard";

export default function page() {
  const products = use(getProducts());

  return (
    <div className="grid grid-cols-2">
        {products?.map((p) => {
          return (
            <ProductCard product = {p}/>
          );
        })}
    </div>
  );
}

async function getProducts() {
  return await (
    await fetch("https://fakestoreapi.com/products")
  ).json();
}
