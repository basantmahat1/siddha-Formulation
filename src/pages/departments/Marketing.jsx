import React from "react";
import {
  Settings,
  Mail,
  Phone,
  Award,
  TrendingUp,
  Factory,
} from "lucide-react";
// DepartmentLayout inlined below (removed external dependency)

export default function Marketing() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white font-serif">
      {/* Hero Section */}

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Department Layout (inlined) */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4 text-green-600">
                <TrendingUp className="w-10 h-10 text-green-700" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Marketing Department
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Head Card */}
              <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
                <img
                  src="/assets/img/harisir.jpeg"
                  className="w-50 h-60 rounded-2xl mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">Harihar Bhandari</h3>
                <p className="text-green-600 text-sm mb-6">
                  Director – Marketing
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
                  Message from the Director – Marketing
                </span>

                <p className="text-gray-700 text-justify leading-relaxed mb-6">
                  At Siddha Formulation, we create value for life by offering
                  trusted medical solutions to people. We manage the entire
                  lifecycle of pharmaceutical products, from manufacturing and
                  quality assurance to market supply, branding, and
                  accessibility. Our dedicated marketing team works relentlessly
                  to ensure that Siddha products are consistently available and
                  accessible to patients, healthcare professionals, and
                  institutions. Our strategies are closely aligned with sales
                  and support teams to maintain a seamless and positive customer
                  experience at every touchpoint. A key responsibility of the
                  marketing department is to strengthen the Siddha brand
                  presence while delivering clear, ethical, and effective
                  communication to our partners, distributors, and
                  collaborators. We ensure that brand messaging reflects trust,
                  scientific integrity, and social responsibility. Our team
                  actively engages with healthcare professionals to provide
                  accurate product information, ensuring that both physicians
                  and patients benefit from informed decision-making. Working in
                  close collaboration with sales teams, local affiliates, and
                  global distribution partners, we ensure the safe, compliant,
                  and timely supply of pharmaceutical products across markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Market Accessibility
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Ensuring medicines reach patients and healthcare providers safely
              and efficiently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Settings className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Strategic Branding
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Building strong brand recognition through ethical and transparent
              communication.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Award className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Professional Engagement
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Collaborating with healthcare professionals and partners to
              deliver value-driven solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
