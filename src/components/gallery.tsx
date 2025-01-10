"use client";

function Gallery() {
  return (
    <div className="min-h-screen bg-black p-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-24 mb-16">
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
              src="/gallery2.png"
              alt="ROV pendant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Gallery Text */}
        <h1 className="text-white text-8xl font-bold tracking-wider text-center my-8">
          GALLERY
        </h1>

        {/* Bottom Image */}
        <div className="rounded-lg overflow-hidden max-w-3xl mx-auto">
          <img
            src="/gallery3.png"
            alt="Hands with ROV logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;