import React from "react";

const SiddhaIcon = () => (
  <div className="w-30 h-30 rounded-full bg-white shadow-md flex items-center justify-center p-2">
    <img
      src="/assets/img/siddha.jpeg"
      alt="Siddha Logo"
      className="w-full h-full object-contain"
    />
  </div>
);

const AboutCommonHeroLayout = () => {
  return (
    <section
      className="text-center py-10 md:py-14"
      style={{
        background: "linear-gradient(to right, #e9f7ee 0%, #a4ecc0ff 100%)",
      }}
    >
      <div className="container mx-auto px-4">

        <div className="flex justify-center mb-4">
          <SiddhaIcon />
        </div>

        <h1 className="text-2xl md:text-3xl font-serif font-semibold text-green-800 mb-2">
          About Siddha Formulation
        </h1>

        <p className="text-sm md:text-base text-green-600 italic">
          A New Era of Herbal Excellence
        </p>

      </div>
    </section>
  );
};

export default AboutCommonHeroLayout;
