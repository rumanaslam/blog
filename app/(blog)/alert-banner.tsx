"use client"
import { useState } from "react";
import Link from "next/link";

export default function AlertBanner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-black text-white backdrop-blur flex items-center justify-between px-6 h-10">
      <div className="py-2 text-center font-semibold">TOURISM BLOGS</div>
      <div className="flex items-center space-x-6 text-sm font-medium">
        {/* Hamburger button for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-10 right-6 bg-black text-white border rounded-lg p-4 md:static md:flex md:space-x-6 md:p-0 md:bg-transparent`}
        >
          <Link href="/" className="block md:inline hover:text-cyan-500">
            Home
          </Link>
          <Link href="/about" className="block md:inline hover:text-cyan-500">
            About
          </Link>
          <Link href="/contact" className="block md:inline hover:text-cyan-500">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
