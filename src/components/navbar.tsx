"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <Link
              href="/"
              onClick={toggleMenu}
              className="relative group hover:text-amber-400 transition-colors duration-300"
            >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/services"
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Mix Playlist
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/services"
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/portfolio"
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Culture
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="relative group hover:text-amber-400 transition-colors duration-300"
          >
            Members
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
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
          <Link
            href="/"
            onClick={toggleMenu}
            className="hover:text-gray-300 text-lg transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={toggleMenu}
            className="hover:text-gray-300 text-lg transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            onClick={toggleMenu}
            className="hover:text-gray-300 text-lg transition-colors duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="hover:text-gray-300 text-lg transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="hover:text-gray-300 text-lg transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;