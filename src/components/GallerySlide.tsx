"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface GallerySlideProps {
  id: number;
  image: string;
  isSelected: boolean;
}

export const GallerySlide: React.FC<GallerySlideProps> = ({
  image,
  isSelected,
}) => {
  return (
    <div
      className={cn(
        // Base styles
        "relative flex-[0_0_100%] sm:flex-[0_0_33.333%] h-[320px] sm:h-[440px] 2xl:h-[550px] overflow-hidden",
        "transform-gpu sm:origin-center px-2 sm:px-4",
      )}
    >
      <Image
        src={image}
        alt="Gallery image"
        fill
        className="object-cover transition-transform duration-500"
        loading="lazy"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/70 transition-opacity duration-500",
          isSelected ? "opacity-0" : "opacity-100"
        )}
      />
    </div>
  );
};
