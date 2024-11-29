"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Phone, UserCircle } from "lucide-react"; // Import the UserCircle icon

const testimonials = [
  {
    id: 1,
    text: "I recommend future Brownstone homeowners to take advantage of Infinity Construction NYC's services, specializing in brownstone restoration. They did an exquisite job with my brownstone facade and stoop restoration and we loved the end results. There was no discoloration or fading and the finishing was very smooth & clean. The professionalism and feedback I got were unforgettable.",
    name: "ANN CULLARO",
    role: "Homeowner",
  },
  {
    id: 2,
    text: "Infinity Construction NYC renovated my house and it looks amazing. The interior design team knew exactly what I wanted, and did a wonderful job in renovating my basement. They installed bathrooms, ceramic and wood floors, research lights, and closets. They opened up my basement and now I have a lot of spare space. They did such a superb job and I appreciate Infinity's customer service.",
    name: "SABRINA FINNS",
    role: "Homeowner",
  },
];

const TestimonialSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });
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
    }, 5000); // 5 seconds interval

    return () => clearInterval(autoplay); // Cleanup interval on component unmount
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Testimonial Viewport */}
      <div className="embla" ref={emblaRef}>
        <div className="flex w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative flex-shrink-0 w-full flex items-center justify-center py-14 sm:py-14"
            >
              {/* Testimonial Background */}
              <div className="absolute inset-0 bg-accent dark:bg-slate-950 dark:border-t"></div>

              {/* Testimonial Content */}
              <div className="relative z-10 p-6 sm:p-10 lg:p-12 lg:py-0 flex flex-col items-center justify-center h-full text-center">
                {/* Avatar (Lucide Icon) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 rounded-full flex items-center justify-center">
                  <UserCircle
                    className="w-28 h-28 text-tertiary dark:text-gray-400"
                    strokeWidth={1}
                  />
                </div>

                {/* Testimonial Text */}
                <p
                  className="text-lg sm:text-xl md:text-2xl mb-6 md:px-72 text-tertiary dark:text-gray-400 leading-loose"
                  style={{
                    fontFamily: "var(--font-forum)",
                  }}
                >
                  <span className="leading-relaxed">{testimonial.text}</span>
                </p>

                {/* Testimonial Name */}
                <p
                  className="font-bold text-xl sm:text-2xl lg:text-3xl text-tertiary dark:text-gray-300"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 backdrop-blur-md transition-all"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-14" />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 backdrop-blur-md transition-all"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-14" />
      </button>
    </div>
  );
};

export default TestimonialSection;
