import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import React from "react";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-800 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105 flex-shrink-0">
              {/* Nagara temple spire — modern minimal icon */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                {/* Central shikhara (main spire) */}
                <path d="M12 2L9.5 7H14.5L12 2Z" fill="white"/>
                {/* Left mini spire */}
                <path d="M7.5 5.5L6 8H9L7.5 5.5Z" fill="white" fillOpacity="0.75"/>
                {/* Right mini spire */}
                <path d="M16.5 5.5L15 8H18L16.5 5.5Z" fill="white" fillOpacity="0.75"/>
                {/* Horizontal molding connecting all spires */}
                <rect x="5.5" y="7.5" width="13" height="1.5" rx="0.75" fill="white"/>
                {/* Main hall / garbhagriha */}
                <rect x="7" y="9" width="10" height="4.5" rx="0.75" fill="white" fillOpacity="0.85"/>
                {/* Doorway arch */}
                <path d="M11 13.5V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V13.5" fill="white" fillOpacity="0.35"/>
                {/* Wide plinth / base */}
                <rect x="3.5" y="13.5" width="17" height="2" rx="0.75" fill="white"/>
                {/* Steps */}
                <rect x="5" y="15.5" width="14" height="1.5" rx="0.5" fill="white" fillOpacity="0.65"/>
                <rect x="6.5" y="17" width="11" height="1.5" rx="0.5" fill="white" fillOpacity="0.4"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent leading-tight">
                Ayodhya Tours
              </h1>
              <p className={`text-xs font-medium tracking-wide transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/65"}`}>
                Sacred Journeys Await
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative font-medium transition-colors duration-300 ${
                  scrolled
                    ? isActive(to)
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                    : isActive(to)
                    ? "text-orange-400"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {label}
                {isActive(to) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                  />
                )}
              </Link>
            ))}
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
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl mb-4 shadow-lg border border-gray-100">
                <div className="flex flex-col gap-1 p-3">
                  {navLinks.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className={`py-3 px-4 rounded-xl transition-colors font-medium ${
                        isActive(to)
                          ? "bg-orange-50 text-orange-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                  <a
                    href="tel:+919369187566"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all mt-1 font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
