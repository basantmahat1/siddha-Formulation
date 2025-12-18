import React, { useState } from "react";
import { productData } from "../productdata.js";
import ProductDetailModal from "../pages/ProductDetailModel.jsx";

const LatestProducts = () => {
  const latestProducts = [...productData].reverse().slice(0, 6);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProductDescription = (product) =>
    product.features?.[0] || "Details not available.";

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto font-serif">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-gray-700 font-bold text-base md:text-lg uppercase tracking-widest mb-2">
          Our Collection
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Latest Products
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Discover our newest herbal medicines and premium wellness products
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {latestProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="group cursor-pointer"
          >
            <div
              className="
                relative
                hover:bg-green-50
                border
                border-gray-100
                bg-gray-200
                hover:border-green-300
                rounded-lg
                p-4 md:p-5
                flex flex-col items-center text-center
                min-h-[300px]
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="w-full h-40 md:h-48 flex items-center justify-center mb-4 rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full min-w-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-grow justify-between w-full">
                <div>
                  <h2 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2 mb-1 transition group-hover:text-green-700">
                    {product.title}
                  </h2>

                  <p className="text-xs md:text-[15px] text-gray-700 line-clamp-2 h-12 mb-3 leading-relaxed group-hover:text-gray-800">
                    {getProductDescription(product)}
                  </p>
                </div>

                {/* Button */}
                <button
                  className="w-full mt-auto px-4 py-2 rounded-md border-2 border-green-700
                             text-green-700 font-semibold
                             hover:bg-green-800 hover:text-white hover:shadow-md
                             transition-all duration-300 tracking-wider"
                  type="button"
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default LatestProducts;
