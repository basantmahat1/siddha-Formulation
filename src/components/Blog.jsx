import React from "react";
import { Link } from "react-router-dom";
import blogDetails from "../data/blogDetails";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 font-serif">
            Siddha Foundation Blog
          </h1>
          <p className="text-green-200 text-lg md:text-xl">
            Insights, tips, and stories about Siddha herbal medicines and holistic wellness.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-5xl mx-auto px-4 md:px-0 py-16 grid gap-10">
        {blogDetails.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold text-green-800 hover:text-green-700 transition-colors">
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <div className="text-sm text-gray-500 mt-1">{post.date}</div>
            <p className="mt-4 text-gray-700 leading-relaxed">{post.excerpt}</p>
            <div className="mt-6">
              <Link
                to={`/blog/${post.id}`}
                className="text-green-700 font-semibold hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-green-100 py-12 mt-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Want to learn more about Siddha Herbal Excellence?
          </h2>
          <p className="text-green-800 mb-6">
            Explore our products, tips, and stories to improve your wellness journey.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
