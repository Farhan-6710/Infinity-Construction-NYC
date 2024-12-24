import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"; // Correct import statement

const Footer = () => {
  return (
    <footer className="text-white py-20 bg-secondary/95 dark:bg-slate-950">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        {/* Flex container for columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 sm:pl-32">
          {/* Column 1: Company Info */}
          <div className="flex flex-col items-start max-w-xs">
            <h3 className="text-xl font-semibold mb-4">Company Name</h3>
            <div className="flex items-center mb-3">
              {/* Phone icon with background color #FB823A */}
              <div className="bg-secondary p-3 mr-4 rounded-full">
                <Phone className="text-white" />
              </div>
              <p className="text-base">
                Phone: <br /> (123) 456-7890
              </p>
            </div>
            <div className="flex items-center mb-3">
              {/* Email icon with background color #FB823A */}
              <div className="bg-secondary p-3 mr-4 rounded-full">
                <Mail className="text-white" />
              </div>
              <p className="text-base">Email: info@company.com</p>
            </div>
            <div className="flex items-center mb-3">
              {/* Address icon with background color #FB823A */}
              <div className="bg-secondary p-3 mr-4 rounded-full">
                <MapPin className="text-white" />
              </div>
              <p className="text-base">
                Address: <br />
                123 Main St, City, Country
              </p>
            </div>
            <div className="mt-6 flex space-x-6">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/infinity_construction_nyc/"
                className="text-white hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-8 w-8 bg-white text-black rounded-full p-2" />
              </a>
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/InfinityConstructionNYC"
                className="text-white hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-8 w-8 bg-white text-black rounded-full p-2" />
              </a>
              {/* Twitter Icon */}
              <a
                href="https://www.linkedin.com/in/imrul-hassan-403724268"
                className="text-white hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8 bg-white text-black rounded-full p-2" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col items-start max-w-xs">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="/home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
            </ul>

            <button className="mt-6 bg-primary text-white py-3 px-6 hover:bg-stone-900 transition-all duration-300">
              Review us
            </button>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-start max-w-xs">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-base">
              <li>Brownstone Restoration</li>
              <li>Brownstone Facade Restoration</li>
              <li>Roofing Solutions</li>
              <li>Brick Pointing</li>
              <li>Stucco Work</li>
              <li>Fire Escape Restoration</li>
              <li>Waterproofing</li>
              <li>Masonry</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
