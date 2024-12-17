"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GallerySlide } from "./GallerySlide";
import { GalleryNavigation } from "./GalleryNavigation";
import { slides } from "@/data/gallerySlidesData";

const Gallery: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
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

    setTotalSlides(emblaApi.scrollSnapList().length);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full overflow-hidden">
      <div className="text-center mb-10 pt-14">
        <h2
          className="text-3xl sm:text-5xl font-bold text-tertiary dark:text-white"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Gallery
        </h2>
      </div>

      <div className="relative">
        <div className="embla" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <GallerySlide
                key={slide.id}
                {...slide}
                isSelected={index === selectedIndex}
              />
            ))}
          </div>
        </div>

        <GalleryNavigation
          onPrevClick={scrollPrev}
          onNextClick={scrollNext}
          currentSlide={selectedIndex}
          totalSlides={totalSlides}
        />
      </div>
    </section>
  );
};

export default Gallery;
