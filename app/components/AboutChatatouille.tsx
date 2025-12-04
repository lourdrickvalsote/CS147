"use client";

import { getImagePath } from "@/app/lib/getBasePath";
import { useIntersection } from "@/app/lib/useIntersection";
import { useState } from "react";

export default function AboutChatatouille() {
  const { elementRef, isVisible } = useIntersection({ threshold: 0.1 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/cooking1.png",
    "/images/cooking2.png",
    "/images/cooking3.png",
    "/images/cooking4.png",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section
      ref={elementRef}
      id="about"
      style={{
        padding: "2rem 1rem",
        backgroundColor: "#F8F3ED",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "3rem",
            fontFamily: "DM Serif Text, serif",
            fontWeight: "bold",
            color: "#121211",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          About Chatatouille
        </h2>

        {/* Two-column layout */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            flexDirection: "column",
          }}
          id="about-content-flex"
        >
          {/* Left Text Column */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "18px",
                color: "#555555",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Chatatouille aims to help novice cooks who want to try new recipes
              and feel calm, confident, and in control as they master every step
              in the kitchen.
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#555555",
                lineHeight: "1.8",
              }}
            >
              Chatatouille is your personal sous-chef that turns any recipe—video
              or written—into a clear, step-by-step guide users can follow at
              their own pace. Chatatouille combines video playback, fully
              customizable written instructions, and a responsive AI voice
              assistant to make our users feel in control.
            </p>
          </div>

          {/* Right Carousel Column */}
          <div style={{ flex: 1, minWidth: 0, width: "100%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              {/* Previous Button */}
              <button
                onClick={prevImage}
                style={{
                  backgroundColor: "#690B22",
                  color: "#F8F3ED",
                  border: "none",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  fontSize: "24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 200ms ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8B0E2C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#690B22";
                }}
                aria-label="Previous image"
              >
                ❮
              </button>

              {/* Image Container */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ position: "relative", width: "100%" }}>
                  <img
                    src={getImagePath(images[currentImageIndex])}
                    alt={`Chatatouille cooking illustration ${
                      currentImageIndex + 1
                    }`}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      display: "block",
                      transition: "opacity 0.3s ease",
                      minHeight: "400px",
                    }}
                  />
                </div>

                {/* Dot Indicators */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        border: "none",
                        backgroundColor:
                          index === currentImageIndex ? "#690B22" : "#D0D0D0",
                        cursor: "pointer",
                        transition: "background-color 200ms ease",
                      }}
                      onMouseEnter={(e) => {
                        if (index !== currentImageIndex) {
                          e.currentTarget.style.backgroundColor = "#A0A0A0";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (index !== currentImageIndex) {
                          e.currentTarget.style.backgroundColor = "#D0D0D0";
                        }
                      }}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                style={{
                  backgroundColor: "#690B22",
                  color: "#F8F3ED",
                  border: "none",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  fontSize: "24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 200ms ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8B0E2C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#690B22";
                }}
                aria-label="Next image"
              >
                ❯
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            #about-content-flex {
              flex-direction: row !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
