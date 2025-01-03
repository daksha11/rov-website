"use client";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 font-mono shadow-lg w-full">
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
        <p>Copyright &copy; {new Date().getFullYear()} Range Of View. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
