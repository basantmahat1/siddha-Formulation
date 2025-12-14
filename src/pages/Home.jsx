import React from "react";
import Hero from "../components/Hero";
import LatestProducts from "../components/LatestProducts";
import Banner from "../components/Banner";
// import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <LatestProducts />
      <Banner/>
      

      {/* <Testimonials /> */}
    </div>
  );
}
