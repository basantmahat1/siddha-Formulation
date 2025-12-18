import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollUpButton from "../common/ScrollUpButton";
import { useNavigate } from "react-router-dom";

// Define the slides data for the carousel
const slides = [
  {
    title: "About Siddha Formulation",
    subtitle:
      "A legacy of Ayurveda dedicated to transforming lives through pure, natural, and scientifically crafted herbal wellness.",
    bgImage: "/assets/img/aboutimg1.png",
  },
  {
    title: "Rooted in Ancient Ayurveda",
    subtitle:
      "Bridging the wisdom of traditional healing with the assurance of modern scientific research and quality control.",
    bgImage: "/assets/img/about_banner2.png",
  },
  {
    title: "Committed to Pure Ingredients",
    subtitle:
      "Ethically sourced, potent, and 100% natural ingredients from the finest regions, ensuring maximum efficacy.",
    bgImage: "/assets/img/about_banner3.png",
  },
];

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const goToProducts = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
    setTimeout(() => navigate("/products"), 100); // navigate after scroll
  };

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to set a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Automatic slide transition effect
  useEffect(() => {
    const timer = setTimeout(nextSlide, 3000); // Change slide every 5 seconds
    return () => clearTimeout(timer); // Clear timeout if component unmounts or state changes
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <div
        className="relative h-[300px] md:h-[410px] py-28 flex items-center justify-center text-center text-white overflow-clip"
        style={{
          backgroundImage: `url('${slides[currentSlide].bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div
          key={currentSlide}
          className="relative max-w-6xl mx-auto px-6 text-center transition-opacity duration-1000 ease-in-out"
        >
          <h1 className="text-4xl md:text-5xl text-green-400 font-extrabold mb-6 drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white scale-110"
                    : "bg-green-300 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <section className="mb-24">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 text-justify">
              {/* Text */}
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Siddha Formulation was born with a vision to restore the
                  ancient healing wisdom of Ayurveda and integrate it with
                  modern scientific standards. For over two decades, our journey
                  has revolved around crafting high-quality herbal formulations
                  that bring real wellness into people's lives.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Each product is carefully formulated using premium herbal
                  ingredients, ethically sourced from the richest natural
                  regions of India. We emphasize purity, safety, and
                  effectiveness — ensuring that every product delivers the
                  benefits Ayurveda promises.
                </p>

                <p className="text-gray-700 text-bse md:text-lg leading-relaxed">
                  Today, thousands of families trust Siddha Formulation for
                  their daily wellness and healing needs. Our mission continues:
                  to make natural and holistic health accessible to everyone.
                </p>
              </div>

              {/* Image */}
              <div className="h-80 md:h-auto">
                <img
                  src="/assets/img/img-1about.jpg"
                  alt="Herbal ingredients and Ayurvedic preparations on a wooden surface"
                  className="w-full h-full object-cover brightness-95"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-5 shadow-lg border-t-4 border-green-600 hover:shadow-xl transition transform hover:-translate-y-0.5">
              <div className="text-4xl md:text-6xl mb-2 md:mb-6">🎯</div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To enrich lives with pure, effective, and affordable Ayurvedic
                products that nurture health, balance, and holistic wellness.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-green-600 hover:shadow-xl transition transform hover:-translate-y-0.5">
              <div className="text-4xl md:text-6xl mb-2 md:mb-6">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900  mb-2 md:mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To be a global symbol of trust in natural wellness, rooted in
                Ayurveda and committed to purity, sustainability, and care.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-green-600 hover:shadow-xl transition transform hover:-translate-y-0.5">
              <div className="text-4xl md:text-6xl mb-2 md:mb-6">💎</div>
              <h3 className="text-2xl font-bold text-gray-900  mb-2 md:mb-4">
                Our Values
              </h3>
              <p className="text-gray-700 text-base  md:text-lg leading-relaxed">
                Integrity, authenticity, purity, compassion, and innovation —
                these principles form the core of everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Siddha Formulation?
          </h2>
          <p className="text-center text-base text-gray-600 mb-14 max-w-2xl mx-auto md:text-lg">
            We bring you premium Ayurvedic wellness backed by years of research,
            heritage, and trust.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value Items */}
            {[
              {
                icon: "🌿",
                title: "100% Natural",
                text: "Pure, herbal ingredients with no artificial additives.",
              },
              {
                icon: "⚗️",
                title: "Scientifically Formulated",
                text: "A blend of Ayurvedic wisdom and modern science.",
              },
              {
                icon: "🏥",
                title: "Safe & Effective",
                text: "Each formulation is crafted for real-world wellness.",
              },
              {
                icon: "💚",
                title: "Trusted by Thousands",
                text: "A growing community relying on our premium products.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl text-center transition border-l-4 border-green-600 transform hover:scale-[1.02]"
              >
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className=" bg-green-700 text-white rounded-3xl p-16  text-center">
          <h2 className=" text-3xl md:text-4xl font-bold mb-6">
            Begin Your Natural Wellness Journey
          </h2>
          <p className="text-green-100 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover the pure essence of Ayurveda with our premium herbal
            products. Your path to better health, balance, and vitality begins
            now.
          </p>

          <button
            onClick={goToProducts}
            className="inline-block bg-white text-lg text-green-600 font-bold px-12 py-3 rounded-lg shadow-xl hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Explore Products
          </button>
        </section>
      </div>
      <ScrollUpButton />
    </div>
  );
}
