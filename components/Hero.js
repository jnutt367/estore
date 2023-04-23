import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const Hero = () => {
  return (
    <div className="h-96 rounded-md overflow-hidden bg-cover bg-center relative">
      <Image
        src="/images/Praying.png"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="bg-gray-900 bg-opacity-50 flex items-center h-full absolute w-full z-10">
        <div className="px-10 max-w-xl">
          <h2 className="font-serif text-2xl text-white font-semibold">The WORD of GOD: "Risen"</h2>
          <p className="mt-2 text-white">
           Find <i className="font-serif text-indigo-200">Landing page for OUR</i> Bible App!! Data Synched with Realm sync.
          </p>
          <Link href={`/products`}>
            <button className="font-serif flex items-center mt-4 px-3 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
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
