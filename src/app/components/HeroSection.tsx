"use client";

import React from "react";
import BannerForm from "./BannerForm";
import BannerAbout from "./BannerAbout";

const HeroSection = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-white dark:bg-slate-950 p-6 pt-0 pb-6 sm:pb-20">
        <div className="max-w-5xl w-full">
          {/* Main Heading */}
          <h1
            className="text-5xl sm:text-7xl md:text-8xl text-black dark:text-white font-forum text-center my-10 sm:my-12 md:my-14"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Infinity Construction NYC
          </h1>

          {/* Subheading */}
          <h2
            className="text-xl sm:text-2xl text-[#0a6dad] dark:text-[#4dd0e1] mb-6 sm:mb-8 text-center"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            BROWNSTONE RESTORATION SPECIALIST
          </h2>

          {/* Tagline */}
          <h3
            className="text-lg sm:text-xl text-[#042c46] dark:text-[#90caf9] sm:mb-6 text-center"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            PRECISION. PUNCTUALITY. PROFESSIONALISM.
          </h3>

          {/* Description Section */}
          <p
            className="pt-6 text-base sm:text-xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Infinity Construction NYC is a leading provider of quality
            restoration services in the tri-state area. With a focus on
            precision, punctuality, and professionalism, we specialize in
            brownstone exterior restoration, masonry, roofing, waterproofing,
            fire escape painting, and painting & plastering. Our goal is to
            deliver exceptional results to our clients while maintaining
            cost-effectiveness.
          </p>

          <p
            className="mt-6 text-base sm:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Best Brownstone Renovation & Restoration Contractor in Brooklyn,
            Manhattan, Queens, and The Bronx, NY.
          </p>

          <p
            className="pt-6 text-base sm:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Serving a wide range of clients, including property owners,
            real-estate firms, architects, and engineers, we are committed to
            preserving the historical beauty of brownstone buildings. With a
            highly experienced team of workers, we take pride in our attention
            to detail and the quality of our work.
          </p>

          <p
            className="pt-6 sm:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Trusted Contractor for Brownstone Restoration Near Me in Brooklyn,
            Queens, The Bronx, and Manhattan, New York City. Operating in key
            locations such as Park Slope, Brooklyn Heights, Downtown Brooklyn,
            Cobble Hill, Dumbo, Red Hook, Crown Heights, Chelsea, Riverside,
            Harlem, The Bronx, and Queens, we are proud to be one of the leading
            brownstone restoration specialists in NYC.
          </p>
        </div>
      </section>
      {/* About and Form Section */}
      <div className="flex flex-col gap-6 bg-accent dark:bg-gray-900 py-12 lg:py-20 border-b border">
        <div>
          <div className="text-center mb-8">
            <h2
              className="text-3xl sm:text-5xl text-tertiary dark:text-white font-bold"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Our Services
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* About Section */}
            <div className="w-full lg:w-1/2">
              <BannerAbout />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2">
              <BannerForm />
            </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
