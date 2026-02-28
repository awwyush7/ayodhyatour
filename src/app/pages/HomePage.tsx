import { HeroSection } from "../components/HeroSection";
import { TourPackages } from "../components/TourPackages";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import React from "react";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TourPackages />
      <AboutSection />
      <ContactSection />
    </>
  );
}
