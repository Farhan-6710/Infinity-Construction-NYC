"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Update scrolled state based on scroll position
  const updateScrolledState = () => {
    setScrolled(window.scrollY > 20);
  };

  // Initialize and listen to scroll event
  useEffect(() => {
    // Set the initial state based on the current scroll position
    updateScrolledState();

    // Add scroll event listener
    window.addEventListener("scroll", updateScrolledState);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);
  return (
    <div className="hidden xl:flex gap-6 justify-center items-center">
      <nav>
        <ul
          className={`flex items-center space-x-6 font-medium ${
            scrolled
              ? "text-secondary dark:text-white"
              : "text-white dark:text-gray-100"
          }`}
          style={{ fontFamily: "var(--font-forum)" }}
        >
          <Link href="/">
            <li className="text-xl font-bold transition-all duration-300 bg-primary dark:bg-primary p-2 px-4 text-white">
              HOME
            </li>
          </Link>
          <Link href="/about">
            <li className="text-xl hover:text-orange-500">ABOUT</li>
          </Link>

          {/* Services Dropdown */}
          <li className="relative z-10 group">
            <div className="text-xl hover:text-orange-500 cursor-pointer">
              SERVICES
            </div>
            <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-lg w-[400px] pt-6">
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/services">
                  Historical Landmarks Design Restoration
                </Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/services">Brownstone Restoration</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/services">Fire Escape Restoration</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/services">Masonry Contractors</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/services">
                  Brownstone Renovation Contractors Brooklyn
                </Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/services">Brownstone Facade Restoration</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/services">Roofing</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/services">Paving</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/services">Brick Pointing</Link>
              </li>
            </ul>
          </li>
          <Link href="/projects">
            <li className="text-xl hover:text-orange-500">PROJECTS</li>
          </Link>
          <Link href="/gallery">
            <li className="text-xl hover:text-orange-500">GALLERY</li>
          </Link>

          <li className="relative z-10 group">
            <div className="text-xl hover:text-orange-500 cursor-pointer">
              MORE
            </div>
            <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-lg">
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/">FAQ</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/">BLOG</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <button className="bg-primary text-white px-4 py-3 hover:bg-stone-900 hover:text-white dark:hover:text-white hover:border-transparent hover:border border border-transparent dark:border-transparent rounded-md shadow-lg transition-all duration-300 flex items-center space-x-2">
        <Phone className="w-5 h-5" />
        <span>347 939 5779</span>
      </button>
    </div>
  );
};

export default Navbar;
