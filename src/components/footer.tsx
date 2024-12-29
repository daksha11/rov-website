"use client";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 font-mono shadow-lg w-full">
      {/* Bright white line */}
      {/*<div className="w-full h-[2px] bg-white"></div>*/}

      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tools Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Tools</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/music-production-tools"
                className="hover:text-amber-500 transition-colors duration-300"
              >
                Music Production Tools
              </Link>
            </li>
            <li>
              <Link
                href="/dj-equipment"
                className="hover:text-amber-500 transition-colors duration-300"
              >
                DJ Equipment
              </Link>
            </li>
            <li>
              <Link
                href="/sound-design"
                className="hover:text-amber-500 transition-colors duration-300"
              >
                Sound Design Tools
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services"
                className="hover:text-emerald-500 transition-colors duration-300"
              >
                Recording Studio
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-emerald-500 transition-colors duration-300"
              >
                Music Mixing
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-emerald-500 transition-colors duration-300"
              >
                Mastering Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">123 Melody Lane, Harmony City</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Email: support@musicvibes.com</p>
        </div>
      </div>

      {/* Bright white line */}
      {/*<div className="w-full h-[2px] bg-white"></div>*/}

      {/* Copyright Section */}
      <div
        className="text-gray-400 text-center py-4"
        style={{ backgroundColor: "rgba(22, 22, 23, 0.8)" }}
      >
        <p>Copyright &copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
