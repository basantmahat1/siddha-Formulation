import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollUpButton from "../common/ScrollUpButton";

const KidneyFailureGuide = () => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "symptoms",
        "causes",
        "diagnosis",
        "treatment",
        "prevention",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const symptomsData = {
    early: [
      "Fatigue and weakness",
      "Difficulty concentrating",
      "Poor appetite",
      "Trouble sleeping",
      "Muscle cramps at night",
      "Swollen feet/ankles",
    ],
    advanced: [
      "Nausea and vomiting",
      "Severe swelling (edema)",
      "Persistent itching",
      "Chest pain or shortness of breath",
      "Changes in urine output",
      "High blood pressure",
    ],
  };

  const causesData = [
    {
      title: "Diabetes",
      percentage: "44%",
      description: "Leading cause of kidney failure worldwide",
    },
    {
      title: "High Blood Pressure",
      percentage: "28%",
      description: "Damages blood vessels in kidneys",
    },
    {
      title: "Glomerulonephritis",
      percentage: "12%",
      description: "Inflammation of kidney filters",
    },
    {
      title: "Polycystic Kidney Disease",
      percentage: "5%",
      description: "Inherited condition with cysts",
    },
  ];

  const diagnosisData = [
    {
      title: "Blood Tests",
      description:
        "Measures Creatinine and Urea. A key indicator is the Glomerular Filtration Rate (GFR).",
      keyPoint: "GFR: Indicates kidney filtering ability.",
      icon: "🩸",
      tests: [
        "Serum Creatinine",
        "Blood Urea Nitrogen",
        "GFR Calculation",
        "Electrolytes",
      ],
    },
    {
      title: "Urine Tests",
      description:
        "Checks for protein (albuminuria) and blood in the urine, which are signs of kidney damage.",
      keyPoint: "Albuminuria: Protein in urine.",
      icon: "💧",
      tests: [
        "Urinalysis",
        "Protein/Creatinine Ratio",
        "Microalbumin Test",
        "24-hour Urine Collection",
      ],
    },
    {
      title: "Imaging & Biopsy",
      description:
        "Ultrasound checks kidney size and structure. A biopsy may be used to confirm the type of kidney disease.",
      keyPoint: "Ultrasound & Biopsy: Visualize damage.",
      icon: "📷",
      tests: ["Kidney Ultrasound", "CT Scan", "MRI", "Kidney Biopsy"],
    },
  ];

  const treatmentsData = [
    {
      type: "Hemodialysis",
      frequency: "3-4 times weekly",
      duration: "3-5 hours per session",
      location: "Dialysis Center",
      icon: "💉",
      benefits: [
        "Direct blood filtration",
        "Immediate waste removal",
        "Supervised medical care",
      ],
    },
    {
      type: "Peritoneal Dialysis",
      frequency: "Daily",
      duration: "Continuous",
      location: "Home",
      icon: "🔄",
      benefits: [
        "More flexible schedule",
        "Better mobility",
        "No vascular access needed",
      ],
    },
    {
      type: "Kidney Transplant",
      frequency: "One-time",
      duration: "Lifelong",
      location: "Hospital",
      icon: "🏥",
      benefits: [
        "Best quality of life",
        "No dialysis needed",
        "Normal kidney function",
      ],
    },
  ];

  const preventionTips = [
    {
      title: "Blood Pressure Control",
      tips: [
        "Keep below 140/90 mmHg",
        "Monitor regularly",
        "Take prescribed medications",
      ],
      icon: "📊",
    },
    {
      title: "Blood Sugar Management",
      tips: [
        "Maintain HbA1c < 7%",
        "Regular glucose monitoring",
        "Follow diabetic diet",
      ],
      icon: "📈",
    },
    {
      title: "Healthy Diet",
      tips: [
        "Low sodium intake",
        "Limit processed foods",
        "Adequate hydration",
      ],
      icon: "🥗",
    },
    {
      title: "Lifestyle Habits",
      tips: ["Regular exercise", "Maintain healthy weight", "Avoid smoking"],
      icon: "🏃",
    },
  ];

  const kidneyFacts = [
    {
      stat: "37M",
      label: "Americans with Kidney Disease",
      description: "About 15% of US adults",
    },
    {
      stat: "90%",
      label: "Don't Know They Have It",
      description: "Early stages often show no symptoms",
    },
    {
      stat: "2X",
      label: "Higher Risk for Diabetes",
      description: "Diabetics are twice as likely",
    },
    {
      stat: "5",
      label: "Stages of Kidney Disease",
      description: "Based on GFR levels",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-10 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900"></div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-green-200 text-sm font-medium">
                COMPREHENSIVE GUIDE
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Kidney Failure</span>
              <span className="block text-green-200 mt-2">Complete Guide</span>
            </h1>

            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Understanding symptoms, causes, diagnosis, and holistic treatment
              options for optimal kidney health.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection("symptoms")}
                className="px-6 py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300"
              >
                Recognize Symptoms
              </button>
              <button
                onClick={() => scrollToSection("prevention")}
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Prevention Tips
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "overview",
              "symptoms",
              "causes",
              "diagnosis",
              "treatment",
              "prevention",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === section
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                UNDERSTANDING KIDNEY FAILURE
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Kidney Failure?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kidney failure, also known as renal failure, occurs when one or
                both kidneys lose their ability to function effectively. This
                condition can develop suddenly (acute) or gradually over time
                (chronic).
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    Filters 120-150 quarts of blood daily
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    Produces 1-2 quarts of urine per day
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    Regulates blood pressure and electrolyte balance
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/img/kidney.png"
                  alt="Kidney Anatomy"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">Renal Function</p>
                  <p className="text-xl font-bold">Healthy vs. Diseased</p>
                </div>
              </div>

              {/* Kidney Facts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {kidneyFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="bg-green-50 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-green-700">
                      {fact.stat}
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      {fact.label}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {fact.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section
        id="symptoms"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              WARNING SIGNS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Symptoms of Kidney Failure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kidney disease often progresses silently. Recognizing symptoms
              early can lead to timely intervention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Early Stage Symptoms
                </h3>
              </div>
              <div className="space-y-3">
                {symptomsData.early.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-yellow-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🚨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Advanced Stage Symptoms
                </h3>
              </div>
              <div className="space-y-3">
                {symptomsData.advanced.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-red-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section id="causes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              RISK FACTORS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Main Causes of Kidney Failure
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causesData.map((cause, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-green-700 mb-2">
                    {cause.percentage}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {cause.title}
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  {cause.description}
                </p>

                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-1000"
                    style={{ width: cause.percentage }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section
        id="diagnosis"
        className="py-20 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              DIAGNOSTIC PROCESS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Kidney Failure is Diagnosed
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Early detection through routine tests is vital for slowing the
              progression of kidney disease.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {diagnosisData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-600"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-sm font-semibold text-green-700 mb-4">
                  {item.keyPoint}
                </p>

                <div className="space-y-2">
                  {item.tests.map((test, testIndex) => (
                    <div
                      key={testIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {test}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section
        id="treatment"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              TREATMENT OPTIONS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Managing Kidney Failure
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {treatmentsData.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{treatment.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {treatment.type}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Frequency: {treatment.frequency}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Duration: {treatment.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Location: {treatment.location}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-1">
                    {treatment.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevention" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              PREVENTION TIPS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preventing Kidney Disease
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preventionTips.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Siddha Products Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-green-700 text-white rounded-full text-sm font-semibold mb-4">
                SIDDHA FORMULATION
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Herbal Kidney Support
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Combining traditional herbal wisdom with modern research to
                support kidney health naturally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Crystomin Tablet
                  </h3>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Maintains healthy kidney function
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Supports urinary tract health
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Traditional herbal formulation
                  </li>
                </ul>
                <button className="w-full py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors">
                  Learn More
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">💊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Renal Support Formula
                  </h3>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Supports normal filtration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Maintains electrolyte balance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Promotes toxin elimination
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  View Product
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="relative w-40 h-40 mx-auto">
                  <img 
                    src="/assets/img/pooja_chalise.jpeg"
                    alt="Pooja Chalise"
                    className="w-full h-full object-cover rounded-full border-4 border-green-500 shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-3">
                  EXPERT AUTHOR
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Pooja Chalise
                </h3>
                <p className="text-green-700 font-semibold mb-3">
                  Pharmacist, QC Department
                </p>
                <p className="text-gray-600 mb-4">
                  With specialized training in nephrology and herbal medicine,
                  Pooja is dedicated to educating patients about kidney health
                  and holistic treatment approaches. She combines traditional
                  Ayurvedic knowledge with modern medical science.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Siddha Formulation Specialist since 2018
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Concerned About Your Kidney Health?
            </h2>
            <p className="text-xl text-green-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our experts at Siddha Formulation can help assess your risk and
              recommend personalized kidney support solutions based on your
              specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg inline-block"
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clipRule="evenodd"
                    />
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                  </svg>
                  Book Consultation
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollUpButton />
    </div>
  );
};

export default KidneyFailureGuide;
