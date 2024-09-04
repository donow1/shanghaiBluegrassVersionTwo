import React from "react";
import "flowbite"; // Ensure Flowbite is imported if you're using a bundler

export default function BCommunityIntro() {
  return (
    // <div id="intro" className="flex z-20 justify-center items-center pt-24 mt-30 sm:mt-100 md:translate-y-12 mt-16 flex items-center flex-col md:flex-row">
    //grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8
    <div id="intro" className=" justify-center items-center  grid   grid-cols-1    sm:grid-cols-1  lg:grid-cols-2   xl:grid-cols-2   xl:gap-x-10                            w-full pt-24 mt-10 sm:mt-16 md:mt-20">

   
      <div
        id="controls-carousel"
        className="relative w-full h-full px-10 mt-30"
        data-carousel="static"
      >
        <div className="relative h-96 md:h-[32rem] overflow-hidden rounded-lg z-10 mt-30">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/jam5.jpg"
              className="absolute block w-full h-full object-cover object-center md:object-top"
              alt="Path"
            />
          </div>

          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="/welcome2.png"
              className="absolute block w-full h-full object-cover object-center md:object-top"
              alt="Welcome"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/jam1.jpg"
              className="absolute block w-full h-full object-cover object-center md:object-top"
              alt="Events"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/jam2.JPG"
              className="absolute block w-full h-full object-cover object-center md:object-top"
              alt="David Bowie"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/jam3.jpg"
              className="absolute block w-full h-full object-cover object-center md:object-top"
              alt="Fun"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/jam4.jpg"
              className="absolute block w-full h-full object-cover object-center md:object-top"
              alt="Path"
            />
          </div>
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-20 flex items-center justify-center h-full px-12 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-20 flex items-center justify-center h-full px-12 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div id="introductionText" className="m-x-10px mr-6">      
        <p className="text-2xl font-third tracking-tight sm:text-1xl md-8">
          Hey there, Friends!
        </p>
        <p className="text-2xl sm:text-1xl mt-8 leading-[4rem]  ">
          We’re super excited to have you here. Our non-profit
          community is all about <span className="text-[#5bb6ad] italic font-third">jamming out, swapping skills, and spreading good
          vibes.</span> Whether you’re a bluegrass newbie or a seasoned picker, there’s a
          spot for you in our circle. So grab your instrument (or just yourself), and let’s make some
          music magic together! 🎸🎵{" "}
        </p>
      </div>

    </div>
  );
}


