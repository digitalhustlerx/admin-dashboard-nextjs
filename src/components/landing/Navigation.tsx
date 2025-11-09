"use client";

import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold text-white">LaunchPad</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Products
            </a>
            <a href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Blog
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              FAQ
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2.5 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all">
              Book a demo
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/50">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              Pricing
            </a>
            <a href="#products" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              Products
            </a>
            <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              Blog
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              Contact
            </a>
            <a href="#faq" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
              FAQ
            </a>
            <div className="pt-4 space-y-2">
              <button className="w-full px-5 py-2.5 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all">
                Book a demo
              </button>
              <button className="w-full px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
