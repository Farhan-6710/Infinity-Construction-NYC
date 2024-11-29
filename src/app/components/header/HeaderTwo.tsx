"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import SidebarMenu from "./SidebarMenu";

const HeaderTwo: React.FC = () => {
  return (
    <header className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto flex justify-center md:justify-between items-center p-1 px-4">
        {/* Left Div: Logo */}
        <div className="flex flex-col sm:flex-row py-12 xl:py-0 justify-center items-center gap-6">
          <div>
            <Link href="/">
              <Image
                src="/logo-new.png"
                alt="Logo"
                width={120}
                height={40}
                priority={true}
                className="cursor-pointer w-36 md:w-32"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p
              className="text-2xl text-tertiary dark:text-gray-200 font-semibold"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Infinity Construction NYC
            </p>
            <p className="text-tertiary dark:text-gray-200">
              Quality is our Specialty
            </p>
          </div>
          <button className="flex sm:hidden bg-primary text-white px-4 py-3 hover:bg-orange-600 transition-all duration-300 items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>347 939 5779</span>
          </button>
        </div>

        {/* Middle Div: Navbar (Only for large screens) */}
        <div className="hidden xl:flex gap-6 justify-center items-center">
          <nav>
            <ul
              className="flex items-center space-x-6 text-gray-700 dark:text-gray-300 font-medium"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              <li className="text-secondary text-lg hover:text-orange-500 bg-yellow-100 dark:bg-yellow-200 p-2 px-4">
                <Link href="/">HOME</Link>
              </li>
              <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500">
                <Link href="/about">ABOUT</Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative z-10 group">
                <div className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 cursor-pointer">
                  SERVICES
                </div>
                <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-lg w-[400px] pt-6">
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/services/historical-landmarks-restoration">
                      Historical Landmarks Design Restoration
                    </Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/services/brownstone-restoration">
                      Brownstone Restoration
                    </Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/services/fire-escape-restoration">
                      Fire Escape Restoration
                    </Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/services/masonry-contractors">
                      Masonry Contractors
                    </Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/services/brownstone-renovation">
                      Brownstone Renovation Contractors Brooklyn
                    </Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/services/brownstone-facade-restoration">
                      Brownstone Facade Restoration
                    </Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/services/roofing">Roofing</Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/services/paving">Paving</Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/services/brick-pointing">Brick Pointing</Link>
                  </li>
                </ul>
              </li>

              <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500">
                <Link href="/projects">PROJECTS</Link>
              </li>
              <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500">
                <Link href="/gallery">GALLERY</Link>
              </li>

              <li className="relative z-10 group">
                <div className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 cursor-pointer">
                  MORE
                </div>
                <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-lg">
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/blog">BLOG</Link>
                  </li>
                  <li className="text-secondary dark:text-gray-300 text-lg hover:text-orange-500 px-4 py-2">
                    <Link href="/contact">CONTACT</Link>
                  </li>
                </ul>
              </li>

              <ModeToggle />
            </ul>
          </nav>
          <button className="bg-primary text-white px-4 py-3 hover:bg-white hover:text-primary hover:border-primary hover:border transition-all duration-300 flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>347 939 5779</span>
          </button>
        </div>
        <SidebarMenu />
      </div>
    </header>
  );
};

export default HeaderTwo;
