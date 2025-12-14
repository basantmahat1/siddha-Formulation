import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-24 shadow-xl">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            About Siddha Foundation
          </h1>
          <p className="text-lg md:text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            A legacy of Ayurveda dedicated to transforming lives through
            pure, natural, and scientifically crafted herbal wellness.
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-green-300 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <section className="mb-24">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Text */}
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Siddha Foundation was born with a vision to restore the
                  ancient healing wisdom of Ayurveda and integrate it with
                  modern scientific standards. For over two decades, our
                  journey has revolved around crafting high-quality herbal
                  formulations that bring real wellness into people's lives.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Each product is carefully formulated using premium herbal
                  ingredients, ethically sourced from the richest natural
                  regions of India. We emphasize purity, safety, and
                  effectiveness — ensuring that every product delivers the
                  benefits Ayurveda promises.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, thousands of families trust Siddha Foundation for
                  their daily wellness and healing needs. Our mission continues:
                  to make natural and holistic health accessible to everyone.
                </p>
              </div>

              {/* Image */}
              <div className="h-96 md:h-auto">
                <img
                  src="/src/assets/img/img-1about.jpg"
                  alt="Siddha Foundation"
                  className="w-full h-full object-cover brightness-95"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-green-600 hover:shadow-xl transition">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To enrich lives with pure, effective, and affordable Ayurvedic
                products that nurture health, balance, and holistic wellness.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition">
              <div className="text-6xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a global symbol of trust in natural wellness, rooted in
                Ayurveda and committed to purity, sustainability, and care.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-purple-600 hover:shadow-xl transition">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Integrity, authenticity, purity, compassion, and innovation —
                these principles form the core of everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Siddha Foundation?
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl text-center transition border-l-4 border-green-600"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-700 to-green-800 text-white rounded-3xl p-16 shadow-lg text-center">
          <h2 className="text-4xl font-bold mb-6">
            Begin Your Natural Wellness Journey
          </h2>
          <p className="text-green-100 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover the pure essence of Ayurveda with our premium herbal
            products. Your path to better health, balance, and vitality begins now.
          </p>

          <Link
            to="/products"
            className="inline-block bg-white text-green-700 font-bold px-12 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Explore Products
          </Link>
        </section>
      </div>
    </div>
  );
}
