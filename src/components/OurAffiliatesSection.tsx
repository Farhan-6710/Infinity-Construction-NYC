// src/components/OurAffiliatesSection.tsx

"use client";

import React from "react";
import Image from "next/image";
import { affiliatesData } from "../data/affiliatesData"; // Import affiliate data

const OurAffiliatesSection: React.FC = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      {/* Heading Section */}
      <div
        className="flex flex-col justify-center items-center text-center mb-8"
        style={{
          fontFamily: "var(--font-forum)",
        }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-tertiary dark:text-white font-bold">
          OUR AFFILIATES
        </h2>
      </div>

      {/* Affiliate Boxes Flex Container */}
      <div className="flex flex-wrap justify-center px-4">
        {affiliatesData.map((affiliate, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-lg p-4 border border-tertiary/20 sm:border-tertiary/20 dark:border-gray-600 w-full sm:w-[45%] lg:w-[26%]"
          >
            <div className="flex items-center justify-center w-full mb-4">
              <Image
                src={affiliate.imageSrc}
                alt={affiliate.imageAlt}
                width={224}
                height={224}
                className="object-contain w-32 h-32 lg:w-48 lg:h-48"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      <div id="contact-us"></div>
    </div>
  );
};

export default OurAffiliatesSection;
