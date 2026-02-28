import { ArrowRight } from "lucide-react";
import React from "react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1652059468424-249066e3a98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheW9kaHlhJTIwcmFtJTIwbWFuZGlyJTIwdGVtcGxlfGVufDF8fHx8MTc3MTkxNjc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ayodhya Ram Mandir"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-6 animate-fade-in">
          Discover the Divine Beauty of Ayodhya
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Experience the spiritual journey of a lifetime with our curated tours to the sacred city of Lord Ram
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#packages"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            Explore Packages
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="tel:+919369187566"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg border-2 border-white/30 transition-all flex items-center justify-center"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}