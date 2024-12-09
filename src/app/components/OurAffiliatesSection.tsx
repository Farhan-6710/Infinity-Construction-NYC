"use client";

import React from "react";

const OurAffiliatesSection: React.FC = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      {/* Heading Section */}
      <div
        className="flex flex-col justify-center items-center text-center mb-12"
        style={{
          fontFamily: "var(--font-forum)",
        }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-tertiary dark:text-white mb-6 font-bold">
          OUR AFFILIATES
        </h2>
        <p className="text-lg sm:text-xl text-tertiary dark:text-gray-300 max-w-4xl mx-auto">
          We are proud to collaborate with these amazing companies and
          organizations. Their support and partnership allow us to offer
          exceptional services.
        </p>
      </div>

      {/* Affiliate Boxes */}
      <div className="flex flex-wrap justify-center">
        {/* Box 1 */}
        <div className="border border-tertiary border-r-0 dark:border-gray-600 w-[370px] h-[330px] flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex items-center justify-center w-full">
            <img
              src="/Affiliates-img-11.png" // Replace with your affiliate image
              alt="Affiliate 1"
              className="object-contain max-w-56 max-h-56"
            />
          </div>
          <p className="text-center text-lg sm:text-xl text-tertiary dark:text-white mt-4">
            Affiliate 1
          </p>
        </div>

        {/* Box 2 */}
        <div className="border border-tertiary dark:border-gray-600 w-[370px] h-[330px] flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex items-center justify-center w-full">
            <img
              src="/Affiliates-img-2.png" // Replace with your affiliate image
              alt="Affiliate 2"
              className="object-contain max-w-56 max-h-56"
            />
          </div>
          <p className="text-center text-lg sm:text-xl text-tertiary dark:text-white mt-4">
            Affiliate 2
          </p>
        </div>

        {/* Box 3 */}
        <div className="border border-tertiary border-l-0 dark:border-gray-600 w-[370px] h-[330px] flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex items-center justify-center w-full">
            <img
              src="/Affiliates-img-3.png" // Replace with your affiliate image
              alt="Affiliate 3"
              className="object-contain max-w-56 max-h-56"
            />
          </div>
          <p className="text-center text-lg sm:text-xl text-tertiary dark:text-white mt-4">
            Affiliate 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAffiliatesSection;
