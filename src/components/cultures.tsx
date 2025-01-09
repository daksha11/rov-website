"use client"
import React from 'react';

const Cultures = () => {
  return (
    <div className="bg-black min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <img src="Gear_Up_Design.png" alt="ROV Logo" className="h-12 w-auto" />
        <span className="text-white text-2xl font-bold tracking-wide">IN ATLANTA</span>
      </div>

      {/* Main content area */}
      <div className="space-y-8 relative">
        {/* First section */}
        <div>
          <div className="relative w-full max-w-2xl">
            <img 
              src="/cultures1.png" 
              alt="Restaurant view" 
              className="w- h-32 object-cover rounded-lg"
            />
            <span className="absolute top-2 right-2 text-white text-sm text-right">
              A peek into the thriving ATL Culture
            </span>
          </div>
          <p className="text-white mt-3">
            Sample of restaurant review omg it is really good and tasty and delicious yanke doodle bop. This is a staple in ATL you guys Must try
          </p>
        </div>

        {/* Second section */}
        <div className="flex justify-between gap-8">
          <div className="w-1/2">
            <img 
              src="cultures2.png" 
              alt="Restaurant view" 
              className="w-full h-28 object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2 text-white">
            <p className="mb-4">
              Sample of restaurant review omg it is really good and tasty and delicious yanke doodle bop.
            </p>
            <p>
              This is a staple in ATL you guys Must try
            </p>
          </div>
        </div>

        {/* Third section */}
        <div className="flex items-start justify-between gap-8">
          <div className="text-white flex-1">
            <p>
              Sample of restaurant review omg it is really good and tasty and delicious yanke doodle bop. This is a staple in ATL you guys MUST try
            </p>
          </div>
          <div className="w-1/3">
            <img 
              src="cultures3.png" 
              alt="Restaurant view" 
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute bottom-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-600 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Cultures;