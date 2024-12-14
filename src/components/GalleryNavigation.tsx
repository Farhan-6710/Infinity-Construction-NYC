"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  currentSlide: number;
  totalSlides: number;
}

export const GalleryNavigation: React.FC<GalleryNavigationProps> = ({
  onPrevClick,
  onNextClick,
  currentSlide,
  totalSlides,
}) => {
  return (
    <>
      <div
        className="absolute bottom-5 left-5 text-white text-sm sm:text-2xl backdrop-blur-md px-4 sm:px-6 py-2 rounded-full z-20"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        {`${currentSlide + 1} / ${totalSlides}`}
      </div>

      <button
        onClick={onPrevClick}
        className="absolute z-20 bottom-5 right-1/2 -translate-x-2 sm:bottom-auto sm:right-auto sm:left-4 sm:top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/40 backdrop-blur-md transition-colors disabled:opacity-50"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={onNextClick}
        className="absolute z-20 bottom-5 left-1/2 translate-x-2 sm:bottom-auto sm:left-auto sm:right-4 sm:top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/40 backdrop-blur-md transition-colors disabled:opacity-50"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </>
  );
};