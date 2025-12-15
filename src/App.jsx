import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/productdetail";
import ProductList from "./pages/productlist";

import Contact from "./pages/contact";
import AboutUs from "./pages/aboutus";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MDMessage from "./pages/MDMessage";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import Patron_Adviser from "./pages/Patron_Adviser";
import Production from "./pages/departments/Production";
import Marketing from "./pages/departments/Marketing";
import Finance from "./pages/departments/Finance";
import BlogPage from "./pages/BlogPage";
import XtremeTabletPage from "./pages/XtremeTabletPage";
import KidneyFailureGuide from "./pages/KidneyFailureGuide";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";

// import ProductsDtl from "./pages/ProductsDtl";
// import RouteNav from "./pages/route.jsx"; // Deprecated routing file



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

        {/* About Us routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/company" element={<AboutUs />} />
        <Route path="/about/md" element={<MDMessage />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/patron_adviser" element={<Patron_Adviser />} />


        {/* Department routes */}
         <Route path="/departments/marketing" element={<Marketing />} />
<Route path="/departments/production" element={<Production />} />
<Route path="/departments/finance" element={<Finance />} />


        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />

        <Route path="/xtreme-tablet" element={<XtremeTabletPage />} />
        <Route path="/kidney-failure" element={<KidneyFailureGuide />} />

 

        {/* Example additional route: full products detail mapping */}
        {/* <Route path="/featured" element={<ProductsDtl />} /> */}
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
