'use client'
import React from "react";


export default function CardBox({ product }) {
    const handleClick = () => {
        alert('your purchase has been completed')
        window.location = '/shop'
    }
  return (
    <div className="flex justify-center p-12">
        <div className="border border-solid-2 border-black rounded-xl shadow-md h-[40rem] w-[70rem]">
            <div className="ml-12">
            <p className="flex justify-center pt-8 text-3xl font-bold">{product.title}</p>
            <div className="flex ">
                <img src={product.image} alt={product.title} className="h-80 w-80 mt-12 ml-12 rounded-3xl" />
                <div className="flex justify-center items-start content-start ml-12 mt-32">
                <ul className="flex flex-col text-3xl font-extrabold ml-10">
                    <li>Price: <span className="text-2xl font-bold ml-24">{product.price}$</span></li>
                    <li>Rating: <span className="text-2xl font-bold ml-24">{product.rating.rate}</span></li>
                    <li>Viewed: <span className="text-2xl font-bold ml-20">{product.rating.count}</span></li>
                    <li>Category: <span className="text-2xl font-bold ml-18">{product.category}</span></li>
            <button onClick={handleClick} className="shadow-md bg-red-500 mt-8 border border-solid-2 rounded-xl">Cart</button>
                </ul>
                </div>
            </div>
            <div className="flex justify-center items-center ">
                <p className="font-bold mt-8 w-[65rem]">Description: <span className=" font-normal">{product.description}</span></p>
            </div>
            </div>
        </div>
    </div>
  );
}
