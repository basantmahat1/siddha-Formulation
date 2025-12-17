import React, { useState } from "react";

// ----------------------------------------------------------------------
const getContentData = (product) => [
  { title: "Therapeutic Category", content: <p>{product.details?.["Therapeutic Category"]}</p> },
  { title: "Description", content: <p>{product.details?.Description}</p> },
  {
    title: "How It Works",
    content: (
      <ul className="list-disc pl-5">
        {typeof product.details?.["How It Works"] === "string" 
          ? product.details["How It Works"].split(". ").map((point, idx) => point.trim() && <li key={idx}>{point}.</li>)
          : <li>{product.details?.["How It Works"]}</li>}
      </ul>
    ),
  },
  {
    title: "Indication",
    content: (
      <ul className="list-disc pl-5">
        {/* Check if it's a string before splitting */}
        {typeof product.details?.["Indication"] === "string" 
          ? product.details["Indication"].split(". ").map((point, idx) => point.trim() && <li key={idx}>{point}.</li>)
          : Array.isArray(product.details?.["Indication"])
            ? product.details["Indication"].map((point, idx) => <li key={idx}>{point}</li>)
            : <li>{product.details?.["Indication"]}</li>
        }
      </ul>
    ),
  },
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
    <div className="my-4 border-t border-gray-200">
      {/* Tabs */}
      <div className="bg-gray-50 border-b border-gray-200 flex overflow-x-auto rounded-t-md mx-4 mt-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {contentData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`py-2 px-4 text-1xl rounded-2xl font-semibold transition whitespace-nowrap flex-shrink-0 ${
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-[1100px] mx-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 bg-white rounded-full p-2 shadow"
        >
          ✕
        </button>

        <div className="bg-white rounded-lg border" onClick={(e) => e.stopPropagation()}>
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
              <h1 className="text-3xl md:text-3xl font-bold text-green-700">
                {product.title}
              </h1>

              <div className="mt-6">
                <h3 className="font-bold text-green-600 text-lg mb-2">Key Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* DESCRIPTION TABS */}
          <ProductDescription product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
