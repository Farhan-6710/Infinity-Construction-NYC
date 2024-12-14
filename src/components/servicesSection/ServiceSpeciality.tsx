import React from "react";
import Image from "next/image";
import { specialityData } from "@/data/ourSpeciality";

const ServiceSpeciality = () => {

  return (
    <section
      className="bg-gray-100 dark:bg-slate-950 py-16 border-b"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-12">
          Our Specialty
        </h2>
        <div className="space-y-8">
          {specialityData.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300`}
            >
              <Image
                src={data.imageUrl}
                alt={data.heading}
                width={500}
                height={300}
                className="w-full md:w-1/3 h-64 object-cover"
                priority // If the image is above the fold, you can add priority
              />
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
                  {data.heading}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSpeciality;
