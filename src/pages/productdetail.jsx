import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { productData } from "../productdata.js";

// ----------------------------------------------------------------------
// 1. CONTENT DATA DEFINITION (Unchanged)
// ----------------------------------------------------------------------

const getContentData = (product) => [
  {
    title: "Therapeutic Category",
    content: (
      <p className="text-sm text-gray-700">
        {product.details["Therapeutic Category"]}
      </p>
    ),
  },
  {
    title: "Description",
    content: (
      <p className="text-sm text-gray-700">{product.details.Description}</p>
    ),
  },
  {
    title: "How It Works",
    content: (
      <p className="text-sm text-gray-700">{product.details["How It Works"]}</p>
    ),
  },
  {
    title: "Indication",
    content: (
      <p className="text-sm text-gray-700">{product.details.Indication}</p>
    ),
  },
  {
    title: "Dosage",
    content: <p className="text-sm text-gray-700">{product.details.Dosage}</p>,
  },
  {
    title: "Presentation",
    content: (
      <p className="text-sm text-gray-700">{product.details.Presentation}</p>
    ),
  },
];

// ----------------------------------------------------------------------
// 2. PRODUCT DETAILS COMPONENT (Custom Tabs) - FINAL FIX
// ----------------------------------------------------------------------

const ProductDescription = ({ product }) => {
  const contentData = getContentData(product);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (contentData.length === 0) return null;

  return (
    <div className="my-4 border-t  border-gray-200">
      <div className="w-full mt-4 ">
        {/* Tab / Heading Bar: Removed px-6 md:px-12 to ensure it spans full width of the master container */}
        <div className="bg-gray-50 border-b border-gray-200 flex mx-4 md:mx-4  overflow-x-auto whitespace-nowrap rounded-t-md">
          {contentData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className={`
              py-2 px-4 font-semibold text-sm cursor-pointer transition duration-150 ease-in-out
              ${
                index === activeTabIndex
                  ? "bg-[#6e9e54] text-white"
                  : "text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
              }
              ${index === activeTabIndex && index === 0 ? "rounded-tl-md" : ""}
            `}
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
          <div className="grow "></div>{" "}
        </div>

        {/* Content Area: Restored padding p-6 md:p-12 */}
        <div className="mt-1 bg-[#fcfbf7] p-6 md:py-12 rounded-b-lg   mx-4">
          {contentData[activeTabIndex].content}
        </div>
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
      <img
        src={product.image}
        alt={product.title}
        className="max-h-full max-w-full object-contain"
      />
      {product.oldPrice && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl">
          Sale
        </span>
      )}
    </div>

    <h4 className="text-sm font-semibold text-gray-800 h-10 overflow-hidden leading-tight mb-1 line-clamp-2">
      {product.title}
    </h4>

    <p className="text-xs text-gray-500 mb-2 h-8 overflow-hidden line-clamp-2">
      {product.description ||
        product.shortDescription ||
        product.features[0] ||
        "Short description coming soon."}
    </p>

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

    <div className="w-full text-sm bg-white border border-[#6e9e54] text-[#6e9e54] py-2 px-4 rounded-md hover:bg-[#eaf4e6] transition font-semibold mt-auto">
      Learn More
    </div>
  </Link>
);

// ----------------------------------------------------------------------
// 4. RELATED PRODUCTS SECTION (Unchanged)
// ----------------------------------------------------------------------

const RelatedProducts = ({ currentProductId }) => {
  const relatedItems = productData
    .filter((item) => item.id !== currentProductId)
    .slice(0, 8);

  if (!relatedItems || relatedItems.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-6 border-t border-gray-200 w-full">
      <div className="max-w-[1100px] mx-auto px-6 md:px-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-1 uppercase tracking-wider text-center">
          RELATED PRODUCTS
        </h2>
        <p className="text-gray-500 text-sm mb-8 text-center">
          The herbal choice is a healthy choice.
        </p>
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
// 5. MAIN ProductDetail COMPONENT - ITEMS REMOVED
// ----------------------------------------------------------------------

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productData.find((p) => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-6 font-sans relative pb-32">
      {/* Back Button */}
      <Link
        to="/"
        className="self-start m-4 md:m-8 flex items-center text-gray-700 font-semibold hover:text-gray-900 transition max-w-[1100px] w-full"
      >
        ← Back to all products
      </Link>

      {/* --- MASTER CONTAINER FOR PRODUCT DETAILS + TABS (Structural classes) --- */}
      <div className="bg-white rounded-lg shadow-xl max-w-[1100px] w-full mt-0 md:mt-4 overflow-hidden">
        {/* --- TOP SECTION: MAIN PRODUCT INFO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image Container */}
          <div className="bg-[#fcfbf7] p-8 flex items-center justify-center relative overflow-hidden mx-4 mt-4">
            <div className="w-full aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="p-6 md:p-12 flex flex-col justify-center">
            <h1 className="text-3xl font-semibold text-gray-900 leading-tight mb-2 line-clamp-2 md:line-clamp-none">
              {product.title}
            </h1>

            {/* Rating */}
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

            {/* Price */}
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

            {/* Meta Data */}
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

            {/* Key Benefits */}
            <h3 className="text-md font-bold text-gray-800 uppercase tracking-wider mb-2 pt-4 mt-4 border-t border-gray-100">
              Key Benefits
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 mb-8 list-disc pl-4 marker:text-[#6e9e54]">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- BOTTOM SECTION: DYNAMIC PRODUCT DETAILS (Tabs) --- */}
        <ProductDescription product={product} />
      </div>
      {/* --- END MASTER CONTAINER --- */}

      {/* RELATED PRODUCTS SECTION */}
      <RelatedProducts currentProductId={productId} />
    </div>
  );
};

export default ProductDetail;
