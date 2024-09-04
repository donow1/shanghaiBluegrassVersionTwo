import React from "react";

export default function BNewsletter() {
  return (
    <div>
      <div className="bg-white mt-2" id="newsletter">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-[#5bb6ad] text-5xl text-center mt-1 mb-12 font-third">
            What's New?
          </h2>
          <div className="mt-10 relative w-full overflow-hidden pt-[56.25%]">
            <iframe
              src="https://www.notioniframe.com/notion/lp1gqb4oeci"
              className="absolute top-[0] left-[0] bottom-[0] right-[0] w-full h-full border-[none]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
