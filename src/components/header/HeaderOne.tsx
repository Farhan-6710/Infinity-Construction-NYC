import React from "react";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeaderOne: React.FC = () => {
  return (
    <div>
      <header className="hidden xl:flex w-full bg-gray-100 text-primary dark:bg-gray-900 dark:text-white p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16">
          {/* First Div */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 w-full sm:w-auto mb-4 sm:mb-0 text-tertiary dark:text-gray-300">
            <Link href="infinityconstructionnyc@gmail.com">
              <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span
                  className="text-sm sm:text-lg tracking-wider"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  infinityconstructionnyc@gmail.com
                </span>
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span
                className="text-sm sm:text-lg"
                style={{ fontFamily: "var(--font-forum)" }}
              >
                347 939 5779
              </span>
            </div>
          </div>

          {/* Second Div */}
          <div
            className="flex space-x-4 w-full sm:w-auto justify-center sm:justify-end text-primary"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            <Link
              href="https://www.instagram.com/infinity_construction_nyc/"
              target="_blank"
            >
              <Button variant="secondary" size="md" className="rounded-2xl">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-lg">Instagram</span>
              </Button>
            </Link>
            <Link
              href="https://www.facebook.com/InfinityConstructionNYC"
              target="_blank"
            >
              <Button variant="secondary" size="md" className="rounded-2xl">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-lg">Facebook</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/imrul-hassan-403724268"
              target="_blank"
            >
              <Button variant="secondary" size="md" className="rounded-2xl">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-lg">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <div className=" border-b border-black/10 dark:border-transparent"></div>
    </div>
  );
};

export default HeaderOne;
