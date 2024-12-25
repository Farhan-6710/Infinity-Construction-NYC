"use client";

import { specialityData } from "@/data/ourServicesData";
import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarSpecial = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="hidden xl:flex gap-6 justify-center items-center">
      <nav>
        <ul
          className="flex items-center space-x-6 font-medium text-secondary dark:text-white"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          <Link href="/">
            <li
              className={`text-xl ${
                isActive("/")
                  ? "font-bold transition-all duration-300 bg-primary dark:bg-primary p-2 px-4 text-white"
                  : ""
              }`}
            >
              HOME
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`text-xl ${
                isActive("/about")
                  ? "font-bold transition-all duration-300 bg-primary dark:bg-primary p-2 px-4 text-white"
                  : ""
              }`}
            >
              ABOUT
            </li>
          </Link>

          {/* Services Dropdown */}
          <li className="relative z-10 group">
            <div
              className={`text-secondary dark:text-gray-100 text-xl px-4 py-2 ${
                isActive("/services")
                  ? "font-bold transition-all duration-300 bg-primary dark:bg-primary p-2 px-4 text-white"
                  : ""
              }`}
            >
              SERVICES
            </div>
            <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-lg w-[400px] pt-6">
              {specialityData.map((service) => (
                <li
                  key={service.heading}
                  className="cursor-pointer text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2"
                >
                  <Link href="/services">{service.heading}</Link>
                </li>
              ))}
            </ul>
          </li>

          <Link href="/projects">
            <li
              className={`text-xl ${
                isActive("/projects")
                  ? "font-bold transition-all duration-300 bg-primary dark:bg-primary p-2 px-4 text-white"
                  : ""
              }`}
            >
              PROJECTS
            </li>
          </Link>
          <Link href="/gallery">
            <li
              className={`text-xl ${
                isActive("/gallery")
                  ? "font-bold transition-all duration-300 bg-primary dark:bg-primary p-2 px-4 text-white"
                  : ""
              }`}
            >
              GALLERY
            </li>
          </Link>

          <li className="relative z-10 group">
            <div className="text-xl cursor-pointer">MORE</div>
            <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-lg">
              <li className="text-secondary dark:text-gray-100 text-xl px-4 py-2">
                <Link href="/">FAQ</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl px-4 py-2">
                <Link href="/blog">BLOG</Link>
              </li>
              <li
                className={`text-secondary dark:text-gray-100 text-xl px-4 py-2 ${
                  isActive("/contact")
                    ? "font-bold transition-all duration-300 bg-primary dark:bg-primary p-2 px-4 text-white"
                    : ""
                }`}
              >
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

export default NavbarSpecial;
