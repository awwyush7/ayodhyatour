import { HeroSection } from "../components/HeroSection";
import { TourPackages } from "../components/TourPackages";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { SocialProof } from "../components/SocialProof";

export function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <SocialProof /> */}
      <TourPackages />
      <AboutSection />
      <ContactSection />
    </>
  );
}