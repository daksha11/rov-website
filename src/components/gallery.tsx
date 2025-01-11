"use client";

function Gallery() {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-8 md:p-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Top Two Images Side by Side */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-16 mb-8 sm:mb-16">
          {/* First Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="/gallery1.png"
              alt="Artistic illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="/gallery3.png"
              alt="Hands with ROV logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Gallery Text */}
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-bold tracking-wider text-center my-8 sm:my-16">
          GALLERY
        </h1>

        {/* Bottom Image */}
        <div className="rounded-lg overflow-hidden max-w-3xl mx-auto mb-4 sm:mb-8 md:mb-16">
          <img
            src="/gallery2.png"
            alt="ROV pendant"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;