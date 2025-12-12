import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { productData } from "../productdata.js";
import RelatedProducts from "../components/RelatedProducts";

// ----------------------------------------------------------------------
// 1. CONTENT DATA DEFINITION (Unchanged)
// ----------------------------------------------------------------------

const getContentData = (product) => [
  {
    // Fetching data from product.details["Therapeutic Category"]
    title: "Therapeutic Category",
    content: (
      <p className="text-sm text-gray-700">
        {product.details["Therapeutic Category"]}
      </p>
    ),
  },
  {
    // Fetching data from product.details.Description
    title: "Description",
    content: (
      <p className="text-sm text-gray-700">{product.details.Description}</p>
    ),
  },
  {
    // Fetching data from product.details["How It Works"]
    title: "How It Works",
    content: (
      <p className="text-sm text-gray-700">{product.details["How It Works"]}</p>
    ),
  },
  {
    // Fetching data from product.details.Indication
    title: "Indication",
    content: (
      <p className="text-sm text-gray-700">{product.details.Indication}</p>
    ),
  },
  {
    // Fetching data from product.details.Dosage
    title: "Dosage",
    content: <p className="text-sm text-gray-700">{product.details.Dosage}</p>,
  },
  {
    // Fetching data from product.details.Presentation
    title: "Presentation",
    content: (
      <p className="text-sm text-gray-700">{product.details.Presentation}</p>
    ),
  },
  // Placeholder for an Ingredients tab (assuming you will add this key later)
  // {
  //   title: "Ingredients",
  //   content: (
  //     <p className="text-sm text-gray-700">
  //       The ingredients list for {product.title} is coming soon. Currently,
  //       specific ingredient data is not available in the `productData`
  //       structure, but we are ready to display it here when added.
  //     </p>
  //   ),
  // },
];

// ----------------------------------------------------------------------
// 2. NEW PRODUCT DETAILS COMPONENT (Custom Tabs) - Unchanged
// ----------------------------------------------------------------------

const ProductDetails = ({ product }) => {
  // Get the structured content
  const contentData = getContentData(product);
  // State to track which tab is currently active
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // If the data is empty (no content tabs defined), don't render the section
  if (contentData.length === 0) return null;

  return (
    <div className="max-w-[1100px] mx-auto w-full px-6 md:px-0 mt-8">
      {/* --- Tab / Heading Bar --- */}
      <div className="flex border-b border-gray-300 overflow-x-auto whitespace-nowrap mb-6">
        {contentData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`
              py-2 px-4 font-semibold text-sm cursor-pointer transition duration-150 ease-in-out
              ${
                index === activeTabIndex
                  ? "bg-[#6e9e54] text-white" // Active (Green background, white text)
                  : "text-gray-600 hover:text-gray-900 bg-gray-50" // Inactive (Light background, dark text)
              }
              ${index === activeTabIndex && index === 0 ? "rounded-tl-md" : ""}
            `}
            // Style to make the active tab visually overlap the border underneath it
            style={
              index === activeTabIndex
                ? {
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% + 1px), 0 calc(100% + 1px))",
                  }
                : {}
            }
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* --- Content Area (No inner H3 heading) --- */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
        {contentData[activeTabIndex].content}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. PRODUCT CARD COMPONENT (Unchanged)
// ----------------------------------------------------------------------

const RelatedProductCard = ({ product }) => (
  <Link
    to={`/product/${product.id}`}
    className="w-full border border-gray-200 rounded-lg p-3 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
  >
    <div className="relative w-full h-32 mb-4 flex items-center justify-center">
      {/* Image display */}
      <img
        src={product.image}
        alt={product.title}
        className="max-h-full max-w-full object-contain"
      />
      {/* Display Sale tag if oldPrice exists */}
      {product.oldPrice && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl">
          Sale
        </span>
      )}
    </div>

    {/* Title: Enforce consistent height */}
    <h4 className="text-sm font-semibold text-gray-800 h-10 overflow-hidden leading-tight mb-1 line-clamp-2">
      {product.title}
    </h4>

    {/* Display Feature/Description here (above price) */}
    <p className="text-xs text-gray-500 mb-2 h-8 overflow-hidden line-clamp-2">
      {/* Assuming the product object has a 'description' or similar short text field for the card. 
            If not, you may need to adjust your productData structure. */}
      {product.description ||
        product.shortDescription ||
        product.features[0] ||
        "Short description coming soon."}
    </p>

    {/* Price display */}
    <div className="flex justify-center items-baseline my-1 mb-3 grow">
      <span className="text-lg font-bold text-gray-900 mr-2">
        ${product.price.toFixed(2)}
      </span>
      {product.oldPrice && (
        <span className="text-xs text-gray-400 line-through">
          ${product.oldPrice.toFixed(2)}
        </span>
      )}
    </div>

    {/* Action Button */}
    <div className="w-full text-sm bg-white border border-[#6e9e54] text-[#6e9e54] py-2 px-4 rounded-md hover:bg-[#eaf4e6] transition font-semibold mt-auto">
      Learn More
    </div>
  </Link>
);

// ----------------------------------------------------------------------
// 4. RELATED PRODUCTS SECTION (Unchanged)
// ----------------------------------------------------------------------

const RelatedProduct = ({ currentProductId }) => {
  // Logic: Exclude the current product and get up to 8 items
  const relatedItems = productData
    .filter((item) => item.id !== currentProductId)
    .slice(0, 8);

  if (!relatedItems || relatedItems.length === 0) {
    return null;
  }

  return (
    // The full-width wrapper for the section
    <div className="mt-12 pt-6 border-t border-gray-200 w-full">
      {/* CONTENT CONTAINER: Constrained and Centered for alignment */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-0">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-1 uppercase tracking-wider text-center">
          RELATED PRODUCTS
        </h2>
        <p className="text-gray-500 text-sm mb-8 text-center">
          The herbal choice is a healthy choice.
        </p>

        {/* PRODUCT GRID: Responsive Grid Layout */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {relatedItems.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 5. MAIN ProductDetail COMPONENT (UPDATED)
// ----------------------------------------------------------------------

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productData.find((p) => p.id === productId);

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  if (!product) {
    return <Navigate to="/" />;
  }

  const handleDecrement = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 font-sans relative pb-32">
      {/* Back Button */}
      <Link
        to="/"
        className="self-start m-4 md:m-8 flex items-center text-gray-700 font-semibold hover:text-gray-900 transition"
      >
        ← Back to all products
      </Link>

      {/* --- MAIN PRODUCT DETAIL CARD --- */}
      <div className="bg-white rounded-lg shadow-xl max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden mt-0 md:mt-4">
        {/* Left: Image Container */}
        <div className="bg-[#fcfbf7] p-8 flex items-center justify-center relative overflow-hidden">
          <div className="w-full aspect-square flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full max-h-full object-contain p-4"
            />
          </div>
        </div>

        {/* Right: Details */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1
            className="text-3xl font-semibold text-gray-900 leading-tight mb-2 
              line-clamp-2 md:line-clamp-none"
          >
            {product.title}
          </h1>

          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 text-lg mr-3">
              {[...Array(product.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              {[...Array(5 - product.rating)].map((_, i) => (
                <span key={i} className="text-gray-300">
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.reviewCount} Reviews)
            </span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-xl text-gray-400 line-through decoration-1">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
            {product.bundleTag && (
              <span className="bg-[#6e9e54] text-white text-sm font-semibold px-3 py-1 rounded-sm">
                {product.bundleTag}
              </span>
            )}
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm mb-8">
            {Object.entries(product.meta).map(([key, value]) => (
              <React.Fragment key={key}>
                <span className="font-bold text-gray-700 text-xs tracking-wide uppercase">
                  {key}:
                </span>
                <span className="text-gray-600">{value}</span>
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center border border-gray-300 bg-gray-50 h-11 w-auto">
              <button
                onClick={handleDecrement}
                className="w-8 h-full hover:bg-gray-200 text-gray-600 transition"
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={qty}
                className="w-10 h-full text-center bg-transparent font-semibold text-gray-700 focus:outline-none"
              />
              <button
                onClick={handleIncrement}
                className="w-8 h-full hover:bg-gray-200 text-gray-600 transition"
              >
                +
              </button>
            </div>
            <button className="h-11 px-5 bg-[#6e9e54] hover:bg-[#5c8546] text-white font-semibold rounded-sm transition flex items-center gap-2">
              Add to Cart →
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 font-semibold transition ${
                activeTab === "reviews"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Product Reviews
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`pb-4 font-semibold transition ${
                activeTab === "shipping"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Shipping and Returns
            </button>
          </div>

          {/* Display Key Features/Benefits here (below buttons) */}
          <h3 className="text-md font-bold text-gray-800 uppercase tracking-wider mb-2 pt-4 mt-4 border-t border-gray-100">
            Key Benefits
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 mb-8 list-disc pl-4 marker:text-[#6e9e54]">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* --- REMOVED PAYMENT OPTIONS --- */}
          {/* <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 opacity-75">
            {product.paymentMethods.map((method, index) => (
              <span
                key={index}
                className="border border-gray-200 bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-600"
              >
                {method}
              </span>
            ))}
          </div> */}
          {/* --- END REMOVED PAYMENT OPTIONS --- */}
        </div>
      </div>

      {/* --- DYNAMIC PRODUCT DETAILS SECTION (Tabs) --- */}
      <ProductDetails product={product} />

      {/* RELATED PRODUCTS SECTION */}
      <RelatedProducts currentProductId={productId} />
    </div>
  );
};

export default ProductDetail;
