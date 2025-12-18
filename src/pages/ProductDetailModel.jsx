import React, { useState } from "react";
import {  X } from "lucide-react";

// ----------------------------------------------------------------------
const getContentData = (product) => [
  {
    title: "Therapeutic Category",
    content: <p>{product.details?.["Therapeutic Category"]}</p>,
  },
  { title: "Description", content: <p>{product.details?.Description}</p> },
  {
  title: "How It Works",
  content: (
    <ul className="list-disc pl-5">
      {product.details?.["How It Works"] ? (
        typeof product.details["How It Works"] === "string" ? (
          product.details["How It Works"]
            .split(". ")
            .map((point, idx) => point.trim() && <li key={idx}>{point}.</li>)
        ) : Array.isArray(product.details?.["How It Works"]) ? (
          product.details["How It Works"].map((point, idx) => (
            <li key={idx}>{point}</li>
          ))
        ) : (
          <li>{product.details["How It Works"]}</li>
        )
      ) : (
        <li>Details not available.</li>
      )}
    </ul>
  ),
}
,
 {
  title: "Indication",
  content: (
    <ul className="list-disc pl-5">
      {product.details?.["Indication"] ? (
        typeof product.details["Indication"] === "string" ? (
          product.details["Indication"]
            .split(/\. |\.\n/) // split on ". " or ".\n"
            .filter(Boolean)   // remove empty strings
            .map((point, idx) => <li key={idx}>{point.trim()}.</li>)
        ) : Array.isArray(product.details["Indication"]) ? (
          product.details["Indication"].map((point, idx) => <li key={idx}>{point}</li>)
        ) : (
          <li>{product.details["Indication"]}</li>
        )
      ) : (
        <li>Details not available.</li>
      )}
    </ul>
  ),
}
,
  { title: "Dosage", content: <p>{product.details?.Dosage}</p> },
  { title: "Presentation", content: <p>{product.details?.Presentation}</p> },
];

// ----------------------------------------------------------------------
// PRODUCT DESCRIPTION (SCROLL ONLY HERE)
// ----------------------------------------------------------------------
const ProductDescription = ({ product }) => {
  const contentData = getContentData(product);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="my-4 border-t border-gray-200 font-serif">
      {/* Tabs */}
      <div className="bg-gray-50 border-b border-gray-200 flex overflow-x-auto rounded-t-md mx-4 mt-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {contentData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`py-2 px-4 text-1xl  font-semibold transition whitespace-nowrap flex-shrink-0 ${
              index === activeTabIndex
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* CONTENT BOX */}
      <div
        className="bg-gray-50 mx-4 p-4 mb-5 md:p-6 rounded-b-lg text-1xl leading-relaxed h-[120px] overflow-y-auto overflow-x-hidden"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#9ca3af #f3f4f6",
        }}
      >
        {contentData[activeTabIndex].content}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// MAIN PRODUCT MODAL
// ----------------------------------------------------------------------
const ProductDetailModal = ({ product, onClose }) => {
  return (
 <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center">
  {/* Backdrop */}
  <div className="absolute inset-0 bg-black/50" onClick={onClose} />

  {/* Modal */}
  <div className="relative w-full max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] mx-auto">
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-3 right-3 z-50  p-2 bg-white/80  transition"
    >
      <X className="h-6 w-6 text-black hover:text-red-600" />
    </button>

    {/* Modal Content */}
    <div
      className="bg-white rounded-lg overflow-hidden max-h-[calc(100vh-32px)] md:max-h-[90vh] flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* TOP SECTION: Image + Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="bg-gray-50 p-4 sm:p-6 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[180px] sm:max-h-[220px] md:max-h-[300px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
            {product.title}
          </h1>

          <div className="mt-3 md:mt-6">
            <h3 className="font-bold text-green-600 text-lg md:text-xl mb-2">
              Key Benefits
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
              {product.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* DESCRIPTION TABS */}
      <div className="flex-1 overflow-y-auto">
        <ProductDescription product={product} />
      </div>
    </div>
  </div>
</div> 
  );
};

export default ProductDetailModal;
