import React from "react";
import { Link } from "react-router-dom";
import { productData } from "../productdata.js"; // Ensure path is correct

const ProductList = () => {
  // Function to safely extract the first feature as a description
  const getProductDescription = (product) => {
    // We use the first item in the 'features' array as the description, if it exists.
    return product.features && product.features.length > 0
      ? product.features[0]
      : "Details not available.";
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Patent Herbal Medicines
      </h1>

      {/* Grid: 4 columns on large screens to match the reference images */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {productData.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block h-full group"
          >
            {/* Card Container: Minimal border, clean background, fixed min-height for uniformity */}
            <div
              className="bg-green-50 border border-gray-100 rounded-lg p-3 md:p-4 
                         hover:shadow-2xl  transition-shadow duration-300 
                         flex flex-col items-center text-center h-full min-h-[300px]"
            >
              {/* Image Container: Square aspect ratio, white/light background */}
              <div className="bg-green-50 w-full flex items-center justify-center p-2 mb-2">
                <div className="w-2/3 aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <div className=" flex flex-col grow justify-between items-center w-full">
                {/* Title */}
                <h2 className="text-base font-bold text-gray-800 line-clamp-2 mb-1">
                  {product.title}
                </h2>

                {/* Description (from first feature) */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-3 px-1 grow">
                  {getProductDescription(product)}
                </p>

                {/* Learn More Button (Green Border style from reference) */}
                <button
                  className="mt-3 text-green-700 border border-green-700 text-sm font-semibold 
                             px-4 py-1.5 rounded-sm hover:bg-green-700 hover:text-white 
                             transition duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
