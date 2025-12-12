import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      bio: "20+ years of experience in Ayurvedic medicine and herbal formulation.",
      image: "https://i.pravatar.cc/150?img=10",
      specialization: "Herbal Medicine Expert",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      role: "Chief Medical Officer",
      bio: "Expert in traditional Ayurvedic practices and modern quality standards.",
      image: "https://i.pravatar.cc/150?img=20",
      specialization: "Ayurvedic Consultant",
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "Head of Operations",
      bio: "Ensures smooth operations and timely delivery of products to customers.",
      image: "https://i.pravatar.cc/150?img=15",
      specialization: "Operations Manager",
    },
    {
      id: 4,
      name: "Sneha Desai",
      role: "Customer Relations Manager",
      bio: "Dedicated to providing excellent customer service and support.",
      image: "https://i.pravatar.cc/150?img=25",
      specialization: "Customer Success",
    },
  ];

  const values = [
    {
      icon: "🌿",
      title: "100% Natural",
      description: "All our products are made from pure, natural herbal ingredients without synthetic additives.",
      color: "green",
    },
    {
      icon: "✓",
      title: "Quality Assured",
      description: "We maintain the highest quality standards in every batch with rigorous testing.",
      color: "blue",
    },
    {
      icon: "🏥",
      title: "Ayurvedic Excellence",
      description: "Traditional Ayurvedic knowledge combined with modern scientific research.",
      color: "purple",
    },
    {
      icon: "💚",
      title: "Customer Care",
      description: "Your health and satisfaction is our top priority and commitment.",
      color: "red",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Siddha Foundation</h1>
          <p className="text-green-100 text-xl">Bringing Traditional Ayurvedic Wellness to Modern Life</p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Company Story */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-green-600 rounded"></div>
                  <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Siddha Foundation was established with a mission to preserve and promote the ancient science of Ayurveda. 
                  With over two decades of experience in herbal medicine formulation, our founder Dr. Rajesh Kumar envisioned 
                  creating a brand that bridges traditional Ayurvedic knowledge with modern quality standards.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  We believe that wellness should be accessible to everyone. That's why we source the finest herbal ingredients 
                  from trusted suppliers across India and manufacture them with the utmost care and precision.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Today, Siddha Foundation serves thousands of customers who trust us with their health and wellness journey. 
                  Our commitment remains unwavering: to deliver authentic, effective, and affordable Ayurvedic medicines to 
                  improve lives and promote holistic well-being.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center overflow-hidden">
  <img 
    src="../src/assets/img/img-1about.jpg" 
    alt="Siddha Foundation Office" 
    className="w-full h-full object-cover"
  />
</div>

            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border-t-4 border-green-600">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide authentic, high-quality Ayurvedic medicines that promote health, wellness, and longevity while 
                preserving ancient healing traditions for generations to come.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border-t-4 border-blue-600">
              <div className="text-6xl mb-6">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become India's most trusted Ayurvedic brand, making natural wellness accessible to millions of people 
                worldwide and transforming lives through holistic health.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border-t-4 border-purple-600">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Integrity, Quality, Customer Care, Innovation, and Sustainability guide every decision we make for your wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Why Choose Siddha Foundation?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">We are committed to delivering excellence in every aspect of our business</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center border-l-4 border-green-600">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20 py-16 bg-white rounded-2xl shadow-lg">
          <div className="px-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Meet Our Expert Team</h2>
            <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto text-lg">
              Our dedicated team of Ayurvedic experts, medical professionals, and wellness enthusiasts work tirelessly to 
              deliver the best products and services to our valued customers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="text-center group"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-green-600 group-hover:border-green-700 transition shadow-lg"
                    />
                    {hoveredMember === member.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full mx-auto w-40 h-40 transition">
                        <span className="text-white text-xs font-semibold text-center">{member.specialization}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-16 mb-20 shadow-lg">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-5xl font-bold mb-3">10K+</div>
              <p className="text-green-100 font-medium">Happy Customers</p>
              <p className="text-xs text-green-200 mt-2">Worldwide</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-5xl font-bold mb-3">50+</div>
              <p className="text-green-100 font-medium">Premium Products</p>
              <p className="text-xs text-green-200 mt-2">Ayurvedic Range</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-5xl font-bold mb-3">20+</div>
              <p className="text-green-100 font-medium">Years Experience</p>
              <p className="text-xs text-green-200 mt-2">Industry Leading</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-5xl font-bold mb-3">100%</div>
              <p className="text-green-100 font-medium">Natural & Pure</p>
              <p className="text-xs text-green-200 mt-2">No Additives</p>
            </div>
          </div>
        </section>

        {/* Certifications & Standards */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Certifications & Standards</h2>
          <p className="text-center text-gray-600 mb-12">Quality assurance and international certifications</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-green-600 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-6xl mb-6">✓</div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">ISO 9001 Certified</h3>
              <p className="text-gray-600 text-sm leading-relaxed">International quality management standards compliance</p>
            </div>
            <div className="bg-white border-2 border-green-600 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-6xl mb-6">✓</div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">GMP Approved</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Good Manufacturing Practice certification for excellence</p>
            </div>
            <div className="bg-white border-2 border-green-600 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-6xl mb-6">✓</div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Ayurveda Board Registered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Certified by Indian Ayurvedic Board authority</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-16 text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-6">Join Our Wellness Journey</h2>
          <p className="text-green-100 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover the transformative power of Ayurveda and experience natural wellness like never before. 
            Explore our premium collection of products and start your journey to better health and vitality today.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-green-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg"
          >
            Explore Our Products
          </Link>
        </section>
      </div>
    </div>
  );
}
