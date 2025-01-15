"use client";
import Link from 'next/link';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

  return (
    <footer className="bg-black text-gray-200 font-mono shadow-lg w-full">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Tools Section */}
        <div className="flex flex-col items-center">
          <img src="/Gear_Up_Design.png" alt="Range of View Logo" className="mb-2" style={{ width: "100px" }} />
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="#services" // Link to the section ID
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  scrollToSection("services"); // Scroll to the section
                }}
                className="hover:text-emerald-500 transition-colors duration-300"
              >
                Music Mixing
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="hover:text-emerald-500 transition-colors duration-300"
              >
                Mastering Services
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="hover:text-emerald-500 transition-colors duration-300"
              >
                Cover Art / Graphics
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-1">
                <Link
                  href="mailto:rangeofviewmusic@gmail.com"
                  target="_blank"
                  className="hover:text-gray-500 transition-colors duration-300"
                >
                  <i className="fas fa-envelope"></i> Email
                </Link>
              </p>
              <p className="mb-1">
                <Link href="https://x.com/rangeofviewmus1" target="_blank" className="hover:text-blue-400">
                  <i className="fab fa-twitter"></i> Twitter
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  className="transition-colors duration-300"
                  style={{ color: 'ffffff' }} // Default color
                  onMouseEnter={(e) => e.currentTarget.style.color = '#25f4ee'} // Hover color
                  onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'} // Reset on leave
                >
                  TikTok
                </Link>
              </p>
            </div>
            <div>
              <p className="mb-1">
                <Link href="https://www.instagram.com/rangeofviewmusic/" target="_blank" className="hover:text-pink-500">
                  <i className="fab fa-instagram"></i> Instagram
                </Link>
              </p>
              <p className="mb-1">
                <Link href="https://www.youtube.com/@rangeofviewmusic7138" target="_blank" className="hover:text-red-500">
                  <i className="fab fa-youtube"></i> YouTube
                </Link>
              </p>
              <p className="mb-1">
                <Link href="https://soundcloud.com/rangeofview" target="_blank" className="hover:text-orange-500">
                  <i className="fab fa-soundcloud"></i> SoundCloud
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className="text-gray-400 text-center py-4"
        style={{ backgroundColor: "rgba(22, 22, 23, 0.8)" }}
      >
        <p>Copyright &copy; {new Date().getFullYear()} Range Of View Music. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;