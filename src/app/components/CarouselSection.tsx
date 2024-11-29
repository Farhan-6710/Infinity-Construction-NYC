"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/banner-1.jpg",
    description: "Slide 1 Description",
  },
  {
    id: 2,
    image: "/banner-2.jpg",
    description: "Slide 2 Description",
  },
  {
    id: 3,
    image: "/banner-3.jpg",
    description: "Slide 3 Description",
  },
];

const CarouselSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Initial state
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext(); // Scroll to the next slide
    }, 3000); // 3 seconds interval

    return () => clearInterval(autoplay); // Cleanup interval on component unmount
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Viewport */}
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] w-full h-[550px] overflow-hidden"
            >
              {/* Slide Image */}
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                className="object-cover"
                priority={slide.id === 1} // Prioritize the first slide for faster loading
              />

              {/* Transparent Overlay */}
              <div className="absolute inset-0 dark:bg-black dark:opacity-40"></div>
              {/* Slide Description */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white p-3 rounded-md">
                {slide.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/40 backdrop-blur-md"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-14" />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/40 backdrop-blur-md"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-14" />
      </button>
    </div>
  );
};

export default CarouselSection;
