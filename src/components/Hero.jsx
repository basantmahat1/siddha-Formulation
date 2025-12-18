/* SiddhaHero.jsx - Hero + Bottom Section */

import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const openDiscover = () => {
    navigate('/products#patent');
  };

  const openProducts = () => {
    navigate('/products');
  };

  return (
    <>
   {/* Hero Section */}
<section className="w-full font-serif bg-gradient-to-br from-green-50 to-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

    {/* Left Text Section */}
    <div className="animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold text-[#096e3b]  mb-4">
        Siddha
        <br />
        <span className="text-[#00A651] ">
          Formulation Pvt.Ltd
        </span>
      </h1>

      <p className="text-black/70 mt-4 mb-4 md:max-w-md text-lg font-semibold">
        Revolutionizing Herbal Healthcare in Nepal:
      </p>

      <p className="text-gray-700 mb-8 md:max-w-md text-lg leading-relaxed">
        Pioneering the future of natural medicine with cutting-edge research,
        traditional wisdom, and sustainable practices.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <button onClick={openDiscover} className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold
          hover:bg-green-800 transition-all hover:shadow-lg transform hover:scale-105
          flex items-center gap-2 text-lg tracking-wider">
          Our Products
          <span className="text-2xl">→</span>
        </button>

      
      </div>
    </div>

    {/* Right Image Section */}
    <div className="relative flex items-center justify-center">
      <div className="absolute w-90 h-90 md:w-100 md:h-100 bg-green-200 rounded-full blur-3xl opacity-40 -z-10"></div>
      <img
        src="/assets/img/Herbal-Medicine.jpg"
        alt="Herbal Product"
        className="w-100 md:w-full h-auto drop-shadow-2xl rounded-3xl
          hover:scale-105 transition-transform duration-300"
      />
    </div>

  </div>
</section>

{/* Bottom Ayurvedic Info Section */}
<section className="relative w-full mt-0  border-2  ">
  <div
    className="relative w-full h-[280px] md:h-[420px] bg-cover bg-center flex items-center justify-center px-6"
    style={{
      backgroundImage: "url('/assets/img/Herbal-Medicine.jpg')",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Content */}
    <div className="relative z-10  max-w-5xl mx-auto text-center text-white px-4">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
Ancient Wisdom, Modern Healing
      </h2>

      <p className="text-base md:text-lg line-clamp-5 md:line-clamp-none leading-relaxed text-gray-100">
Blending 3000 years of Ayurvedic tradition with cutting-edge research.

Combining ancient <br /> wisdom with 
 modern science for superior quality and efficacy.
Bringing you the <br /> purest herbal formulations for holistic and balanced wellness.
 
        
      </p>
    </div>
  </div>
</section>

    </>
  );
}
