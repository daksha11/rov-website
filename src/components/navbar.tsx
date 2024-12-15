"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-black font-mono shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 hover:scale-110 transition-transform duration-500">
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
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link
            href="/services"
            className="relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-emerald-600 transition-colors duration-300"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-800 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/portfolio"
            className="relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-emerald-600 transition-colors duration-300"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-800 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-emerald-600 transition-colors duration-300"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-800 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-emerald-600 transition-colors duration-300"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-800 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-700 md:hidden bg-gray-800`}
      >
        <nav className="flex flex-col text-gray-100 space-y-4 p-4">
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
