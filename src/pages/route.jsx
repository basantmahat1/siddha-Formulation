// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProductList from "./productlist.jsx";
// import ProductDetail from "./productdetail.jsx";

// // This component handles the routing structure for your multi-page experience.
// const RouteNav = () => {
//   return (
//     <BrowserRouter>
//       <div className="bg-gray-50 min-h-screen">
//         <Routes>
//           {/* Route for the List Page (Home URL: /) */}
//           <Route path="/" element={<ProductList />} />

//           {/* Route for the Detail Page (Product URL: /product/1, /product/2, etc.) */}
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default RouteNav;
// NOTE: This file is deprecated. Use App.jsx for routing instead.
/*
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./productlist.jsx";
import ProductDetail from "./productdetail.jsx";
import AboutUs from "./aboutus.jsx";
import AboutCompany from "./about_company.jsx";
import MDMessage from "./md_message.jsx";
import DeptMarketing from "./department_marketing.jsx";
import DeptProduction from "./department_production.jsx";
import DeptFinance from "./department_finance.jsx";
import Contact from "./contact.jsx";
import BlogList from "./BlogList.jsx";
import BlogDetail from "./BlogDetails.jsx";*/

/*
// This component handles the routing structure for your multi-page experience.
const RouterContainer = () => {
  return (
    // BrowserRouter handles the URL changes
    <BrowserRouter>
      <div className="bg-gray-50 min-h-screen">
        {/* Routes defines the relationship between URL and component */}
        <Routes>
          {/* Home URL (/) renders the list of all products */}
          <Route path="/" element={<ProductList />} />

          {/* Product detail */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* About pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/company" element={<AboutCompany />} />
          <Route path="/about/md" element={<MDMessage />} />

          {/* Department pages */}
          <Route path="/department/marketing" element={<DeptMarketing />} />
          <Route path="/department/production" element={<DeptProduction />} />
          <Route path="/department/finance" element={<DeptFinance />} />

          {/* Contact & Blog */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouterContainer;

