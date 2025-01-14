"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    console.log(`Scrolling to section with id: ${id}`); // Debugging
    const element = document.getElementById(id);
    if (element) {
      console.log("Element found:", element); // Debugging
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found.`); // Debugging
    }
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <header
      className="fixed w-full z-50 font-mono shadow-lg"
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
        <nav className="hidden md:flex space-x-8 text-lg text-white">
          <button
            onClick={() => scrollToSection("home")}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("mix-playlist")}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Mix Playlist
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          {/*<button
            onClick={() => scrollToSection("gallery")}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("culture")}
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Culture
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </button>*/}
          <button
            onClick={() => scrollToSection("members")}
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
        <nav className="flex flex-col text-gray-100 space-y-4 p-4">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("mix-playlist")}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Mix Playlist
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Services
          </button>
          {/*<button
            onClick={() => scrollToSection("gallery")}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("culture")}
            className="hover:text-gray-300 text-lg transition-colors duration-300 text-left"
          >
            Culture
          </button>*/}
          <button
            onClick={() => scrollToSection("members")}
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