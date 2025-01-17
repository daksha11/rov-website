"use client";
import React from "react";
import Button from "./ui/contact_us"; // Adjust the import path as per your project structure

function Service() {
  return (
    <div
      className="min-h-screen bg-black p-8 md:p-16"
      id="services"
      style={{
        backgroundImage: "url('/paper_texture_back_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
              <div className="w-fit mx-auto md:mx-0">
                <Button />
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
              <div className="w-fit mx-auto md:mx-0">
                <Button />
              </div>
            </div>
          </div>

          {/* Google Calendar Embed */}
          <div className="flex justify-center mt-12">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showTitle=0&src=bS5yb2hpdGhzYWlnb3BhbEBnbWFpbC5jb20&color=%23039BE5"
              style={{ borderWidth: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;