import React from "react";
import { Link } from "react-router-dom";
import { productData } from "../productdata.js";

const LatestProducts = () => {
  // Get only the latest 6 products (reverse array to get newest first, then slice 6)
  const latestProducts = [...productData].reverse().slice(0, 6);

  // Function to safely extract the first feature as a description
  const getProductDescription = (product) => {
    return product.features && product.features.length > 0
      ? product.features[0]
      : "Details not available.";
  };

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto bg-gradient-to-b from-white to-green-50">
      <div className="text-center mb-12">
        <p className="text-green-600 font-bold text-sm uppercase tracking-widest mb-2">Our Collection</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Latest Products
        </h1>
        <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
          Discover our newest herbal medicines and premium wellness products crafted for your health
        </p>
      </div>

      {/* Grid: responsive columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
        {latestProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block h-full group"
          >
            {/* Card Container */}
            <div
              className="bg-white border border-gray-100 rounded-2xl p-4 md:p-6 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                         flex flex-col items-center text-center h-full min-h-[320px]"
            >
              {/* Image Container */}
              <div className="bg-white w-full flex items-center justify-center p-2 mb-2">
                <div className="w-2/3 aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-between items-center w-full">
                {/* Title */}
                <h2 className="text-base font-bold text-gray-900 line-clamp-2 mb-3">
                  {product.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-4 px-1 flex-grow">
                  {getProductDescription(product)}
                </p>

                {/* Learn More Button */}
                <button
                  className="mt-auto text-green-700 border-2 border-green-700 text-sm font-bold 
                             px-5 py-2 rounded-lg hover:bg-green-700 hover:text-white 
                             transition-all duration-200 hover:shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="text-center mt-12">
        <Link
          to="/products"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-800 transition"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
