"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-emerald-600 tracking-tight">
              DietitianPro.
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-7">
            <Link href="/about" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/methodology" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
              Methodology
            </Link>
            <Link href="/services" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
              Programs
            </Link>
            <Link href="/stories" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
              Success Stories
            </Link>
            <Link href="/faq" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
              FAQ
            </Link>
            
            {/* Primary CTA */}
            <Link href="/#calculator" className="ml-4 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition-all shadow-sm">
              Free Assessment
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-emerald-600 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen border-b border-gray-100" : "max-h-0"}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-inner">
          <Link onClick={closeMenu} href="/about" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl">
            About
          </Link>
          <Link onClick={closeMenu} href="/methodology" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl">
            Methodology
          </Link>
          <Link onClick={closeMenu} href="/services" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl">
            Programs
          </Link>
          <Link onClick={closeMenu} href="/stories" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl">
            Success Stories
          </Link>
          <Link onClick={closeMenu} href="/faq" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl">
            FAQ
          </Link>
          <div className="pt-4 px-3">
            <Link onClick={closeMenu} href="/#calculator" className="block w-full text-center py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-md">
              Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}