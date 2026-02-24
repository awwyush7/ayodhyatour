import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TourPackages } from "./components/TourPackages";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import React from "react";

export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <main>
        <HeroSection />
        <TourPackages />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
