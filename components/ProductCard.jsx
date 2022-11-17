import React from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="flex justify-center">
      <div className="border-solid-2 border flex justify-center flex-col items-center h-[30rem] w-[28rem] my-6 rounded-lg shadow-sm">
        <img src={product.image} className="h-80 w-80" alt={product.title} />
        <p className="mt-6">{product.title}</p>
        <button className="border-2-solid px-4 py-2 mt-4 border rounded-lg">
            <Link href={`/shop/${product.id}`}>
          View
            </Link>
        </button>
      </div>
    </div>
  );
}
