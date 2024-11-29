
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { ModeToggle } from "../ModeToggle";

function SidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle Sheet open/close
    const toggleSheet = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
      {/* Right Div: Mobile Menu Toggle */}
      <div className="xl:hidden absolute right-4 top-6 sm:right-4 sm:top-16 md:right-4 md:top-28">
        <button
          onClick={toggleSheet}
          className="text-gray-700 dark:text-gray-300 p-3 hover:text-orange-500"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>
      {/* Sidebar Sheet Component */}
      <Sheet open={isOpen} onOpenChange={toggleSheet}>
        <SheetContent
          side="left"
          className="dark:bg-gray-800 transition-colors duration-300"
        >
          <SheetHeader>
            <SheetTitle
              className="dark:text-gray-100"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Mobile Menu
            </SheetTitle>
            <SheetDescription
              className="dark:text-gray-500 text-2xl font-semibold"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Infinity Construction NYC
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Contact
            </Link>
          </nav>
          <div className="p-4">
            <button className="bg-primary text-white px-4 py-3 hover:bg-white hover:text-primary hover:border-primary hover:border transition-all duration-300 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>347 939 5779</span>
            </button>
          </div>
          <ModeToggle />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SidebarMenu;
