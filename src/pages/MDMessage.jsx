import React from "react";
import { Quote, Mail, Phone, Award } from "lucide-react";
import ScrollUpButton from "../common/ScrollUpButton";

const MDMessage = () => {
  return (
    <section className="py-16 bg-white font-serif">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Quote className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Message from Managing Director
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* MD Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-b from-green-50 to-white rounded-2xl shadow-xl p-8 sticky top-8">
                <div className="text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg">
                    <img
                      src="/assets/img/mdirector.jpeg"
                      alt="Managing Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Ram Chandra Poudel
                  </h3>
                  <div className="inline-flex items-center bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    <Award className="h-4 w-4 mr-2" />
                    Managing Director
                  </div>
                  <h1 className="text-gray-600  mb-4">MD / CEO</h1>

                  <p className="text-gray-600 text-sm mb-6">
                    Siddha Formulation
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
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                  MD Message
                </div>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong>Ayurveda</strong>, which originated in ancient
                    times, is a traditional system of medicine that emphasizes
                    balance and harmony in body, mind, and spirit. In recent
                    years, its global appeal has grown immensely due to rising
                    interest in holistic health, wellness trends, and
                    traditional healing practices.
                  </p>

                  <p>
                    While commercialization has made Ayurveda more accessible
                    worldwide, it also brings challenges - including concerns
                    about quality control, standardization, and the risk of
                    misrepresentation. As the industry grows, so too does the
                    temptation for adulteration, exaggerated claims, and
                    exploitation of ancient knowledge.
                  </p>

                  <p>
                    In Nepal, institutions like the Department of Drug
                    Administration (DDA) are working diligently to regulate and
                    maintain high standards for Ayurvedic products. These
                    efforts are crucial in ensuring the safety, authenticity,
                    and efficacy of the medicines we offer.
                  </p>

                  <p>
                    At Siddha Formulation, we believe that commercialization can
                    support Ayurveda - but only if it is grounded in integrity,
                    transparency, and deep respect for its roots. Through proper
                    regulation and quality control, we can foster innovation
                    without losing the essence of our traditions.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-8">
                    <p className="text-green-800 font-semibold italic">
                      "Let us walk forward with wisdom - embracing opportunity
                      while protecting authenticity."
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-gray-200">
                  <a
                    href="mailto:siddha.formulation@gmail.com"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </a>
                  <a
                    href="tel:+9779857030665"
                    className="inline-flex items-center border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollUpButton />
    </section>
  );
};

export default MDMessage;
