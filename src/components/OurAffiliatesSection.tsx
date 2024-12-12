"use client";

import React from "react";
import Image from "next/image";

const OurAffiliatesSection: React.FC = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      {/* Heading Section */}
      <div
        className="flex flex-col justify-center items-center text-center mb-0"
        style={{
          fontFamily: "var(--font-forum)",
        }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-tertiary dark:text-white mb-6 font-bold">
          OUR AFFILIATES
        </h2>
      </div>

      {/* Affiliate Boxes */}
      <div className="flex flex-wrap justify-center">
        {/* Box 1 */}
        <div className="border border-tertiary/20 sm:border-tertiary border-r-0 dark:border-gray-600 w-[370px] h-[220px] sm:w-[370px] sm:h-[330px] flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/Affiliates-img-11.png" // Replace with your affiliate image
              alt="Affiliate 1"
              width={224} // Adjust based on your layout or image size
              height={224} // Adjust based on your layout or image size
              className="object-contain w-32 h-32 lg:w-48 lg:h-48"
              loading="lazy"
            />
          </div>
          <p className="text-center text-lg sm:text-xl text-tertiary dark:text-white mt-4">
            Affiliate 1
          </p>
        </div>

        {/* Box 2 */}
        <div className="border border-tertiary/20 sm:border-tertiary dark:border-gray-600 w-[370px] h-[220px] sm:w-[370px] sm:h-[330px] flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/Affiliates-img-2.png" // Replace with your affiliate image
              alt="Affiliate 2"
              width={224} // Adjust based on your layout or image size
              height={224} // Adjust based on your layout or image size
              className="object-contain w-32 h-32 lg:w-48 lg:h-48"
              loading="lazy"
            />
          </div>
          <p className="text-center text-lg sm:text-xl text-tertiary dark:text-white mt-4">
            Affiliate 2
          </p>
        </div>

        {/* Box 3 */}
        <div className="border border-tertiary/20 sm:border-tertiary border-l-0 dark:border-gray-600 w-[370px] h-[220px] sm:w-[370px] sm:h-[330px] flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/Affiliates-img-3.png" // Replace with your affiliate image
              alt="Affiliate 3"
              width={224} // Adjust based on your layout or image size
              height={224} // Adjust based on your layout or image size
              className="object-contain w-32 h-32 lg:w-48 lg:h-48"
              loading="lazy"
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
