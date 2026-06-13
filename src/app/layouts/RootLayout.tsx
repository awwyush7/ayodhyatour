import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingCTA } from "../components/FloatingCTA";
import React from "react";

export function RootLayout() {
  return (
    <div className="size-full">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
