import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [subnav, setSubnav] = useState("");
  const [mobileOpen, setMobileOpen] = useState({});
  const closeTimeout = useRef(null);

  // ===== Desktop hover handlers =====
  const handleSubnavEnter = () => {
    clearTimeout(closeTimeout.current);
    setSubnav("about");
  };

  const handleSubnavLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setSubnav("");
    }, 150);
  };

  // ===== Close subnav when clicking other menu buttons =====
  const handleMenuClick = () => setSubnav("");

  return (
    <header className="w-full bg-white shadow-sm relative z-50">

      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/img/siddha.png"
            alt="Siddha Foundation"
            className="h-14 object-contain"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-green-800">
              Siddha Foundation
            </h1>
            <p className="text-xs md:text-sm text-gray-500">Herbal Excellence</p>
          </div>
        </div>

        {/* SEARCH + HAMBURGER */}
        <div className="flex items-center gap-3">
          {/* Desktop search */}
          <div className="hidden md:flex items-center bg-gray-50 border rounded-lg overflow-hidden">
            <input
              className="px-3 py-2 text-sm outline-none bg-transparent"
              placeholder="Search..."
            />
          </div>

          {/* Mobile search */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            🔍
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE SEARCH ================= */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3">
          <input
            className="w-full px-3 py-2 border rounded"
            placeholder="Search..."
          />
        </div>
      )}

      {/* ================= MAIN NAV ================= */}
      <nav className="bg-green-700 relative">
        <div className="max-w-7xl mx-auto px-4">

          {/* ===== Desktop Menu ===== */}
          <ul className="hidden md:flex text-[18px] items-center gap-4 py-3 text-white font-semibold">
            <li className="px-3 py-1 hover:bg-green-800 rounded">
              <Link to="/" onClick={handleMenuClick}>Home</Link>
            </li>

            <li className="px-3 py-1 hover:bg-green-800 rounded">
              <Link to="/products" onClick={handleMenuClick}>Products</Link>
            </li>

            {/* ABOUT (HOVER + CLICK) */}
            <li
              className="px-3 py-1 hover:bg-green-800 rounded relative"
              onMouseEnter={handleSubnavEnter}
              onMouseLeave={handleSubnavLeave}
            >
              <button
                className="flex items-center gap-2"
                onClick={() => setSubnav(prev => (prev === "about" ? "" : "about"))}
              >
                About Us ▾
              </button>
            </li>

            <li className="px-3 py-1 hover:bg-green-800 rounded">
              <Link to="/blog" onClick={handleMenuClick}>Blogs</Link>
            </li>

            <li className="px-3 py-1 hover:bg-green-800 rounded">
              <Link to="/contact" onClick={handleMenuClick}>Contact</Link>
            </li>
          </ul>

          {/* ===== Mobile Menu ===== */}
          {isMenuOpen && (
            <ul className="md:hidden text-white text-sm py-2">

              <li className="px-4 py-3 border-t border-green-600">
                <Link to="/" onClick={() => { setIsMenuOpen(false); setSubnav(""); }}>Home</Link>
              </li>

              <li className="px-4 py-3 border-t border-green-600">
                <Link to="/products" onClick={() => { setIsMenuOpen(false); setSubnav(""); }}>Products</Link>
              </li>

              {/* ABOUT MOBILE ACCORDION */}
              <li className="px-4 py-3 border-t border-green-600">
                <button
                  className="w-full flex items-center justify-between font-semibold"
                  onClick={() => setMobileOpen(prev => ({ ...prev, about: !prev.about }))}
                >
                  About Us ▾
                </button>

                {mobileOpen.about && (
                  <ul className="mt-3 pl-4 space-y-2 text-sm text-green-100">
                    {[
                      ["Who We Are", "/about"],
                      ["Company Information", "/about/company"],
                      ["MD Message", "/about/md"],
                      ["Board of Directors", "/board-of-directors"],
                      ["Patron & Adviser", "/patron_adviser"],
                      ["Marketing", "/departments/marketing"],
                      ["Production", "/departments/production"],
                      ["Finance", "/departments/finance"],
                    ].map(([label, link]) => (
                      <li key={label}>
                        <Link
                          to={link}
                          onClick={() => { setIsMenuOpen(false); setSubnav(""); }}
                          className="block py-1"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="px-4 py-3 border-t border-green-600">
                <Link to="/blog" onClick={() => { setIsMenuOpen(false); setSubnav(""); }}>Blogs</Link>
              </li>

              <li className="px-4 py-3 border-t border-green-600">
                <Link to="/contact" onClick={() => { setIsMenuOpen(false); setSubnav(""); }}>Contact</Link>
              </li>

            </ul>
          )}
        </div>
      </nav>

      {/* ================= SUBNAV (MEGA MENU) ================= */}
      {subnav === "about" && (
        <div
          className="hidden md:block absolute left-0 top-full w-full
                     bg-green-50/95 backdrop-blur-md
                     border-t border-green-200 shadow-xl z-40"
          onMouseEnter={handleSubnavEnter}
          onMouseLeave={handleSubnavLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-3 gap-10">

            {/* ABOUT */}
            <div className="border-r border-green-200 pr-8">
              <h3 className="text-sm md:text-base font-bold text-green-900 mb-4 uppercase tracking-wider font-serif">
                About Siddha
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-800 font-medium">
                {[
                  ["Who We Are", "/about"],
                  ["Company Information", "/about/company"],
                  ["MD Message", "/about/md"],
                  ["Board of Directors", "/board-of-directors"],
                  ["Patron & Adviser", "/patron_adviser"],
                ].map(([label, link]) => (
                  <li key={label}>
                    <Link
                      to={link}
                      onClick={() => setSubnav("")}
                      className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition-all duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* DEPARTMENTS */}
            <div className="border-r border-green-200 pr-8">
              <h3 className="text-sm md:text-base font-bold text-green-900 mb-4 uppercase tracking-wider font-serif">
                Departments
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-800 font-medium">
                {[
                  ["Marketing", "/departments/marketing"],
                  ["Production", "/departments/production"],
                  ["Finance", "/departments/finance"],
                ].map(([label, link]) => (
                  <li key={label}>
                    <Link
                      to={link}
                      onClick={() => setSubnav("")}
                      className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition-all duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div
              className="relative p-6 rounded-xl border border-green-200 shadow-inner"
              style={{
                backgroundImage: "url('/src/assets/img/contact-image.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-white/70"></div>
              <div className="relative z-10">
                <h3 className="text-green-900 font-bold mb-3 text-base md:text-lg font-serif">
                  Herbal Excellence
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                  Dedicated to wellness, health, and sustainable natural solutions.
                </p>
                <Link
                  to="/contact"
                  onClick={() => setSubnav("")}
                  className="inline-block bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 font-semibold transition"
                >
                  Get In Touch →
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
