import { Phone } from "lucide-react";
import React from "react";

function TestimonialsHeading() {
  return (
    <div className="relative w-full overflow-hidden bg-secondary/95 dark:bg-gray-900">
      {/* Heading Section */}
      <div
        className="flex flex-col justify-center items-center text-center py-8 px-4 sm:px-8 md:px-64 2xl:px-32 md:py-20"
        style={{
          fontFamily: "var(--font-forum)",
        }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white dark:text-white mb-6 sm:mb-8">
          WHAT OUR CLIENTS HAVE TO SAY
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white dark:text-gray-300 mb-6 sm:mb-8 mx-auto">
          <span className="leading-relaxed">
            There’s no better way to tell you about what we do and how we do it
            than by letting our clients tell you themselves. If you’re happy,
            we’re happy, and we love getting feedback in order to improve our
            service. Have a look at some of our testimonials below, and contact
            us to submit your own.
          </span>
        </p>
        <button className="flex w-fit bg-primary text-white px-4 py-3 hover:bg-stone-900 transition-all duration-300 items-center space-x-2">
          <Phone className="w-5 h-5" />
          <span>347 939 5779</span>
        </button>
      </div>
    </div>
  );
}

export default TestimonialsHeading;
