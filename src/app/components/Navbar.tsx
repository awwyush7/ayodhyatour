import { Menu, X, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import React from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                <span className="text-white text-2xl">🕉️</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-orange-700" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Ayodhya Tours
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Sacred Journeys Await</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-orange-600 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
            <a 
              href="tel:+919369187566"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </a>
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
              <Link to="/" className="hover:text-orange-600 transition-colors py-2" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-orange-600 transition-colors py-2" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" className="hover:text-orange-600 transition-colors py-2" onClick={() => setIsOpen(false)}>Contact</Link>
              <a 
                href="tel:+919369187566"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}