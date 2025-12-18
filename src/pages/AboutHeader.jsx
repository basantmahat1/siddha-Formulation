import React from "react";
import { Leaf } from "lucide-react";

const AboutHeader = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-emerald-50 py-20 md:py-24 overflow-hidden font-serif">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-green-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-emerald-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <Leaf className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Siddha Formulation
            </h1>
            <p className="text-xl md:text-2xl text-green-700 font-medium">
              A New Era of Herbal Excellence
            </p>
          </div>

          {/* Tagline */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg max-w-3xl">
            <p className="text-gray-700 text-lg leading-relaxed">
              Blending 3000 years of Ayurvedic tradition with cutting-edge
              research to bring you the purest herbal formulations. Pioneering
              the future of herbal healthcare in Nepal with innovative,
              sustainable, and effective natural medicine solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">31+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">90+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Herbal Products
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">65K</div>
                <div className="text-sm text-gray-600 mt-1">
                  Sq. Ft Facility
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
