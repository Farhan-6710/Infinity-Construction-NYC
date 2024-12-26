import BlogData from "@/components/BlogSection";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-5 sm:pt-14 2xl:pt-24">
        <BlogData />
      </div>
      <Footer />
    </div>
  );
};

export default page;
