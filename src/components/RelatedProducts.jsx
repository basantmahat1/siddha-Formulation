import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productData } from "../productdata.js";

const RelatedProducts = ({ currentProductId, limit = 4 }) => {
  // Get random related products (excluding the current product)
  const relatedProducts = productData
    .filter((p) => p.id !== currentProductId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);

  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center uppercase">
          RELATED PRODUCTS
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          You might also like these products
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition"
                title="Add to wishlist"
              >
                <svg
                  className={`w-5 h-5 ${
                    wishlist[product.id] ? "fill-red-500 text-red-500" : "text-gray-400"
                  }`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>

              {/* Sale Badge */}
              {product.oldPrice && (
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Sale
                </div>
              )}

              {/* Product Image */}
              <Link to={`/product/${product.id}`} className="block bg-gray-50 h-40 flex items-center justify-center p-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Product Info */}
              <div className="p-3 flex-grow flex flex-col">
                {/* Title */}
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xs md:text-sm font-bold text-gray-900 line-clamp-2 mb-2 hover:text-green-700">
                    {product.title}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3 mt-auto">
                  <span className="text-sm md:text-base font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-1.5 rounded transition">
                  Add to Cart →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
