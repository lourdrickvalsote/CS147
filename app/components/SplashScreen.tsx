"use client";

import { useEffect, useState, useRef } from "react";
import { getImagePath } from "@/app/lib/getBasePath";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Trigger fade-in animations
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    // Preload audio
    audioRef.current = new Audio(getImagePath("/audio/mouse.mp3"));

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Play sound
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    }

    // Enter website after a brief moment
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#690B22",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 9999,
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* Text Content */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "clamp(2rem, 10vh, 6rem)",
          opacity: showContent ? 1 : 0,
          transform: showContent ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
            fontFamily: "DM Serif Text, serif",
            fontWeight: "bold",
            color: "#FFFFFF",
            margin: "0 0 1rem 0",
            lineHeight: "1.2",
            padding: "0 1rem",
          }}
          className="splash-heading"
        >
          Chatatouille is cooking up something real nice for you
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontFamily: "DM Serif Text, serif",
            color: "#F8F3ED",
            margin: "0",
            fontWeight: "400",
            padding: "0 1rem",
          }}
        >
          Click on Chatatouille to start cooking
        </p>
      </div>

      {/* Bruce Image (Clickable Rat) */}
      <div
        onClick={handleClick}
        style={{
          cursor: "pointer",
          opacity: showContent ? 1 : 0,
          transform: showContent ? "translateY(0)" : "translateY(100px)",
          transition:
            "opacity 1.2s ease-out 0.3s, transform 1.2s ease-out 0.3s, transform 0.3s ease",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          height: "75vh",
          width: "100%",
          zIndex: 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = showContent
            ? "translateY(0) scale(1.05)"
            : "translateY(100px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = showContent
            ? "translateY(0) scale(1)"
            : "translateY(100px)";
        }}
      >
        <img
          src={getImagePath("/images/bruce.png")}
          alt="Chatatouille - Click to enter"
          style={{
            height: "100%",
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            objectPosition: "bottom",
            userSelect: "none",
          }}
          className="bruce-image"
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bruce-image {
            height: 70vh !important;
          }
        }
      `}</style>
    </div>
  );
}
