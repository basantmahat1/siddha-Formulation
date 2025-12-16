import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import {
  classicalProductData,
  productData,
  veterinaryProductData,
} from "../productdata.js";

// Merge all products
const allProducts = [
  ...productData,
  ...veterinaryProductData,
  ...classicalProductData,
];

// ----------------------------------------------------------------------
// CONTENT DATA
// ----------------------------------------------------------------------
const getContentData = (product) => [
  {
    title: "Therapeutic Category",
    content: <p>{product.details["Therapeutic Category"]}</p>,
  },
  {
    title: "Description",
    content: <p>{product.details.Description}</p>,
  },
  {
    title: "How It Works",
    content: <p>{product.details["How It Works"]}</p>,
  },
  {
    title: "Indication",
    content: <p>{product.details.Indication}</p>,
  },
  {
    title: "Dosage",
    content: <p>{product.details.Dosage}</p>,
  },
  {
    title: "Presentation",
    content: <p>{product.details.Presentation}</p>,
  },
];

// ----------------------------------------------------------------------
// PRODUCT DESCRIPTION (SCROLL ONLY HERE)
// ----------------------------------------------------------------------
const ProductDescription = ({ product }) => {
  const contentData = getContentData(product);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="my-4 border-t border-gray-200">
      {/* Tabs */}
      <div className="bg-gray-50 border-b border-gray-200 flex overflow-x-auto rounded-t-md mx-4 mt-3">
        {contentData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`py-2 px-4 text-xs font-semibold transition whitespace-nowrap ${
              index === activeTabIndex
                ? "bg-[#6e9e54] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* CONTENT BOX (ONLY THIS SCROLLS VERTICALLY) */}
      <div 
        className="bg-gray-50 mx-4 p-4 mb-5 md:p-6 rounded-b-lg text-sm leading-relaxed 
                   h-[120px] overflow-y-auto overflow-x-hidden"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#9ca3af #f3f4f6'
        }}
      >
        {contentData[activeTabIndex].content}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// MAIN PRODUCT DETAIL
// ----------------------------------------------------------------------
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id);

  const product = allProducts.find((p) => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) return <Navigate to="/" />;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => navigate(-1)}
      />

      {/* MODAL (NO SCROLL HERE) */}
      <div className="relative w-full max-w-[1100px] mx-4">
        {/* Close */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 right-3 z-50 bg-white rounded-full p-2 shadow"
        >
          ✕
        </button>

        <div
          className="bg-white rounded-lg border"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            to="/products"
            className="m-4 inline-block text-gray-700 font-semibold"
          >
            ← Back to all products
          </Link>

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 p-6 flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-[300px] object-contain"
              />
            </div>

            <div className="p-6">
              <h1 className="text-3xl md:text-5xl font-bold text-green-700">
                {product.title}
              </h1>

              <div className="mt-6">
                <h3 className="font-bold text-lg mb-2">Key Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* DESCRIPTION TABS (ONLY THIS AREA HAS SCROLL INSIDE) */}
          <ProductDescription product={product} />
        </div>
      </div>
    </div>
  );
};



export default ProductDetail;
