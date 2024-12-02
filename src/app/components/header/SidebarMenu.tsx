import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Menu, Phone, ChevronDown, ChevronUp } from "lucide-react";

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Toggle Sheet open/close
  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  // Toggle Services Dropdown
  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div>
      {/* Right Div: Mobile Menu Toggle */}
      <div className="xl:hidden absolute right-4 top-6 sm:right-4 sm:top-16 md:right-4 md:top-20">
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
              className="text-center py-10 dark:text-gray-300 text-2xl font-semibold"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Infinity Construction NYC
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center justify-between text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500 w-full"
              >
                Services
                {isServicesOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {isServicesOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Historical Landmarks Design Restoration
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Brownstone Restoration
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Fire Escape Restoration
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Masonry Contractors
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Brownstone Renovation Contractors Brooklyn
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Brownstone Facade Restoration
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Roofing
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Paving
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Brick Pointing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Projects
            </Link>
            <Link
              href="/"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-4 items-center">
            <div className="p-4">
              <button className="bg-primary text-white px-4 py-3 hover:bg-white hover:text-primary hover:border-primary hover:border transition-all duration-300 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>347 939 5779</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SidebarMenu;
