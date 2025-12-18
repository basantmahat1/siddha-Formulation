import React from "react";
import { Settings, Mail, Phone, Award, Factory } from "lucide-react";
// DepartmentLayout inlined below (removed external dependency)

export default function Production() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white font-serif">
      {/* Hero Section */}

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4 py-8">
        {/* Department Layout (inlined) */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4 text-green-600">
                <Factory className="w-10 h-10 text-green-700" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Production Department
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Head Card */}
              <div className="bg-gray-50 shadow-md p-6 text-center">
                <img
                  src="/assets/img/RemlalSir.jpeg"
                  className="w-50 h-70 rounded-2xl mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">Remlal Poudel</h3>
                <p className="text-green-600 text-sm mb-6">
                  Director – Production
                </p>

                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      {/* <div className="text-xs text-gray-500">Email</div> */}
                      <a
                        href="mailto:siddha.formulation@gmail.com"
                        className="text-gray-900 font-medium hover:text-green-600 transition-colors"
                      >
                        siddha.formulation@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <a
                        href="tel:+9779857030665"
                        className="text-gray-900 font-medium hover:text-green-600 transition-colors"
                      >
                        +977 9857030665
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="lg:col-span-2">
                <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-md text-sm mb-4">
                  Message from the Director – Production
                </span>

                <p className="text-gray-700 text-justify leading-relaxed mb-6">
                  Ayurveda is a time-tested system of natural medicine with a
                  history spanning more than 5,000 years. It follows a holistic
                  philosophy that focuses on harmony between the mind, body, and
                  spirit. At Siddha Formulation, our production philosophy is
                  rooted in this ancient wisdom while embracing modern
                  manufacturing excellence. Nepal is uniquely positioned as a
                  center for authentic Ayurvedic medicine due to its rich
                  biodiversity and abundance of medicinal plants. Our production
                  processes carefully source, preserve, and utilize these
                  natural resources with sustainability and ethical
                  responsibility at the core. All manufacturing activities are
                  conducted in strict compliance with the Department of Drug
                  Administration (DDA), Ministry of Health and Population,
                  Government of Nepal. Our facilities adhere to WHO-GMP
                  standards, ensuring the highest levels of safety, consistency,
                  and efficacy in every formulation. We produce a wide range of
                  classical and modern Ayurvedic formulations including
                  Chyawanprash, Triphala, Ashwagandha, and Brahmi. Each product
                  undergoes rigorous quality control, from raw material
                  inspection to final packaging, to deliver trusted healthcare
                  solutions. With increasing global recognition of natural and
                  preventive healthcare, Siddha Formulation remains committed to
                  innovation, quality, and global standards. Our vision is to
                  position Nepal as a respected global hub for premium Ayurvedic
                  medicine production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standards & Compliance */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Award className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Quality Assurance
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Multi-level quality checks ensuring purity, safety, and efficacy
              of every formulation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Factory className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              WHO-GMP Standards
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Manufacturing processes aligned with international WHO-GMP
              compliance requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Settings className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Sustainable Production
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Responsible sourcing and eco-conscious practices to protect
              natural resources.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
