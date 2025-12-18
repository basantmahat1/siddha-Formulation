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
    // {
    //   href: "https://www.instagram.com",
    //   label: "Instagram",
    //   path: "M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm9 2h-9A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z",
    // },
    {
      href: "https://www.youtube.com/@siddhaformulation3781",
      label: "YouTube",
      path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
  ];

  return (
    <div className="  bg-white pt-18">
      <footer className="bg-[#0f1720]  text-gray-300  pt-16 pb-8 ">
        <div className="max-w-7xl mx-auto px-6">
          {/* TOP */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-14 border-b border-gray-700">
            {/* BRAND */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/assets/img/siddha.png"
                  alt="Siddha Formulation"
                  className="h-25 w-25 rounded-full p-1"
                />
                <div>
                  <h3 className="text-green-600 text-2xl font-bold tracking-wide">
                    Siddha Formulation
                  </h3>
                  <p className="text-gray-400 text-base mt-1">
                    Herbal Excellence
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-400 leading-relaxed max-w-xl">
                Pioneering the future of herbal healthcare in Nepal with
                innovative, sustainable, and effective natural medicine
                solutions.
              </p>
            </div>

            {/* PRODUCTS */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-5">
                Products
              </h4>
              <ul className="space-y-4 text-base">
                <li>
                  <button
                    onClick={() => handleProductClick("herbal")}
                    className="hover:text-green-400 transition"
                  >
                    Herbal Healthcare
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleProductClick("veterinary")}
                    className="hover:text-green-400 transition"
                  >
                    Veterinary Care
                  </button>
                  {/* <button onClick={() => handleProductClick("herbal")}>
                    Herbal Healthcare
                  </button>
                  <button onClick={() => handleProductClick("veterinary")}>
                    Veterinary Care
                  </button> */}
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-5">Company</h4>
              <ul className="space-y-4 text-base">
                <li>
                  <button
                    onClick={() => handleNavClick("/about")}
                    className="hover:text-green-400"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/board-of-directors")}
                    className="hover:text-green-400"
                  >
                    Leadership
                  </button>
                </li>
                {/* <li>
                <button
                  onClick={() => handleNavClick("/about")}
                  className="hover:text-green-400"
                >
                  Jobs & Careers
                </button>
              </li> */}
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-5">Support</h4>
              <ul className="space-y-4 text-base">
                <li>
                  <button
                    onClick={() => handleNavClick("/contact")}
                    className="hover:text-green-400"
                  >
                    Contact
                  </button>
                </li>
                {/* <li>
                  <button
                    onClick={() => handleNavClick("/about")}
                    className="hover:text-green-400"
                  >
                    FAQ
                  </button>
                </li> */}
                <li>
                  {/* <button
                  onClick={() => handleNavClick("/about")}
                  className="hover:text-green-400"
                >
                  Privacy Policy
                </button> */}
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6">
            <p className="text-base text-gray-400">
              © 2025 Siddha Formulation. All rights reserved.
            </p>

            <div className="flex gap-6">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
