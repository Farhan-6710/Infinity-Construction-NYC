"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projectsData from "@/data/projectsData";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Use icons for navigation

const ProjectsSection = () => {
 const [emblaRef, emblaApi] = useEmblaCarousel({
     loop: true,
     align: "center",
     skipSnaps: false,
     dragFree: false,
   });
 
   
   const onSelect = useCallback(() => {
     if (!emblaApi) return;
   }, [emblaApi]);
 
   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
 
   // Autoplay functionality
     useEffect(() => {
       if (!emblaApi) return;
   
       const autoplay = setInterval(() => {
         emblaApi.scrollNext(); // Scroll to the next slide
       }, 5000); // 3 seconds interval
   
       return () => clearInterval(autoplay); // Cleanup interval on component unmount
     }, [emblaApi]);
 
   useEffect(() => {
     if (!emblaApi) return;
     emblaApi.on("select", onSelect);
     emblaApi.on("reInit", onSelect);
     onSelect();
 
     return () => {
       emblaApi.off("select", onSelect);
       emblaApi.off("reInit", onSelect);
     };
   }, [emblaApi, onSelect]);
 

  return (
    <div className="container mx-auto px-4 lg:px-8 py-14 border-b">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl sm:text-5xl font-bold text-tertiary dark:text-white"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Our Projects
        </h2>
      </div>

      <div className="embla overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container flex">
          {projectsData.map((projects) => (
            <div
              key={projects.id}
              className="flex-none w-full sm:w-1/2 md:w-1/3 px-4 mb-6"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={projects.image}
                  alt={projects.title}
                  width={650}
                  height={400}
                  className="object-cover w-full h-48 lg:h-56"
                  loading="lazy"
                />
                <div className="p-8">
                  <h3
                    className="text-2xl font-semibold text-tertiary dark:text-white"
                    style={{ fontFamily: "var(--font-forum)" }}
                  >
                    {projects.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {projects.description.slice(0, 180)}...{" "}
                    {/* Truncate the description */}
                  </p>
                  <button
                    className="mt-4 text-white bg-tertiary hover:bg-tertiary/80 p-2 px-6 rounded-full transition-all duration-300"
                    style={{ fontFamily: "var(--font-forum)" }}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <div className="absolute inset-0 p-4">
          {/* Left Navigation Button */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 sm:left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-tertiary p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 bg-tertiary hover:bg-white/40 backdrop-blur-sm z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollNext}
            className="absolute right-4 sm:right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-tertiary p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 bg-tertiary hover:bg-white/40 backdrop-blur-sm z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
