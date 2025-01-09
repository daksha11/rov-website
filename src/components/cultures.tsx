"use client"
import React from 'react';

const Cultures = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-45">
        <img src="Gear_Up_Design.png" alt="ROV Logo" className="h-64 w-auto" />
        <span className="text-7xl font-bold tracking-wide">In Atlanta</span>
      </div>

      {/* Main content area */}
      <div className="space-y-8">
        <div className="flex gap-8 items-center">
          <div className="w-1/2">
            <img 
              src="/cultures1.png" 
              alt="Restaurant view" 
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <p>Sample of restaurant review omg it is really good and tasty and delicious yanke doodle bop. This is a staple in ATL you guys Must try</p>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <div className="w-1/2">
            <p>Sample of restaurant review omg it is really good and tasty and delicious yanke doodle bop. This is a staple in ATL you guys Must try</p>
          </div>
          <div className="w-1/2">
            <img 
              src="cultures2.png" 
              alt="Restaurant view" 
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <div className="w-1/2">
            <img 
              src="cultures3.png" 
              alt="Restaurant view" 
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <p>Sample of restaurant review omg it is really good and tasty and delicious yanke doodle bop. This is a staple in ATL you guys MUST try</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultures;