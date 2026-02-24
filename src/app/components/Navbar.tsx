import { Menu, X, Phone } from "lucide-react";
import React from "react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🕉️</span>
            </div>
            <div>
              <h1 className="text-xl">Ayodhya Tours</h1>
              <p className="text-xs text-muted-foreground">Sacred Journeys</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-orange-600 transition-colors">Home</a>
            <a href="#packages" className="hover:text-orange-600 transition-colors">Packages</a>
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all">
              <Phone className="w-4 h-4" />
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="hover:text-orange-600 transition-colors py-2">Home</a>
              <a href="#packages" className="hover:text-orange-600 transition-colors py-2">Packages</a>
              <a href="#about" className="hover:text-orange-600 transition-colors py-2">About</a>
              <a href="#contact" className="hover:text-orange-600 transition-colors py-2">Contact</a>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                <Phone className="w-4 h-4" />
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
