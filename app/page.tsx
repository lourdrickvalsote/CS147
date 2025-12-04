"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutChatatouille from "./components/AboutChatatouille";
import ConceptVideo from "./components/ConceptVideo";
import MeetOurTeam from "./components/MeetOurTeam";
import OurProcess from "./components/OurProcess";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Always show splash on mount (every page load)
    setShowSplash(true);
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <main>
      <Navigation />
      <Hero />
      <AboutChatatouille />
      <ConceptVideo />
      <MeetOurTeam />
      <OurProcess />
      <Footer />
    </main>
  );
}
