import React from "react";
import { Fraunces } from "next/font/google";

// Import the Fraunces font
const fraunces = Fraunces({
  subsets: ["latin"], // Use the appropriate subsets (e.g., "latin")
  weight: "400", // Set the desired font weight
});

const ProjectSection = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-24 border-b">
      {/* Parent Flex Div */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:px-20">
        {/* Left Div (Content) */}
        <div className="w-full lg:w-1/2 px-4">
          <h2
            className="text-4xl lg:text-6xl text-tertiary dark:text-white text-left mb-8"
            style={{
              fontFamily: fraunces.style.fontFamily, // Applying Fraunces font to the heading
            }}
          >
            Brick Pointing
          </h2>
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 text-left mb-8">
            MAY 25, 2020
          </h3>
          <p className="text-xl text-gray-700 text-justify dark:text-gray-300">
            <span className="leading-relaxed">
              This project involved a lot of patience and perfection from our
              workers. We use vacuum-connected grinder machines to clean the
              gaps between the bricks to maintain a dust-free work environment.
              This exemplifies the quality of our work and the stability of the
              process we do by not damaging a single brick during the process of
              this job; while protecting our environment by using
              environmentally friendly products. Later, we fill the gap with
              waterproof cement to seal the bricks from future water damage.
              It’s a great example of delivering on our promise of quality work
              while ensuring absolute client satisfaction and protecting our
              environment. Want to learn more about similar projects? Get in
              touch today.
            </span>
          </p>
        </div>

        {/* Right Div (Image) */}
        <div className="w-full lg:w-1/2 px-4">
          <img
            src="/project-img-1.jpg" // Replace with your image path
            alt="Project Image"
            className="object-cover h-[600px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
