import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { FaPhoneAlt } from "react-icons/fa"; // Using react-icons for the call icon

export default function Banner() {
  return (
    <div className="w-full font-sans">
        
  
        {/* WHY AYURVEDA SECTION (Moved up, now followed directly by the CTA banner) */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            
            {/* Image on the left */}
            <div className="w-full md:w-1/2">
              <img
                src="src/assets/img/img-1000.jpg"
                className="rounded-xl shadow-lg w-full"
                alt="Ayurvedic Product"
              />
            </div>

            {/* Text on the right */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-6">Why Pure Ayurvedic?</h2>
              <p className="text-gray-600 mb-6">
                We provide authentic Ayurvedic products with natural ingredients for a healthier lifestyle.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {['Herbal', 'Natural Extracts', 'Ayurvedic', 'Certified Quality', 'Best Results'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-green-100 text-green-700 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      {/* BENEFITS SECTION (Retained at the top) */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[ 
              { value: "25", label: "Years Experience" },
              { value: "50k+", label: "Happy Customers" },
              { value: "1000+", label: "Reviews" },
              { value: "100%", label: "Pure Products" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-green-50 rounded-xl shadow">
                <h2 className="text-3xl font-bold text-green-700">{item.value}</h2>
                <p className="text-gray-600 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW CALL TO ACTION BANNER: Ready to Experience Natural Healing? (Placed at the end/bottom) */}
        <section className="py-8 px-4 bg-gradient-to-r  from-green-800 to-green-200 text-white text-center">
  
            {/* GET IN TOUCH CTA */}
            <div className="inline-block px-6 py-2 mb-4 text-sm font-semibold tracking-wider uppercase bg-yellow-400 text-gray-800 rounded-full shadow-md">
              GET IN TOUCH
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
              Ready to Experience Natural Healing?
            </h2>
            
            {/* Subtext (Removed mb-10 for tighter vertical spacing) */}
            <p className="text-lg text-green-100 max-w-2xl mx-auto mb-6">
              Connect with us to learn more about our products and how we can support your health journey
            </p>

            {/* Contact Us Button */}
            <div className="flex justify-center">
              <Link
                to="/contact" // replace with your actual contact page route
                className="px-8 py-3 bg-white text-green-800 font-semibold rounded-lg shadow-xl hover:bg-gray-100 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
   
        </section>

    </div>
  );
}