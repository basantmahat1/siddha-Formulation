import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Owner",
      image: "https://i.pravatar.cc/150?img=1",
      text: "The quality of products from Siddha Foundation is exceptional. I've been using their herbal medicines for the past 6 months and the results are outstanding. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Healthcare Professional",
      image: "https://i.pravatar.cc/150?img=5",
      text: "As a healthcare professional, I appreciate the authenticity and purity of Siddha's products. My patients have shown remarkable improvements after using these medicines.",
      rating: 5,
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Fitness Enthusiast",
      image: "https://i.pravatar.cc/150?img=3",
      text: "Excellent customer service and fast delivery. The herbal supplements have significantly boosted my immunity and energy levels. Worth every penny!",
      rating: 4,
    },
    {
      id: 4,
      name: "Sneha Desai",
      role: "Homemaker",
      image: "https://i.pravatar.cc/150?img=9",
      text: "I trust Siddha Foundation with my family's health. Their products are natural, safe, and highly effective. The entire family uses their products now.",
      rating: 5,
    },
    {
      id: 5,
      name: "Arjun Patel",
      role: "Student",
      image: "https://i.pravatar.cc/150?img=2",
      text: "Great products at affordable prices. The immunity booster has helped me stay healthy during tough study periods. Thank you, Siddha Foundation!",
      rating: 4,
    },
    {
      id: 6,
      name: "Meera Iyer",
      role: "Yoga Instructor",
      image: "https://i.pravatar.cc/150?img=7",
      text: "Perfect complement to my yoga practice. The herbal products align perfectly with my wellness philosophy. Absolutely love the brand!",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-green-700 font-semibold tracking-widest mb-2 uppercase">
            Customer Love
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Siddha Foundation for their health and wellness journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-24">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 pt-4 mb-4"></div>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <p className="text-4xl font-bold text-green-700 mb-2">10K+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-700 mb-2">4.8</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-700 mb-2">500+</p>
            <p className="text-gray-600">5-Star Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
