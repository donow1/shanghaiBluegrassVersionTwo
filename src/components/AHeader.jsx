import React from "react";
import "flowbite";

export default function AHeader() {
  return (
    <div>
      <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 md:my-2 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >


          <a href="#top">
            <img
              href="/#AHeader"
              className="h-20 w-auto hover:opacity-75"
              src="/logo-w.png"
              alt=""
            ></img>
          </a>

          <div className="flex flex-row items-center gap-5 md:mt-23 sm:justify-end sm:-mt-3 sm:ps-5">

            <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/#newsletter"
                  className="block py-2 pl-3 pr-4 text-[#ffae34] text-xl font-third tracking-tight sm:text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5bb6ad] md:p-0 md:text-3xl"
                >
                  What's New
                </a>
              </li>

              <li>
                <a
                  href="/#learningAndJamming"
                  className="block py-2 pl-3 pr-4 text-[#ffae34] text-xl font-third tracking-tight sm:text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5bb6ad] md:p-0 md:text-3xl"
                >
                  Learning and Jamming Bluegrass
                </a>
              </li>
              <li>
                <a
                  href="/#joinOurEvents"
                  className="block py-2 pl-3 pr-4 text-[#ffae34] text-xl font-third tracking-tight sm:text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5bb6ad] md:p-0 md:text-3xl"
                >
                  Join Our Events
                </a>
              </li>
              <li>
                <a
                  href="/#contactUs"
                  className="block py-2 pl-3 pr-4 text-[#ffae34] text-xl font-third tracking-tight sm:text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5bb6ad] md:p-0 md:text-3xl"
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
