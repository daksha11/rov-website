"use client";
import React from "react";

function Service() {
  return (
    <div className="min-h-screen bg-black p-16">
      <div className="max-w-5xl mx-auto">
        {/* Centered Services Title */}
        <h1 className="text-white text-6xl font-bold text-center mb-24">
          R.O.V. SERVICES
        </h1>

        <div className="flex flex-col items-center gap-32">
          {/* Mixing/Mastering Service */}
          <div className="flex gap-12 items-center">
            <img
              src="/services1.jpg"
              alt="Mixing Console"
              className="w-56 h-56 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-6">
              <h2 className="text-white text-3xl font-bold tracking-wider">
                MIXING / MASTERING
              </h2>
              <p className="text-gray-300 text-xl">
                Studio mixes, live performance mixes,
                <br />
                beat mixes, and mastering.
                <br />
                Comes with revisions.
              </p>
              <button className="bg-[#3b96a2] text-white px-12 py-3 rounded-full text-lg font-medium hover:bg-[#2d7782] transition-colors shadow-lg">
                Contact us
              </button>
            </div>
          </div>

          {/* Cover Art/Graphics Service */}
          <div className="flex gap-12 items-center">
            <img
              src="/services2.jpg"
              alt="Album Cover Example"
              className="w-56 h-56 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-6">
              <h2 className="text-white text-3xl font-bold tracking-wider">
                COVER ART / GRAPHICS
              </h2>
              <p className="text-gray-300 text-xl">
                Album/Song Covers, Graphics for
                <br />
                events, flyers, social media posts, and
                <br />
                more.
              </p>
              <button className="bg-[#3b96a2] text-white px-12 py-3 rounded-full text-lg font-medium hover:bg-[#2d7782] transition-colors shadow-lg">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;