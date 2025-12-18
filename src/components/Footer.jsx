import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleProductClick = (filter) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(`/products?filter=${filter}`), 300);
  };

  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 300);
  };
  const socialIcons = [
    {
      href: "https://www.facebook.com/siddha.formulation/",
      label: "Facebook",
      path: "M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z",
    },
   
    {
      href: "https://www.youtube.com/@siddhaformulation3781",
      label: "YouTube",
      path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
  ];

  return (
  <div className="bg-white pt-20 font-serif">
  <footer className="bg-[#0f1720]  text-gray-300 pt-10 pb-6 md:pt-20 md:pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      {/* TOP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-6 sm:gap-y-8 md:gap-y-12 gap-x-4 md:gap-x-6 pb-8 border-b border-gray-700">

        {/* BRAND */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
            <img
              src="/assets/img/siddha.png"
              alt="Siddha Formulation"
              className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full p-1"
            />
            <div>
              <h3 className="text-green-600 text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                Siddha Formulation
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">
                Herbal Excellence
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm md:text-[16px] text-gray-300 leading-relaxed max-w-xl">
            Pioneering the future of herbal healthcare in Nepal with innovative, sustainable, and effective natural medicine solutions.
          </p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">
            Products
          </h4>
          <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
            <li>
              <button onClick={() => handleProductClick("herbal")} className="hover:text-green-400 transition">
                Herbal Healthcare
              </button>
            </li>
            <li>
              <button onClick={() => handleProductClick("veterinary")} className="hover:text-green-400 transition">
                Veterinary Care
              </button>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">
            Company
          </h4>
          <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
            <li>
              <button onClick={() => handleNavClick("/about")} className="hover:text-green-400">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("/board-of-directors")} className="hover:text-green-400">
                Leadership
              </button>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">
            Support
          </h4>
          <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
            <li>
              <button onClick={() => handleNavClick("/contact")} className="hover:text-green-400">
                Contact
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("/about")} className="hover:text-green-400">
                FAQ
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="flex flex-col items-center py-4 sm:py-6 md:py-8 gap-4">

        {/* SOCIAL ICONS */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 mb-2">
          {socialIcons.map((icon) => (
            <a
              key={icon.label}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center">
          © 2025 Siddha Formulation. All rights reserved.
        </p>

      </div>

    </div>
  </footer>
</div>

  );
}
