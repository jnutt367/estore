import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const Hero = () => {
  return (
    <div className="h-96 rounded-md overflow-hidden bg-cover bg-center relative">
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="bg-gray-900 bg-opacity-60 flex items-center h-full absolute w-full z-10">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-white font-semibold">Tech Shoppe by: JNutt</h2>
          <p className="mt-2 text-indigo-400">
           Find our favorite Technology's Gear! I built this with React, Next.js, Tailwind.css and MongoDB Realm. Follow this series: <a className="text-white" href="https://estore-m1vv7yqk9-jnutt367.vercel.app/">Jumpstart 2021 Series</a> Jesse Hall and MongoDB University!
          </p>
          <Link href={`/products`}>
            <button className="flex items-center mt-4 px-3 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
              <span>Browse & See</span>
              <ArrowNarrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;