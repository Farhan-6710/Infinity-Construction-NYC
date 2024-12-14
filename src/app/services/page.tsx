import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import ServicesSection from "@/components/servicesSection/ContactSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="sm:pt-14">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default page;
