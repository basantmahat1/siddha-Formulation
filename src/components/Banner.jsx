import React from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { FaPhoneAlt } from "react-icons/fa"; // Using react-icons for the call icon
import {
  Microscope,
  BadgeCheck,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";
export default function Banner() {
  return (
    <div className="w-full font-serif">
        
  
        {/* WHY AYURVEDA SECTION (Moved up, now followed directly by the CTA banner) */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            
            {/* Image on the left */}
            <div className="w-full md:w-1/2">
              <img
                src="/assets/img/img-1000.jpg"
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
              { value: "31+", label: "Years Experience" },
              { value: "90+", label: "Herbal Products" },
              { value: "65k", label: "sq.Ft Facility" },
              { value: "100%", label: "Natural ingredients" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-green-50 rounded-xl shadow">
                <h2 className="text-3xl font-bold text-green-700">{item.value}</h2>
                <p className="text-gray-600 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
{/* WHY TO CHOOSE US SECTION */}
<section className="py-20 bg-white shadow-amber-50">
  <div className="max-w-7xl mx-auto px-4 text-center">

    {/* Top Badge */}
    <div className="inline-block px-6 py-2 mb-6 text-xs font-semibold tracking-widest uppercase bg-yellow-400 text-gray-900 rounded-full">
      WHY TO CHOOSE US
    </div>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-green-800 mb-6">
      Fusing Ancient Wisdom with Modern Science
    </h2>

    {/* Description */}
    <p className="text-gray-600 max-w-3xl mx-auto mb-16">
      At Siddha Formulation, our dedication lies in creating authentic, safe,
      and effective wellness solutions by blending time-tested Ayurvedic
      principles with scientific innovation and global standards.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className=" bg-gray-100 hover:bg-green-50 border border-gray-100 hover:border-green-300 p-4 md:p-5 rounded-lg ">
           
        <div className="flex justify-center  mb-6">
          <img src="/assets/img/microscope-icon.svg" alt="" className="h-12" />
        </div>
        <h3 className="text-xl text-green-800 font-serif font-semibold mb-3">
          Latest Technologies
        </h3>
        <p className="text-gray-600 text-sm">
          We use modern technology to create herbal products.
        </p>
      </div>

      {/* Card 2 */}
      <div className=" bg-gray-100 hover:bg-green-50 border border-gray-100 hover:border-green-300 p-4 md:p-5 rounded-lg ">
           
        <div className="flex justify-center mb-6">
          <img src="/assets/img/quality-icon.svg" alt="" className="h-12" />
        </div>
        <h3 className="text-xl text-green-800 font-serif font-semibold mb-3">
          Quality Assured
        </h3>
        <p className="text-gray-600 text-sm">
          Each product goes through a stringent quality control process.
        </p>
      </div>

      {/* Card 3 */}
      <div className=" bg-gray-100 hover:bg-green-50 border border-gray-100 hover:border-green-300 p-4 md:p-5 rounded-lg ">
           
        <div className="flex justify-center mb-6">
          <img src="/assets/img/safe-icon.svg" alt="" className="h-12" />
        </div>
        <h3 className="text-xl font-serif text-green-800 font-semibold mb-3">
          Safe & Efficacy
        </h3>
        <p className="text-gray-600 text-sm">
          All the products are based on strong R&amp;D test and approval.
        </p>
      </div>

      {/* Card 4 */}
      <div className=" bg-gray-100 hover:bg-green-50 border border-gray-100 hover:border-green-300 p-4 md:p-5 rounded-lg ">
           
        <div className="flex justify-center mb-6">
          <img src="/assets/img/product-range-icon.svg" alt="" className="h-12" />
        </div>
        <h3 className="text-xl font-serif text-green-800 font-semibold mb-3">
          Product Range
        </h3>
        <p className="text-gray-600 text-sm">
          We address wide range of problems in humans and animals.
        </p>
      </div>

    </div>
  </div>
</section>


        {/* NEW CALL TO ACTION BANNER: Ready to Experience Natural Healing? (Placed at the end/bottom) */}
        <section className="py-8 px-4 md:pt-20 bg-gradient-to-r h-[300px md:h-105  from-green-800 to-green-700 text-white text-center">
  
            {/* GET IN TOUCH CTA */}
            <div className="inline-block px-4 py-3 mb-2 md:px-8 md:py-4 md:mb-6 text-sm font-semibold tracking-wider uppercase bg-yellow-400 text-gray-800 rounded-full shadow-md">
              GET IN TOUCH
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
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
                className="px-2 py-2 md:px-8 md:py-3 bg-white text-green-800 font-semibold rounded-lg shadow-xl hover:bg-gray-100 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
   
        </section>

    </div>
  );
}
