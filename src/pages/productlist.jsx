import React, { useState, useMemo } from "react";
import {
  productData,
  veterinaryProductData,
  classicalProductData,
} from "../productdata.js";
import { Leaf, PawPrint, Filter, X } from "lucide-react";
import ScrollUpButton from "../common/ScrollUpButton.jsx";
import ProductDetailModal from "./ProductDetailModel.jsx";

// ---------------- PRODUCT SECTION ----------------
const ProductSection = ({ title, products, onProductClick }) => {
  const getProductDescription = (product) =>
    product.features?.[0] || "Details not available.";

  return (
    <>
      <div className="scroll-mt-20 mb-2 text-center">
        <h2 className="text-2xl md:text-3xl font-bold  text-[#096e3b] mb-2 uppercase tracking-wider">
          {title}
        </h2>
        <h3 className="text-gray-700 text-1xl  mb-4">
          Choose from our premium selection of herbal products
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-8 rounded"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group w-full sm:w-[48%] md:w-[23%] cursor-pointer"
            onClick={() => onProductClick(product)}
          >
            <div className="relative bg-gray-100 hover:bg-green-50 border border-gray-100 hover:border-green-300 rounded-lg p-4 md:p-5 flex flex-col items-center text-center min-h-[340px]">
              <div className="w-full h-40 md:h-48 flex items-center justify-center mb-4 rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between w-full">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2 mb-2 transition group-hover:text-green-700">
                    {product.title}
                  </h3>
                  <p className="text-xs md:text-[14px] text-black line-clamp-2 h-10 mb-4 leading-relaxed group-hover:text-gray-800">
                    {getProductDescription(product)}
                  </p>
                </div>

                      {/* Button */}
               <button
        className="w-full mt-auto px-4 py-2 rounded-md border-2 border-green-700
                   text-green-700 font-semibold
                   hover:bg-green-800 hover:text-white hover:shadow-md
                   transition-all duration-300 relative z-10 tracking-wider"
        type="button"
      >
        Learn More →
      </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// ---------------- PRODUCT LIST ----------------
const filterCategories = [
  { id: "all", label: "All Products", icon: Leaf },
  { id: "herbal", label: "Herbal Healthcare", icon: Leaf },
  { id: "veterinary", label: "Veterinary Care", icon: PawPrint },
];

const herbalSubCategories = [
  { id: "all", label: "All Herbal" },
  { id: "patent", label: "Patent" },
  { id: "classical", label: "Classical" },
];

const ProductList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeMainFilter, setActiveMainFilter] = useState("all");
  const [activeHerbalFilter, setActiveHerbalFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Toggle dropdown card
  const toggleFilter = () => setIsFilterOpen((v) => !v);

  const handleMainFilterChange = (filter) => {
    setActiveMainFilter(filter);
    if (filter !== "herbal") setActiveHerbalFilter("all");
  };

  const handleHerbalFilterChange = (filter) => {
    setActiveHerbalFilter(filter);
    setActiveMainFilter("herbal");
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    let products = [];
    if (activeMainFilter === "all") {
      products = [...productData, ...classicalProductData, ...veterinaryProductData];
    } else if (activeMainFilter === "herbal") {
      if (activeHerbalFilter === "all") {
        products = [...productData, ...classicalProductData];
      } else if (activeHerbalFilter === "patent") {
        products = productData;
      } else {
        products = classicalProductData;
      }
    } else if (activeMainFilter === "veterinary") {
      products = veterinaryProductData;
    }
    return products;
  }, [activeMainFilter, activeHerbalFilter]);

  const patentFiltered = filteredProducts.filter((p) => productData.includes(p));
  const classicalFiltered = filteredProducts.filter((p) => classicalProductData.includes(p));
  const veterinaryFiltered = filteredProducts.filter((p) => veterinaryProductData.includes(p));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Filters */}
      <div className="p-2 md:p-2 max-w-7xl mx-auto">
        <div className="flex justify-end mb-2 relative">
          <button
            onClick={toggleFilter}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-700 text-white hover:bg-green-800 shadow"
          >
            {isFilterOpen ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
            <span className="text-sm font-semibold">Filter</span>
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 top-full mt-3 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
              <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
                Filter By Category
              </h3>

              <div className="space-y-4">
                {/* Main Category */}
                <div>
                  <label className="block text-green-700 font-semibold mb-2">Main Category</label>
                  <div className="flex flex-wrap gap-2">
                    {filterCategories.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => handleMainFilterChange(filter.id)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                          activeMainFilter === filter.id
                            ? "bg-green-700 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Herbal Sub-Category */}
                {activeMainFilter === "herbal" && (
                  <div className="pt-3 border-t">
                    <label className="block text-green-700 font-semibold mb-2">
                      Herbal Sub-Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {herbalSubCategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleHerbalFilterChange(sub.id)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                            activeHerbalFilter === sub.id
                              ? "bg-green-600 text-white"
                              : "bg-green-100 text-green-700 hover:bg-green-200"
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products */}
      <div className="p-2 md:p-2 max-w-7xl mx-auto">
        {patentFiltered.length > 0 && (
          <ProductSection
            title="Patent Herbal Medicines"
            products={patentFiltered}
            onProductClick={setSelectedProduct}
          />
        )}
        {classicalFiltered.length > 0 && (
          <div className="mt-2 md:mt-2 pt-2">
            <ProductSection
              title="Classical Herbal Medicines"
              products={classicalFiltered}
              onProductClick={setSelectedProduct}
            />
          </div>
        )}
        {veterinaryFiltered.length > 0 && (
          <div className="mt-2 md:mt-2 pt-2">
            <ProductSection
              title="Animal Herbal Medicines (Veterinary Care)"
              products={veterinaryFiltered}
              onProductClick={setSelectedProduct}
            />
          </div>
        )}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            <h3 className="text-xl font-semibold">No Products Match Your Filter</h3>
            <p>Try selecting another option.</p>
          </div>
        )}
      </div>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <ScrollUpButton />
    </div>
  );
};

export default ProductList;
