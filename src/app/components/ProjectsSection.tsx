"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion"; // Import framer-motion
import projectData from "@/data/projectData";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Use icons for navigation

const ProjectSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedSlide, setSelectedSlide] = useState(0);

  // Callback to handle slide change
  const handleSlideChange = useCallback(() => {
    if (!emblaApi) return;
    setSelectedSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

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
    emblaApi.on("select", handleSlideChange);
    handleSlideChange(); // Set the initial slide
  }, [emblaApi, handleSlideChange]);

  // Next and previous slide handlers
  const goToPrev = () => emblaApi && emblaApi.scrollPrev();
  const goToNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="container mx-auto px-4 lg:px-8 py-20 border-b">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2
          className="text-3xl sm:text-5xl font-bold text-tertiary dark:text-white"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Our Projects
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Div (Content) */}
        <div className="w-full lg:w-1/2 px-0 sm:px-4 relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {projectData.map((project) => (
                <div
                  key={project.id}
                  className="relative flex-[0_0_100%] w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={650}
                    height={400}
                    className="object-cover h-[600px] w-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons and slide number */}
          <div className="absolute inset-0 p-4">
            {/* Left Navigation Button */}
            <button
              onClick={goToPrev}
              className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-tertiary p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 bg-tertiary hover:bg-white/40 backdrop-blur-sm"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-tertiary p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 bg-tertiary hover:bg-white/40 backdrop-blur-sm"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Slide Number (Bottom Left) */}
            <div
              className="absolute bottom-4 right-8 text-white text-xl font-bold backdrop-blur-sm p-2 px-4 rounded-full"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              {selectedSlide + 1} / {projectData.length}
            </div>
          </div>
        </div>

        {/* Right Div (Carousel) */}
        <div className="w-full lg:w-1/2 px-4">
          {/* Slide Title */}
          <motion.h2
            className="text-4xl lg:text-6xl text-tertiary dark:text-white text-left mb-8"
            key={projectData[selectedSlide].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {projectData[selectedSlide].title}
          </motion.h2>

          {/* Slide Date */}
          <motion.h3
            className="text-sm font-semibold text-gray-600 dark:text-gray-300 text-left mb-8"
            key={projectData[selectedSlide].date}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {projectData[selectedSlide].date}
          </motion.h3>

          {/* Slide Description */}
          <motion.p
            className="text-md sm:text-xl text-gray-700 text-justify dark:text-gray-300"
            key={projectData[selectedSlide].description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {projectData[selectedSlide].description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
