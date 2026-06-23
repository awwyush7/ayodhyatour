import { HeroSection } from "../components/HeroSection";
import { TourPackages } from "../components/TourPackages";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { SocialProof } from "../components/SocialProof";
import { SEOHead } from "../components/SEOHead";
import { Helmet } from "react-helmet-async";
import React from "react";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  name: "Ayodhya Tours",
  url: "https://www.ayodhyatour.in",
  telephone: "+919369187566",
  email: "dprakhar007@gmail.com",
  logo: "https://www.ayodhyatour.in/logo.png",
  sameAs: ["https://www.instagram.com/ayodhya.tourguide"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ayodhya",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "06:00",
    closes: "22:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
    bestRating: "5",
  },
};

const tourProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ram Mandir Darshan – 1 Day Tour",
  description:
    "Guided 1-day spiritual tour covering Ram Mandir, Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, Nageshwar Nath, Saryu Ghat Aarti, Ram Ki Paidi, and Lata Mangeshkar Chowk.",
  offers: {
    "@type": "Offer",
    price: "1100",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Ayodhya Tours" },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rahul Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The best spiritual journey of my life. The guides were extremely knowledgeable and took care of every small detail.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Patel" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Seamless experience from booking to darshan. The VIP access to Ram Mandir saved us hours. Truly a divine and hassle-free trip.",
    },
  ],
};

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Spiritual Pilgrimage Packages to Ram Mandir & Beyond"
        description="Book guided spiritual tours to Ayodhya – Ram Mandir darshan, Hanuman Garhi, Saryu Ghat aarti and more. Trusted by 5000+ pilgrims since 2020. Starting ₹1,100/person. Call +91 93691 87566."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(tourProductJsonLd)}</script>
      </Helmet>
      <HeroSection />
      <TourPackages />
      <AboutSection />
      <SocialProof />
      <ContactSection />
    </>
  );
}