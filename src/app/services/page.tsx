import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import OurServices from "@/components/servicesSection/OurServices";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="sm:pt-14">
        <OurServices />
      </div>
      <Footer />
    </div>
  );
};

export default page;
