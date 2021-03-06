import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ShoppingCartIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Cart from "./Cart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <>
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="font-serif w-full text-white text-2xl font-semibold cursor-pointer">
                TechNutt
              </div>
            </Link>
            <div className="flex items-center justify-end w-full">
              <button className="text-white focus:outline-none mx-4 sm:mx-0">
                <ShoppingCartIcon
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="h-5 w-5"
                />
              </button>

              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="text-white hover:text-indigo-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <MenuIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <nav
            className={`${
              isMenuOpen ? "" : "hidden"
            } sm:flex sm:justify-center sm:items-center mt-4`}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="mt-3 text-white hover:underline sm:mx-3 sm:mt-0">
                <Link href="/">Home</Link>
              </div>
              <div className="mt-3 text-white hover:underline sm:mx-3 sm:mt-0">
                <Link href="/products">Shop</Link>
              </div>
              <a
                className="mt-3 text-white hover:underline sm:mx-3 sm:mt-0"
                href="#"
              >
                Categories
              </a>
              <a
                className="mt-3 text-white hover:underline sm:mx-3 sm:mt-0"
                href="#"
              >
                Contact
              </a>
              <a
                className="mt-3 text-white hover:underline sm:mx-3 sm:mt-0"
                href="#"
              >
                About
              </a>
            </div>
          </nav>

          <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5" />
            </span>
            <form onSubmit={handleSubmit}>
            <input
              className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-indigo-500 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            </form>
          </div>
        </div>
      </header>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

export default Header;