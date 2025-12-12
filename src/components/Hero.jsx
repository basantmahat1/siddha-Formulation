/* SiddhaHero.jsx - Hero + Bottom Section */

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          {/* Left Text Section */}
          <div className="animate-fadeIn">
            <img src="../src/assets/img/siddha.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-sm text-green-600 tracking-widest font-bold mb-2 uppercase">
              Premium Ayurvedic
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-2">
              Herbal<br />
              <span className="text-green-700">Wellness</span>
            </h1>
            <p className="text-gray-700 mt-6 mb-8 md:max-w-md text-lg leading-relaxed">
              Experience the power of ancient Ayurvedic traditions combined with modern science. Premium quality herbal products for your complete wellness journey.
            </p>
            <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-800 transition-all hover:shadow-lg transform hover:scale-105 flex items-center gap-2 text-lg">
              Shop Now
              <span className="text-2xl">→</span>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-40 -z-10"></div>
            <img
              src="../src/assets/img/Herbal-Medicine.jpg"
              alt="Herbal Product"
              className="w-96 md:w-full h-auto drop-shadow-2xl rounded-3xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Bottom Ayurvedic Info Section */}
      <section className="relative w-full mt-0">
        {/* Background Image */}
        <div
          className="w-full h-[360px] md:h-[420px] bg-cover bg-center flex items-center justify-center text-center px-6"
          style={{ backgroundImage: "url('/src/assets/img/Herbal-Medicine.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
              Buy Ayurvedic Medicine & Products Online from India's
              <br /> Largest Ayurvedic Shopping Store
            </h2>

            <p className="text-[13px] md:text-sm leading-relaxed">
              AyurKart, the online ayurvedic store sells all kinds of ayurvedic medicine and ayurvedic
              products online from India's top most ayurvedic brands like Kottakkal Arya VaidyaSala,
              Vaidyaratnam, AVP, Kerala Ayurveda, Himalaya, Dabur, Zandu Ayurveda & Alarsin etc.,
              our aims to bring the world of authentic ayurvedic herbs and ayurvedic medicines to your
              doorstep within the shortest delivery time possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
