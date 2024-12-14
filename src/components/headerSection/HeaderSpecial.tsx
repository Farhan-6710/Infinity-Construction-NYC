"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { ModeToggle } from "../extras/ModeToggle";
import SidebarMenu from "./SidebarMenu";
import NavbarSpecial from "./NavbarSpecial";

const HeaderSpecial: React.FC = () => {
  return (
    <header className="sm:fixed z-10 sm:z-30 w-full transition-colors duration-300 bg-white dark:bg-slate-950 shadow-lg dark:border dark:border-gray-800">
      <div className="container mx-auto flex justify-center sm:justify-between items-center p-1 px-4">
        {/* Left Div: Logo */}
        <div className="flex flex-col sm:flex-row py-12 sm:py-0 justify-center items-center gap-6">
          <div>
            <Link href="/">
              <Image
                src="/logo-new.png"
                alt="Logo"
                width={120}
                height={40}
                loading="lazy" // Lazy load the image
                className="cursor-pointer w-24 2xl:w-32"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center text-tertiary dark:text-white">
            <p
              className="text-2xl font-semibold leading-tight"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Infinity Construction NYC
            </p>
            <p
              className="text-lg leading-tight"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Quality is our Specialty
            </p>
          </div>
          <button className="flex sm:hidden bg-primary text-white px-4 py-3 hover:bg-orange-600 transition-all duration-300 items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>347 939 5779</span>
          </button>
        </div>

        {/* Middle Div: Navbar (Only for large screens) */}
        <NavbarSpecial />
        <div className="flex xl:hidden">
          <SidebarMenu />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default HeaderSpecial;
