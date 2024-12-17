import React from "react";

const CarouselContent: React.FC = () => {
  return (
    <div
      className="absolute hidden inset-0 sm:flex items-center justify-center z-20"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <div className="text-white p-6 text-center flex flex-col justify-center items-center min-h-[400px]">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          Welcome To
        </h2>
        {/* Display title */}
        <h1
          className="mt-4 sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          Infinity Construction NYC
        </h1>{" "}
        {/* Display description */}
        <p
          className="mt-4 xl:px-56 text-lg 2xl:text-xl"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          Infinity Construction NYC is a leading provider of quality restoration
          services in the tri-state area.
        </p>
        {/* Buttons Section */}
        <div className="mt-6 flex gap-6 flex-col sm:flex-row">
          {/* Contact Us Button */}
          <button className="bg-primary border-2 border-primary text-3xl text-white py-3 px-6 rounded-full hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 w-[250px]">
            Contact Us
          </button>

          {/* Portfolio Button */}
          <button
            className="bg-transparent border-2 border-white text-3xl text-white py-3 px-6 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 w-[250px]"
            style={{ textShadow: "0px 0px 10px black" }}
          >
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
