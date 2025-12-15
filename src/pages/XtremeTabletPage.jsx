// pages/XtremeTabletPage.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollUpButton from "../common/ScrollUpButton";

const XtremeTabletPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "benefits", "ingredients", "usage", "faq"];
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

  const faqItems = [
    {
      question: "How quickly does Xtreme Tablet work?",
      answer:
        "Most users report noticeable improvements within 2-4 weeks of regular use. For optimal results, we recommend consistent use for at least 3 months. Individual response may vary based on factors like age, health status, and lifestyle.",
    },
    {
      question: "Is Xtreme Tablet safe for long-term use?",
      answer:
        "Yes, Xtreme Tablet is formulated with 100% natural ingredients that are safe for long-term use. Unlike synthetic alternatives, our Ayurvedic formula supports sexual health without harmful side effects or dependency.",
    },
    {
      question: "Can Xtreme Tablet help with premature ejaculation?",
      answer:
        "Absolutely. Xtreme Tablet contains ingredients like Ashwagandha and Safed Musli that help improve sexual stamina and control. Many users report significant improvement in ejaculatory control with regular use.",
    },
    {
      question:
        "Are there any dietary restrictions while taking Xtreme Tablet?",
      answer:
        "There are no specific dietary restrictions, but we recommend avoiding excessive alcohol and processed foods for optimal results. A balanced diet rich in fruits, vegetables, and lean proteins complements the benefits of Xtreme Tablet.",
    },
  ];

  const ingredients = [
    {
      name: "Withania Somnifera",
      common: "Ashwagandha",
      benefit: "Stress reduction & testosterone boost",
    },
    {
      name: "Mucuna Pruriens",
      common: "Kapikachu",
      benefit: "Natural L-Dopa for libido",
    },
    {
      name: "Chlorophytum Borivilianum",
      common: "Safed Musli",
      benefit: "Traditional aphrodisiac",
    },
    {
      name: "Tribulus Terrestris",
      common: "Gokharu",
      benefit: "Erectile function improvement",
    },
    {
      name: "Purified Asphaltum",
      common: "Shilajit",
      benefit: "Energy & stamina enhancement",
    },
    {
      name: "Myristica Fragrans",
      common: "Jatiphal",
      benefit: "Nervous system support",
    },
    {
      name: "Abhrak Bhasma",
      common: "Mica Ash",
      benefit: "Mineral supplementation",
    },
    {
      name: "Praval Bhasma",
      common: "Coral Calcium",
      benefit: "Bone health & vitality",
    },
    {
      name: "Cinnamomum Camphora",
      common: "Camphor",
      benefit: "Circulation improvement",
    },
    {
      name: "Swarna Bhasma",
      common: "Gold Ash",
      benefit: "Rejuvenation & vitality",
    },
  ];

  const benefits = [
    {
      icon: "💪",
      title: "Performance Enhancement",
      points: [
        "Stronger erections",
        "Increased stamina",
        "Improved control",
        "Enhanced satisfaction",
      ],
    },
    {
      icon: "⚡",
      title: "Hormonal Support",
      points: [
        "Testosterone boost",
        "Better sperm quality",
        "Reproductive health",
        "Overall vitality",
      ],
    },
    {
      icon: "🛡️",
      title: "Overall Wellness",
      points: [
        "Stress reduction",
        "Energy boost",
        "Muscle strength",
        "Cardiovascular support",
      ],
    },
    {
      icon: "🌿",
      title: "Natural Advantages",
      points: [
        "100% herbal ingredients",
        "No known side effects",
        "Non-habit forming",
        "Safe long-term use",
      ],
    },
  ];

  const ingredientHighlights = [
    {
      name: "Ashwagandha",
      benefit: "Reduces stress, boosts testosterone",
    },
    {
      name: "Shilajit",
      benefit: "Enhances energy and stamina",
    },
    {
      name: "Kapikachu",
      benefit: "Natural source of L-Dopa for libido",
    },
    {
      name: "Safed Musli",
      benefit: "Traditional aphrodisiac",
    },
    {
      name: "Gokharu",
      benefit: "Improves erectile function",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-10 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-600/20 backdrop-blur-sm mb-4 gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-green-200 text-sm font-medium">
                POWERFUL AYURVEDIC FORMULA
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="block">Xtreme Tablet</span>
              <span className="block text-green-200 mt-1">
                For Enhanced Sexual Wellness
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-6 leading-relaxed">
              Powerful Ayurvedic formula for improved libido, performance, and
              male vitality
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => scrollToSection("benefits")}
                className="px-6 py-2 md:px-8 md:py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Explore Benefits
              </button>
              <Link
                to="/contact"
                className="px-6 py-2 md:px-8 md:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {["overview", "benefits", "ingredients", "usage", "faq"].map(
              (section) => (
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
              )
            )}
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
                WHAT IS XTREME TABLET?
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Premium Ayurvedic Solution for Male Vitality
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Xtreme Tablet is a premium Ayurvedic formulation designed to
                address sexual dysfunction in men, particularly those aged 40
                and above, though effective for adult men of all ages. This
                scientifically crafted herbal supplement combines ancient wisdom
                with modern research to deliver comprehensive sexual wellness
                benefits.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our unique formula contains potent natural ingredients like{" "}
                <strong>Withania Somnifera (Ashwagandha)</strong>,{" "}
                <strong>Mucuna Pruriens (Kapikachu)</strong>, and{" "}
                <strong>Purified Asphaltum (Shudha Shilajit)</strong> that work
                synergistically to enhance sexual performance, improve erectile
                function, and boost overall libido.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  How Xtreme Tablet Works
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Enhances blood flow to genital areas for stronger
                      erections
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Stimulates testosterone production naturally</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Improves sexual desire and performance stamina</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Supports reproductive system health</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Reduces performance anxiety and stress</span>
                  </li>
                </ul>
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
                  src="../src/assets/img/xtreme.jpg"
                  alt="Xtreme Tablet"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">Xtreme Tablet</p>
                  <p className="text-xl font-bold">
                    100% Natural & Safe Ayurvedic Formula
                  </p>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">10+</div>
                  <div className="text-sm text-gray-600">Active Herbs</div>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div className="absolute -bottom-6 -right-6 bg-green-700 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-sm opacity-90">Satisfied Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-20 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              KEY BENEFITS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Xtreme Tablet?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Xtreme Tablet offers comprehensive support for male sexual health
              with multiple scientifically-backed benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <ul className="space-y-2">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
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
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              POWERFUL FORMULATION
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Ingredients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Xtreme Tablet combines the most potent Ayurvedic herbs known for
              their sexual wellness benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-green-100 hover:border-green-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <span className="text-green-700 text-lg">🌿</span>
                  </div>
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">
                    AYURVEDIC
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {ingredient.common}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{ingredient.name}</p>
                <p className="text-xs text-green-700">{ingredient.benefit}</p>
              </motion.div>
            ))}
          </div>

          {/* Ingredient Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ingredient Highlights
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {ingredientHighlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-700 text-2xl">🌿</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {highlight.name}
                  </h4>
                  <p className="text-sm text-gray-600">{highlight.benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Image Section */}
          <div className="mt-12 text-center">
            <img
              src="../src/assets/img/naturalhearb.webp"
              alt="Herbal Ingredients"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl"
            />
            <p className="text-gray-600 mt-4">
              Premium quality Ayurvedic herbs
            </p>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section
        id="usage"
        className="py-20 bg-gradient-to-r from-green-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              RECOMMENDED USE
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dosage & Guidelines
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For optimal results, follow these usage guidelines for Xtreme
              Tablet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Recommended Dosage
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      1 Tablet Twice Daily
                    </p>
                    <p className="text-sm text-gray-600">
                      With warm water or milk
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">After Meals</p>
                    <p className="text-sm text-gray-600">
                      Preferably after breakfast and dinner
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Consistent Use
                    </p>
                    <p className="text-sm text-gray-600">
                      For optimal results, continue for 3 months
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Professional Advice
                    </p>
                    <p className="text-sm text-gray-600">
                      Or as directed by physician
                    </p>
                  </div>
                </div>
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
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Safety Information
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-gray-900 flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    No Known Side Effects
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    100% natural formulation ensures safety
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-gray-900 flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Safe for Long-Term Use
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Formulated for continuous wellness support
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-gray-900 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Consult Physician
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Before use if pregnant, nursing, or under medication
                  </p>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="font-semibold text-gray-900 flex items-center">
                    <svg
                      className="w-5 h-5 text-red-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Keep Away From Children
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Store in a cool, dry place out of children's reach
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Best Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                For Best Results
              </h3>
            </div>
            <p className="text-lg text-gray-700">
              Combine Xtreme Tablet with a healthy lifestyle including balanced
              diet, regular exercise, stress management, and adequate sleep for
              maximum benefits. Results may vary based on individual factors and
              consistency of use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              COMMON QUESTIONS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about Xtreme Tablet
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() =>
                    setActiveTab(
                      activeTab === `faq-${index}` ? "" : `faq-${index}`
                    )
                  }
                >
                  <span className="font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-green-600 transform transition-transform ${
                      activeTab === `faq-${index}` ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeTab === `faq-${index}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 py-4 bg-white">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
                    src="../src/assets/img/suman_poudel.jpeg"
                    alt="Suman Poudel"
                    className="w-full h-full object-cover rounded-full border-4 border-green-500 shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-3">
                  ABOUT THE AUTHOR
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Suman Poudel
                </h3>
                <p className="text-green-700 font-semibold mb-3">
                  Marketing Representative
                </p>
                <p className="text-gray-700 mb-2">
                  Siddha Formulation - Butwal HQ
                </p>
                <p className="text-gray-600 mb-4">
                  With extensive knowledge in Ayurvedic formulations and men's
                  health, Suman is dedicated to helping individuals achieve
                  optimal wellness through natural solutions.
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
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Sexual Wellness?
            </h2>
            <p className="text-xl text-green-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the natural power of Ayurveda with Xtreme Tablet
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
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Get Xtreme Tablet Now
                </div>
              </Link>
              <button
                onClick={() => scrollToSection("faq")}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            <div className="mt-10 flex justify-center space-x-8 text-green-200">
              <div className="text-center"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Natural Ingredients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm">Years Ayurvedic Expertise</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollUpButton />
    </div>
  );
};

export default XtremeTabletPage;
