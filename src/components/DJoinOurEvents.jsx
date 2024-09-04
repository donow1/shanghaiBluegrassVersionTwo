import React from "react";

export default function DJoinOurEvents() {
  return (
    <div id="joinOurEvents">
      <div className="bg-white py-12 sm:py-10 mb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="my-8 px-4 text-center">
            <h2 className="text-[#5bb6ad] text-5xl text-center mt-1 mb-12 font-third">
              Join Our Events on Meetups
            </h2>
            <p className="mt-1 text-1xl font-medium text-gray-600 font-style: italic">
              🎸🎵 All skill levels welcome. See you there! 🤠✨
            </p>
          </div>

          <div className="mt-16 flex flex-col md:flex-row">
            <div id="eventDescription" className="md:w-1/2 p-4">
              <p className="text-2xl font-third tracking-tight sm:text-1xl md-8">
                Hey folks!{" "}
              </p>
              <p className="text-2xl sm:text-1xl mt-8">
                Join us on Mondays at{" "}
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g308272-d6818673-Reviews-The_Tipsy_Fiddler_Irish_Pub-Shanghai.html"
                  target="_blank"
                >
                  <span className="text-[#ffae34] font-style: italic md:hover:text-[#5bb6ad] cursor-pointer">
                    {" "}
                    The Tipsy Fiddler{" "}
                  </span>
                </a>{" "}
                in Shanghai from{" "}
                <span className="font-style: italic">
                  7-9 pm
                </span>{" "}
                for a night of bluegrass, old-time, and American folk. Bring
                your instruments, share your tunes, and let's make some sweet
                music together!{" "}
              </p>
              <p className="text-2xl sm:text-1xl mt-8">
                We also update our event schedule on Meetup!{" "}
                <a
                  href="https://www.meetup.com/shanghai-bluegrass-jam-meetup-group/events/"
                  target="_blank"
                >
                  <span className="text-[#ffae34] font-style: italic md:hover:text-[#5bb6ad] cursor-pointer">
                    {" "}
                    Click here{" "}
                  </span>
                </a>{" "}
                to check out more information.
              </p>
            </div>

            <div id="eventMap" className="md:w-1/2 p-4">
              <a
                href="https://www.google.com/maps/place/THE+TIPSY+FIDDLER/@31.203512,121.430919,15z/data=!4m6!3m5!1s0x35b265477a05593d:0x5477c1910573c0fa!8m2!3d31.203512!4d121.430919!16s%2Fg%2F11b6vp0_nd?entry=ttu"
                target="_blank"
              >
                <img
                  src="/mapTipsy.png"
                  className="w-full h-auto hover:opacity-75"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
