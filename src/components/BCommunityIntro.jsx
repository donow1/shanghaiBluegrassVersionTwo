import React, { useState } from "react";

export default function BCommunityIntro() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: "/jam5.jpg", alt: "Path" },
    { src: "/welcome2.png", alt: "Welcome" },
    { src: "/jam1.jpg", alt: "Events" },
    { src: "/jam2.JPG", alt: "David Bowie" },
    { src: "/jam3.jpg", alt: "Fun" },
    { src: "/jam4.jpg", alt: "Path" },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="intro"
      className="justify-center items-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-10 w-full pt-28 sm:pt-36 md:pt-28 mt-24 sm:mt-24 md:mt-20"
    >
      {/* Custom Carousel */}
      <div id="controls-carousel" className="relative w-full h-full px-10 mt-30">
        <div className="relative h-96 md:h-[32rem] overflow-hidden rounded-lg z-10 mt-30">
          {/* Carousel slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="block w-full h-full object-cover object-center md:object-top"
              />
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button
          type="button"
          className="absolute top-0 start-0 z-20 flex items-center justify-center h-full px-12 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next button */}
        <button
          type="button"
          className="absolute top-0 end-0 z-20 flex items-center justify-center h-full px-12 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Introduction Text */}
      <div id="introductionText" className="m-x-10px mr-6 md:w-full p-4">
        <p className="text-2xl font-third tracking-tight sm:text-1xl md-8">
          Hey there, Friends!
        </p>
        <p className="text-2xl sm:text-1xl mt-8 leading-[4rem]">
          We’re super excited to have you here. Our non-profit community is all
          about{" "}
          <span className="text-[#5bb6ad] italic font-third">
            jamming out, swapping skills, and spreading good vibes.
          </span>{" "}
          Whether you’re a bluegrass newbie or a seasoned picker, there’s a spot
          for you in our circle. So grab your instrument (or just yourself), and
          let’s make some music magic together! 🎸🎵{" "}
        </p>
      </div>
    </div>
  );
}

