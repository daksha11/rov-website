"use client";

import React from 'react';
import Navbar from '@/components/navbar'; // Import the Navbar component
import Footer from "@/components/footer"; // Import the Footer component

const CulturesPage = () => {
  return (
    <div className="min-h-screen bg-black" 
      style={{backgroundImage: "url('/paper_texture_back_2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed' }}>
      {/* Navbar */}
      <Navbar />

      {/* Cultures Content */}
      <div className="min-h-screen p-4 md:p-6" id="culture">
        {/* Header - with adjusted vertical alignment */}
        <div className="flex flex-row items-center justify-center gap-2 mb-8">
          <div className="w-36 md:w-64 flex items-center">
            <img 
              src="Gear_Up_Design.png" 
              alt="ROV Logo" 
              className="w-full h-auto object-contain" 
            />
          </div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-wide whitespace-nowrap translate-y-5">
            In Atlanta
          </h1>
        </div>

        {/* Main content area */}
        <div className="space-y-8">
          {/* First Review */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="/cultures1.png" 
                alt="Restaurant view" 
                className="w-full h-48 md:h-32 object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-sm md:text-base">
                Sample of restaurant review omg it is really good and tasty and delicious yanke doodle bop. This is a staple in ATL you guys Must try
              </p>
            </div>
          </div>

          {/* Second Review */}
          <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-8 md:items-center">
            <div className="w-full md:w-1/2">
              <p className="text-sm md:text-base">
                Sample of restaurant review omg it is really good and tasty and delicious yanke doodle bop. This is a staple in ATL you guys Must try
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="cultures2.png" 
                alt="Restaurant view" 
                className="w-full h-48 md:h-32 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Third Review */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="cultures3.png" 
                alt="Restaurant view" 
                className="w-full h-48 md:h-32 object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-sm md:text-base">
                Sample of restaurant review omg it is really good and tasty and delicious yanke doodle bop. This is a staple in ATL you guys MUST try
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CulturesPage;