import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./pages/home";
import ProductDetail from "./pages/productdetail";
import ProductList from "./pages/productlist";
import ProductsDtl from "./pages/productsde";
import Contact from "./pages/contact";
import AboutUs from "./pages/aboutus";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppInner() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Product list route (opens when clicking Products in Navbar) */}
        <Route path="/products" element={<ProductList />} />

        {/* Product detail route */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Contact route */}
        <Route path="/contact" element={<Contact />} />

        {/* About Us route */}
        <Route path="/about" element={<AboutUs />} />

        {/* Example additional route: full products detail mapping */}
        <Route path="/featured" element={<ProductsDtl />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;
