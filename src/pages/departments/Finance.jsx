import React from "react";
import { ShieldCheck, TrendingUp, Factory, Mail, Phone } from "lucide-react";
// DepartmentLayout inlined below (removed external dependency)

export default function Finance() {
  return (
    <div className="bg-gradient-to-b font-serif from-gray-50 to-white">
      {/* Hero Section */}

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Department Layout (inlined) */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4 text-green-600"></div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Finance Department
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Head Card */}
              <div className="bg-gray-50  shadow-md p-6 text-center">
                <img
                  src="/assets/img/subodhsir.jpeg"
                  className="w-45 h-55 rounded-2xl mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">Subodh Attreya</h3>
                <p className="text-green-600 text-sm mb-6">
                  Head – Accounts & Finance
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
                      {/* <div className="text-xs text-gray-500">Phone</div> */}
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
                  Message from the Head – Finance
                </span>

                <p className="text-gray-700 text-justify leading-relaxed mb-6">
                  The pharmaceutical industry is a highly regulated sector with
                  substantial capital investment requirements and long
                  development timelines. Effective financial management is
                  therefore critical to ensuring operational stability,
                  regulatory compliance, and sustainable growth. Finance plays a
                  vital role in enabling research and development by ensuring
                  adequate funding for innovation, clinical development, and
                  continuous improvement. Strategic allocation of financial
                  resources supports the discovery and development of safe,
                  effective, and high-quality pharmaceutical products. Capital
                  expenditure planning is another key responsibility of the
                  finance function. Significant investments in manufacturing
                  facilities, advanced equipment, quality systems, and
                  technology are essential to meet regulatory standards and
                  scale operations efficiently. Pricing strategy is carefully
                  guided by financial analysis, market dynamics, and regulatory
                  considerations. The finance team works closely with commercial
                  and regulatory departments to ensure product pricing balances
                  affordability, competitiveness, and long-term sustainability.
                  Risk management is integral to pharmaceutical finance. Our
                  team proactively manages regulatory, legal, operational, and
                  intellectual property risks through robust controls,
                  compliance frameworks, and financial planning. Through prudent
                  governance and transparency, the finance department supports
                  Siddha Formulation’s mission of delivering trusted healthcare
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Finance Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">R&D Funding</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Enabling innovation through strategic funding of research and
              development initiatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Factory className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Capital Expenditure
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Supporting investments in facilities, technology, and
              manufacturing excellence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">
              Product Pricing
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Ensuring sustainable and competitive pricing through market and
              financial analysis.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Risk Management
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Managing regulatory, legal, and financial risks through robust
              governance frameworks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
