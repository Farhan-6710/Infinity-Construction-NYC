import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import TestimonialSection from "@/components/testimonialsSection/TestimonialSection";
import TestimonialsHeading from "@/components/testimonialsSection/TestimonialsHeading";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-5 sm:pt-14 2xl:pt-24">
        <Gallery />
        <TestimonialsHeading />
        <TestimonialSection />
      </div>
      <Footer />
    </div>
  );
};

export default page;
