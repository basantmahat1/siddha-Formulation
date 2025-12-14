import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full font-sans shadow-sm bg-white">
      {/* ----- TOP SECTION ----- */}
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src="/src/assets/img/siddha.png"
            alt="Siddha Foundation"
            className="h-14 md:h-16 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-xl md:text-2xl font-bold text-green-800">
              Siddha Foundation
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              Herbal Excellence
            </p>
          </div>
        </div>

      
        {/* SEARCH + MENU */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* SEARCH (Desktop) */}
          <div className="hidden md:flex items-center w-60 bg-gray-50 border rounded-lg overflow-hidden">
            <input
              className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
              placeholder="Search..."
            />
            <button className="px-3">
              <svg className="w-5 h-5 text-gray-500" fill="none">
                <circle cx="11" cy="11" r="6" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>

          {/* SEARCH (Mobile) */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none">
              <circle cx="11" cy="11" r="6" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              strokeWidth="1.5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* ----- MOBILE SEARCH ----- */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 border-t">
          <div className="flex items-center bg-gray-50 border rounded-lg overflow-hidden">
            <input
              className="flex-1 px-3 py-2 text-sm outline-none"
              placeholder="Search..."
            />
            <button className="px-3">
              <svg className="w-5 h-5 text-gray-500" fill="none">
                <circle cx="11" cy="11" r="6" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ----- MENU NAV ----- */}
      <nav className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4">

          {/* Desktop */}
          <ul className="hidden md:flex gap-3 text-[15px] md:text-[16px] font-semibold text-white py-3">
            <li className="px-3 py-1 rounded hover:bg-green-800">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3 py-1 rounded hover:bg-green-800">
              <Link to="/products">Products</Link>
            </li>
            <li className="px-3 py-1 rounded hover:bg-green-800">
              <Link to="/blog">Blogs</Link>

            </li>
            
            <li className="px-3 py-1 rounded hover:bg-green-800">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-3 py-1 rounded hover:bg-green-800">
              <Link to="/about">About Us</Link>
            </li>

          
          </ul>

          {/* Mobile */}
          {isMenuOpen && (
            <ul className="md:hidden text-white text-sm flex flex-col py-2">
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["Brands", "#"],
                ["Blogs", "#"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
                ["Offers", "#"],
              ].map(([label, link]) => (
                <li
                  key={label}
                  className="px-4 py-3 border-t border-green-600 hover:bg-green-800"
                >
                  <Link to={link} onClick={() => setIsMenuOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
