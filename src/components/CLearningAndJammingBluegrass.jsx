import React from "react";

export default function CLearningAndJammingBluegrass() {
  return (
    <div className="bg-white mt-2" id="learningAndJamming">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-[#5bb6ad] text-5xl text-center mt-1 mb-12 font-third">
          Learning and Jamming Bluegrass
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a
            href="https://www.youtube.com/playlist?list=PL4I-RJ7U73rxvJ_kZIPVwX2oZnNDO6y9n"
            className="group"
            target="_blank"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="/learnJam1.jpg"
                alt=""
                className="h-40 w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Offline Jamming Sessions
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-500 font-style: italic">
              Click to see our previous jamming sessions!
            </p>
          </a>

          <a
            href="https://www.xiaohongshu.com/board/636a66c5000000000101f0e3?share_id=e61b3a84b6ab4c66bbcbb12c5ce55f0a"
            className="group"
            target="_blank"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="/learnJam2.jpg"
                alt=""
                className="h-40 w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Learn and Share
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-500 font-style: italic">
              Click to see tutorials for bluegrass instruments
            </p>
          </a>

          <a
            href="https://www.xiaohongshu.com/board/636a6566000000000101ed99?source=web_profile_page"
            className="group"
            target="_blank"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="/learnJam3.jpg"
                alt=""
                className="h-40 w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Chinese Bluegrass Fusion
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-500 font-style: italic">
              Click to see how we play traditional Chinese songs and Chinese
              folk songs in a tone of bluegrass
            </p>
          </a>

          <a
            href="https://torchofdoubtandchaos.notion.site/Shanghai-Old-Time-and-Bluegrass-Jam-Repertoire-and-Reference-7bdc395c49884e9b86aa1e448dc78042"
            className="group"
            target="_blank"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="/learnJam4.jpg"
                alt=""
                className="h-40 w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Our Song Books
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-500 font-style: italic">
              Click to access to our song books. It will surprise you!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
