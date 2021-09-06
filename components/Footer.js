import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-black hover:text-indigo-900 cursor-pointer">
          <Link href="/">E-Store Home Page</Link>
        </div>
        <p className="py-2 text-black sm:py-0">Built by:</p>
        <p className="py-2 text-black sm:py-0">Jason Nutt 2021</p>
      </div>
      </footer>
  );
};

export default Footer;
