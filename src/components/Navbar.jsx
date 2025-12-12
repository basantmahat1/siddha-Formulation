import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between md:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            <img src="/src/assets/img/siddha.png" alt="Siddha Foundation" className="h-16 md:h-20 object-contain" />
            <div className="hidden sm:block">
              <div className="text-base md:text-lg font-semibold text-green-800">Siddha Foundation</div>
              <div className="text-xs text-gray-500">Herbal Excellence</div>
            </div>
          </div>

          {/* Contact info - Hidden on mobile */}
          <div className="hidden md:flex flex-1 flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5h18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 3v2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-xs md:text-sm">
                <div className="text-gray-700 font-medium">Call Us</div>
                <div className="text-gray-500">044 4859 9296</div>
              </div>
            </div>
          </div>

          {/* Search & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search box - Responsive */}
            <div className="hidden md:flex items-center w-full max-w-md bg-gray-50 border rounded overflow-hidden">
              <input aria-label="Search" className="flex-1 px-3 py-2 text-sm bg-transparent outline-none" placeholder="Search" />
              <button className="px-3 py-2">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Search Icon - Mobile */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Hamburger Menu - Mobile */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden px-4 pb-3 border-t">
            <div className="flex items-center bg-gray-50 border rounded overflow-hidden">
              <input aria-label="Search" className="flex-1 px-3 py-2 text-sm bg-transparent outline-none" placeholder="Search products..." />
              <button className="px-3 py-2">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation bar */}
      <nav className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-2 text-sm text-white py-3 items-center">
            <li className="px-3 hover:bg-green-700 rounded transition"><Link to="/">Home</Link></li>
            <li className="px-3 hover:bg-green-700 rounded transition"><Link to="/products">Products</Link></li>
            <li className="px-3 hover:bg-green-700 rounded transition"><a href="#">Brands</a></li>
            <li className="px-3 hover:bg-green-700 rounded transition"><a href="#">Blogs</a></li>
            <li className="px-3 hover:bg-green-700 rounded transition"><Link to="/about">About Us</Link></li>
            <li className="px-3 hover:bg-green-700 rounded transition"><Link to="/contact">Contact</Link></li>
            <li className="ml-auto px-3"><a href="#" className="text-xs text-white/90 hover:text-white transition">Offers</a></li>
          </ul>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden flex flex-col gap-0 text-sm text-white py-2">
              <li className="px-4 py-3 hover:bg-green-700 transition"><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li className="px-4 py-3 hover:bg-green-700 transition"><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
              <li className="px-4 py-3 hover:bg-green-700 transition"><a href="#">Brands</a></li>
              <li className="px-4 py-3 hover:bg-green-700 transition"><a href="#">Blogs</a></li>
              <li className="px-4 py-3 hover:bg-green-700 transition"><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li className="px-4 py-3 hover:bg-green-700 transition"><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              <li className="px-4 py-3 hover:bg-green-700 transition"><a href="#">Offers</a></li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
