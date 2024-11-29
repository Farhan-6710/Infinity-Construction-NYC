import React from "react";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const HeaderOne: React.FC = () => {
  return (
    <div>
      <header className="hidden md:flex w-full bg-white text-black dark:bg-gray-900 dark:text-white p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16">
          {/* First Div */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 w-full sm:w-auto mb-4 sm:mb-0 text-blue-950 dark:text-gray-300">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">
                infinityconstructionnyc@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">347 939 5779</span>
            </div>
          </div>

          {/* Second Div */}
          <div className="flex space-x-4 w-full sm:w-auto justify-center sm:justify-end">
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-blue-950 dark:text-gray-300" />
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-blue-950 dark:text-gray-300" />
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-blue-950 dark:text-gray-300" />
          </div>
        </div>
      </header>
      <div className=" border-b border-slate-700 dark:border-transparent mx-20"></div>
    </div>
  );
};

export default HeaderOne;
