import React from "react";
import { Link } from "react-router-dom";
import {
  productData,
  veterinaryProductData,
  classicalProductData,
} from "../productdata.js";

const ProductSection = ({ title, products }) => {
  const getProductDescription = (product) =>
    product.features?.[0] || "Details not available.";

  return (
    <>
      <h1 className="text-3xl border-b pb-5 font-bold text-green-700 mb-8 text-center">
        {title}
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="
              basis-full
              sm:basis-[calc(50%-1.5rem)]
              md:basis-[calc(33.333%-1.5rem)]
              lg:basis-[calc(25%-1.5rem)]
            "
          >
            <div
              className="bg-[#fcfbf7] border border-gray-100 rounded-lg p-3 md:p-4
                         hover:shadow-2xl hover:bg-green-50 transition-shadow duration-300
                         flex flex-col items-center text-center min-h-[300px]"
            >
              <div className="w-full flex justify-center mb-2">
                <div className="w-2/3 aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col grow justify-between items-center">
                <h2 className="text-base font-bold text-gray-800 line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-2 my-2">
                  {getProductDescription(product)}
                </p>

                <button
                  className="text-green-700 border border-green-700 text-sm font-semibold
                             px-4 py-1.5 rounded-sm hover:bg-green-700 hover:text-white
                             transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const ProductList = () => {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto min-h-screen bg-white">
      <ProductSection title="Patent Herbal Medicines" products={productData} />

      <div className="mt-12 border-t-2 border-gray-100 pt-5">
        <ProductSection
          title="Classical Herbal Medicines"
          products={classicalProductData}
        />
      </div>

      <div className="mt-12 border-t-2 border-gray-100 pt-5">
        <ProductSection
          title="Animal Herbal Medicines"
          products={veterinaryProductData}
        />
      </div>
    </div>
  );
};

export default ProductList;
