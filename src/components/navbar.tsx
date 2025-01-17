"use client"; // Required for client-side interactivity
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // Import useRouter and usePathname
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (id: string) => {
    if (pathname !== "/") {
      // If not on the home page, navigate to the home page with the section ID as a hash
      router.push(`/#${id}`);
    } else {
      // If already on the home page, scroll to the section
      scrollToSection(id);
    }
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

  const handleCulturesClick = () => {
    if (pathname === "/cultures") {
      // If already on the Cultures page, scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to the Cultures page
      router.push("/cultures");
    }
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  const handleMembersClick = () => {
    if (pathname === "/members") {
      // If already on the Members page, scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to the Members page
      router.push("/members");
    }
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  // Handle hash changes after navigation to the home page
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove the '#' from the hash
      scrollToSection(hash);
    }
  }, [pathname]);

  return (
    <header
      className="fixed w-full z-50 font-proxima-nova shadow-lg"
      style={{ backgroundColor: "rgba(22, 22, 23, 0.8)" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 hover:scale-150 transition-transform duration-500">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Gear_Up_Design.png"
              alt="Gear Up Design Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg text-white font-semibold">
          <button
            onClick={() => handleScrollToSection("home")}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => handleScrollToSection("mix-playlist")}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Mix Playlist
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => handleScrollToSection("services")}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => handleScrollToSection("gallery")}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          {/* Cultures Button */}
          <button
            onClick={handleCulturesClick}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Culture
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          {/* Members Button */}
          <button
            onClick={handleMembersClick}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Members
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-700 md:hidden`}
        style={{ backgroundColor: "rgba(22, 22, 23, 0.8)" }}
      >
        <nav className="flex flex-col text-gray-100 space-y-4 p-4 font-semibold">
          <button
            onClick={() => handleScrollToSection("home")}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollToSection("mix-playlist")}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Mix Playlist
          </button>
          <button
            onClick={() => handleScrollToSection("services")}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Services
          </button>
          <button
            onClick={() => handleScrollToSection("gallery")}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Gallery
          </button>
          {/* Cultures Button */}
          <button
            onClick={handleCulturesClick}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Cultures
          </button>
          {/* Members Button */}
          <button
            onClick={handleMembersClick}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Members
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;