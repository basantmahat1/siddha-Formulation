import React from "react";
import { Link } from "react-router-dom";

/* =====================
   Reusable Button
===================== */
const Button = ({ children, primary = false, to = "/" }) => (
  <Link
    to={to}
    className={`
      inline-block px-4 py-2 text-sm font-semibold rounded-full transition duration-300
      ${
        primary
          ? "bg-[#1e462d] text-white hover:bg-[#153421]"
          : "bg-[#a3e6b7] text-[#1e462d] hover:bg-[#86d8a3]"
      }
    `}
  >
    {children}
  </Link>
);

/* =====================
   Blog Card
===================== */
const BlogPostCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonTo,
}) => (
  <div className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition duration-300">
    
    {/* Image */}
    <div className="w-full lg:w-1/5 flex-shrink-0 mb-4 lg:mb-0 order-1 lg:order-2 flex justify-center items-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full max-w-[120px] h-auto rounded-md object-contain"
      />
    </div>

    {/* Text */}
    <div className="flex-1 lg:pr-6 order-2 lg:order-1">
      <h3 className="text-xl font-semibold text-[#1e462d] mb-2">
        {title}
      </h3>
      <p className="text-gray-700 mb-4 text-sm lg:text-base">
        {description}
      </p>

      {/* ✅ KEEP READING */}
      <Button to={buttonTo}>{buttonText}</Button>
    </div>
  </div>
);

/* =====================
   Blog Page
===================== */
const BlogPage = () => {
  const posts = [
    {
      title: "All about Kidney Failure (किड्नी फेलियर बारे सम्पूर्ण जानकारी)",
      description:
        "Kidney failure means one or both kidneys stop functioning properly. This condition can be acute or chronic and needs early diagnosis and care...",
      imageSrc: "/assets/img/crystomin_tab.png",
      imageAlt: "Crystomin Tablets",
      buttonText: "Keep Reading",
      buttonTo: "/kidney-failure",
    },
    {
      title: "Xtreme Tablet for Extreme Sex Pleasure",
      description:
        "A premium Ayurvedic formulation used to improve sexual performance, stamina, erectile dysfunction, and overall male vitality...",
      imageSrc: "/assets/img/xtreme.jpg",
      imageAlt: "Xtreme Tablet",
      buttonText: "Keep Reading",
      buttonTo: "/xtreme-tablet",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-5xl mx-auto bg-white p-6 lg:p-8 rounded-lg shadow-xl">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-serif font-light text-[#1e462d] tracking-wide text-center">
            Latest from Our Blog
          </h2>
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>

      {/* Right Green Strip */}
      <div className="fixed top-0 right-0 w-4 h-full bg-[#e6f4e8] hidden md:block"></div>
    </div>
  );
};

export default BlogPage;
