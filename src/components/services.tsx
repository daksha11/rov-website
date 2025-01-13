"use client";
import React from "react";

function Service() {
  return (
    <div className="min-h-screen bg-black p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        {/* Centered Services Title */}
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-12 md:mb-24">
          R.O.V. SERVICES
        </h1>

        <div className="flex flex-col gap-16 md:gap-32">
          {/* Mixing/Mastering Service */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full max-w-3xl mx-auto md:ml-auto md:mr-16">
            <img
              src="/services1.jpg"
              alt="Mixing Console"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col gap-4 md:gap-6 flex-1 text-center md:text-left">
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wider">
                MIXING / MASTERING
              </h2>
              <p className="text-gray-300 text-lg md:text-xl">
                Studio mixes, live performance mixes,
                <br />
                beat mixes, and mastering.
                <br />
                Comes with revisions.
              </p>
              <div>
                <button className="bg-[#3b96a2] text-white px-12 py-4 md:px-12 md:py-3 rounded-full text-lg font-medium hover:bg-[#2d7782] transition-colors shadow-lg w-fit mx-auto md:mx-0">
                  Contact us
                </button>
              </div>
            </div>
          </div>

          {/* Cover Art/Graphics Service */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full max-w-3xl mx-auto md:ml-auto md:mr-16">
            <img
              src="/services2.jpg"
              alt="Album Cover Example"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col gap-4 md:gap-6 flex-1 text-center md:text-left">
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wider">
                COVER ART / GRAPHICS
              </h2>
              <p className="text-gray-300 text-lg md:text-xl">
                Album/Song Covers, Graphics for
                <br />
                events, flyers, social media posts, and
                <br />
                more.
              </p>
              <div>
                <button className="bg-[#3b96a2] text-white px-12 py-4 md:px-12 md:py-3 rounded-full text-lg font-medium hover:bg-[#2d7782] transition-colors shadow-lg w-fit mx-auto md:mx-0">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
