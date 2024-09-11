import React from "react";
import "flowbite";

export default function AHeader() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between"
          aria-label="Global"
        >
          {/* Responsive Logo */}
          <a href="#top">
            <img
              className="h-8 w-auto sm:h-12 md:h-20 hover:opacity-75" // Responsive height for different screen sizes
              src="/countryMusicInChina.jpg"
              alt="Logo"
            />
          </a>

          {/* Navigation Links */}
          <div className="flex flex-row items-center gap-5">
            <ul className="flex flex-row space-x-4">
              <li>
                <a
                  href="/#newsletter"
                  className="block text-[#ffae34] text-xs sm:text-lg md:text-2xl font-third tracking-tight hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5bb6ad] p-2"
                >
                  What's New
                </a>
              </li>
              <li>
                <a
                  href="/#learningAndJamming"
                  className="block text-[#ffae34] text-xs sm:text-lg md:text-2xl font-third tracking-tight hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5bb6ad] p-2"
                >
                  Learning and Jamming Bluegrass
                </a>
              </li>
              <li>
                <a
                  href="/#joinOurEvents"
                  className="block text-[#ffae34] text-xs sm:text-lg md:text-2xl font-third tracking-tight hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5bb6ad] p-2"
                >
                  Join Our Events
                </a>
              </li>
              <li>
                <a
                  href="/#contactUs"
                  className="block text-[#ffae34] text-xs sm:text-lg md:text-2xl font-third tracking-tight hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5bb6ad] p-2"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
