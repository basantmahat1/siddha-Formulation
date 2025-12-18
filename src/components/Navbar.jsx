import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subnav, setSubnav] = useState("");
  const [mobileOpen, setMobileOpen] = useState({});
  const closeTimeout = useRef(null);

  // ===== Desktop hover handlers =====
  const handleSubnavEnter = (menu) => {
    clearTimeout(closeTimeout.current);
    setSubnav(menu);
  };

  const handleSubnavLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setSubnav("");
    }, 150);
  };

  const handleMenuClick = () => setSubnav("");

  return (
    <header className="w-full bg-white shadow-sm relative z-50">

      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-1">
          <img
            src="/assets/img/siddha.png"
            alt="Siddha Formulation"
            className="h-20  object-contain"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-green-800">
              Siddha Formulation
            </h1>
            <p className="text-1xl  md:text-1xl text-gray-700">
              Herbal Excellence
            </p>
          </div>
        </div>

        {/* CONTACT + HAMBURGER */}
        <div className="flex items-center gap-4">
        <div className="hidden md:block text-1xl text-gray-700 font-medium">
  <Phone className="inline-block  mr-2 h-5 w-5 text-green-800" />
  Contact Us :{" "}
  {/* <a href="tel:9857030665" className="text-green-800 hover:underline">
    9857030665
  </a>
  {" / "} */}
  <a href="tel:9851214257" className="text-green-800 hover:underline">
    9851214257
  </a>
</div>

          <button
            className="md:hidden p-2 text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

    
      <nav className="bg-green-50 md:bg-green-700 relative">
        <div className="max-w-7xl mx-auto px-4">

          {/* ===== Desktop Menu ===== */}
          <ul className="hidden md:flex text-[17px] items-center gap-4 py-3 text-white font-semibold">

            <li className="px-3 py-1 hover:bg-green-800 rounded">
              <Link to="/" onClick={handleMenuClick}>Home</Link>
            </li>

            <li className="px-3 py-1 hover:bg-green-800 rounded">
              <Link to="/products" onClick={handleMenuClick}>Products</Link>
            </li>

            {/* ABOUT US */}
            <li
              className="px-3 py-1 hover:bg-green-800 rounded relative"
              onMouseEnter={() => handleSubnavEnter("about")}
              onMouseLeave={handleSubnavLeave}
            >
              <button
                className="flex items-center gap-2"
                onClick={() =>
                  setSubnav((prev) => (prev === "about" ? "" : "about"))
                }
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
            <ul className="md:hidden text-green-700 font-bold text-sm py-2">

              <li className="px-4 py-3 border-t border-green-600">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>

              <li className="px-4 py-3 border-t border-green-600">
                <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                  Products
                </Link>
              </li>

              {/* ABOUT US MOBILE */}
              <li className="px-4 py-3 border-t border-green-600">
                <button
                  className="w-full flex items-center justify-between font-semibold"
                  onClick={() =>
                    setMobileOpen((prev) => ({
                      ...prev,
                      about: !prev.about,
                    }))
                  }
                >
                  About Us ▾
                </button>

                {mobileOpen.about && (
                  <ul className="mt-3 pl-4 space-y-2 text-green-700">
                    {[
                      ["Who We Are", "/about"],
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
                          onClick={() => setIsMenuOpen(false)}
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
                <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                  Blogs
                </Link>
              </li>

              <li className="px-4 py-3 border-t border-green-600">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>

            </ul>
          )}
        </div>
      </nav>

      {/* ================= ABOUT US SUBNAV ================= */}
      {subnav === "about" && (
        <div
          className="hidden md:block absolute left-0 top-full w-full bg-green-50/95 backdrop-blur-md border-t border-green-200 shadow-xl z-40"
          onMouseEnter={() => clearTimeout(closeTimeout.current)}
          onMouseLeave={handleSubnavLeave}
        >
          <div className="max-w-7xl mx-auto px-2 py-2 grid grid-cols-3  gap-2">

            <div className="border-r border-green-200 pr-4">
              <h3 className="font-bold text-green-900 mb-4 uppercase tracking-wider">
                About Siddha
              </h3>
              <ul className="space-y-0 text-gray-800 font-medium">
                {[
                  ["Who We Are", "/about"],
                  ["MD Message", "/about/md"],
                  ["Board of Directors", "/board-of-directors"],
                  ["Patron & Adviser", "/patron_adviser"],
                ].map(([label, link]) => (
                  <li key={label}>
                    <Link
                      to={link}
                      onClick={() => setSubnav("")}
                      className="block px-3 py-2 rounded hover:bg-green-100"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-r border-green-200 pr-8">
              <h3 className="font-bold text-green-900 mb-4 uppercase tracking-wider">
                Departments
              </h3>
              <ul className="space-y-2 text-gray-800 font-medium">
                {[
                  ["Marketing", "/departments/marketing"],
                  ["Production", "/departments/production"],
                  ["Finance", "/departments/finance"],
                ].map(([label, link]) => (
                  <li key={label}>
                    <Link
                      to={link}
                      onClick={() => setSubnav("")}
                      className="block px-3 py-2 rounded hover:bg-green-100"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-green-200 bg-white/80">
              <h3 className="text-green-900 font-bold mb-3">
                Herbal Excellence
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Dedicated to wellness through authentic Ayurvedic solutions.
              </p>
              <Link
                to="/contact"
                onClick={() => setSubnav("")}
                className="inline-block bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 font-semibold"
              >
                Get In Touch →
              </Link>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
