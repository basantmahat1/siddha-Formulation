import React from "react";
import Hero from "../components/Hero";
import LatestProducts from "../components/LatestProducts";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <LatestProducts />
      <Testimonials />
    </div>
  );
}
