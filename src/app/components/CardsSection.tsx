import React from "react";
import Image from "next/image"; // Import Next.js Image component

const data = [
  {
    id: 1,
    imageUrl: "/cards-img1.jpg",
    heading: "Historical Landmarks Design Restoration",
    paragraph:
      "Preserving the cultural heritage of our beloved city, we meticulously restore historical landmarks to their former glory. We breathe new life into these cherished treasures, from intricate architectural details to grand facades.",
  },
  {
    id: 2,
    imageUrl: "/cards-img2.jpg",
    heading: "Fire Escape",
    paragraph:
      "Ensure safety meets style with our Fire Escape Services. Whether restoring, replacing, or installing, we prioritize functionality and aesthetics. Trust us for expert solutions that elevate emergency preparedness and compliance. Choose security and style with our Fire Escape Services.",
  },
  {
    id: 3,
    imageUrl: "/cards-img3.jpg",
    heading: "Roofing",
    paragraph:
      "Fire escape restoration is crucial for both safety and aesthetics. We handle every aspect of fire escape restoration, from painting to structural repairs, ensuring compliance with NYC fire safety regulations.",
  },
  {
    id: 4,
    imageUrl: "/cards-img4.jpg",
    heading: "Paving",
    paragraph:
      "Revitalize your surroundings with our Paving Services. From driveways to walkways, we create seamless, stylish pathways that combine aesthetics and functionality. Choose us for expert craftsmanship and elevate the appeal of your property with our efficient Paving Services.",
  },
];

const CardsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-5xl font-medium text-black dark:text-white"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Our Speciality
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row bg-accent dark:bg-gray-800 shadow-md"
            >
              {/* Image Section */}
              <div className="w-full lg:w-3/5 mb-4 lg:mb-0">
                <Image
                  src={item.imageUrl}
                  alt={`Card ${item.id}`}
                  width={650} // Increased width for bigger images
                  height={400} // Increased height for bigger images
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Description Section */}
              <div className="w-full lg:w-2/3 p-6">
                <h3
                  className="text-3xl font-semibold text-tertiary dark:text-white"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  {item.heading}
                </h3>
                <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
