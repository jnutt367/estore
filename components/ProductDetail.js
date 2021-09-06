import React from "react";
import Image from "next/image";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

const ProductDetail = ({ product }) => {
  return (
    <div className="md:flex md:items-center">
      <div className="w-full h-64 md:w-1/2 lg:h-96 relative">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="absolute z-0 rounded"
        />
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        <h3 className="text-white uppercase text-lg">{product.name}</h3>
        <span className="text-white mt-3">${product.price}</span>
        <hr className="my-3" />
        <div className="mt-2">
          <label className="text-white text-sm" htmlFor="count">
            Count:
          </label>
          <div className="flex items-center mt-1">
            <button className="text-white focus:outline-none focus:text-indigo-600">
              <PlusCircleIcon className="w-5 h-5" />
            </button>
            <span className="text-white text-lg mx-2">1</span>
            <button className="text-white focus:outline-none focus:text-indigo-600">
              <MinusCircleIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;