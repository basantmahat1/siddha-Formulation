import React, { useState } from "react";
import { productData } from "../productdata";
import ProductDetailModal from "./ProductDetailModel"; // renamed component

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-6 font-serif">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productData.map((product) => (
          <div
            key={product.id}
            className="border rounded p-4 cursor-pointer hover:shadow"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
            <h2 className="mt-2 text-lg font-semibold text-center">{product.title}</h2>
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

export default ProductsPage;
