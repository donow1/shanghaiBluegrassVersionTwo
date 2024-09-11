import React from "react";

export default function BNewsletter() {
  return (
    <div>
      <div className="bg-white mt-2" id="newsletter">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-[#5bb6ad] text-5xl text-center mt-1 mb-12 font-third">
            What's New?
          </h2>

          {/* Responsive height */}
          <div className="mt-10 relative w-full overflow-hidden h-[34rem] sm:h-[36rem] md:h-[40rem] lg:h-[32rem]">
            <iframe
              src="https://v2-embednotion.com/14c5eec073624b209f5a8c9d51847a02"
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-full border-none"
              title="Newsletter Embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
