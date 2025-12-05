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
        padding: "8rem 1.5rem",
        background: "#FBF8F3",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition:
          "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
      }}
    >
      {/* Decorative background element */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "var(--color-terracotta)",
          opacity: 0.06,
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          maxWidth: "90rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontFamily: "Spectral, serif",
            fontWeight: "800",
            color: "var(--color-burgundy)",
            textAlign: "center",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
            lineHeight: "1.1",
          }}
        >
          About Chatatouille
        </h2>

        {/* Decorative underline */}
        <div
          style={{
            width: "120px",
            height: "5px",
            background: "var(--color-burgundy-primary)",
            margin: "0 auto 4rem auto",
            borderRadius: "10px",
          }}
        />

        {/* Two-column layout */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            maxWidth: "1600px",
            margin: "0 auto",
            flexDirection: "column",
          }}
          id="about-content-flex"
        >
          {/* Left Text Column */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "21px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: "500",
                color: "var(--color-charcoal)",
                lineHeight: "1.75",
                marginBottom: "2rem",
                letterSpacing: "-0.01em",
              }}
            >
              Chatatouille aims to help novice cooks who want to try new recipes
              and feel calm, confident, and in control as they master every step
              in the kitchen.
            </p>
            <p
              style={{
                fontSize: "19px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: "400",
                color: "var(--color-gray)",
                lineHeight: "1.8",
                letterSpacing: "-0.01em",
              }}
            >
              Chatatouille is your personal sous-chef that turns any
              recipe—video or written—into a clear, step-by-step guide users can
              follow at their own pace. Chatatouille combines video playback,
              fully customizable written instructions, and a responsive AI voice
              assistant to make our users feel in control.
            </p>
          </div>

          {/* Right Carousel Column */}
          <div style={{ flex: 1.5, minWidth: 0, width: "100%" }}>
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
                  background: "var(--color-burgundy-primary)",
                  color: "var(--color-cream)",
                  border: "none",
                  borderRadius: "50%",
                  width: "56px",
                  height: "56px",
                  fontSize: "24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  flexShrink: 0,
                  boxShadow: "0 4px 16px rgba(74, 14, 30, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "scale(1.1) translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(74, 14, 30, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(74, 14, 30, 0.2)";
                }}
                aria-label="Previous image"
              >
                ❮
              </button>

              {/* Image Container */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.1)",
                    background: "white",
                    padding: "1.5rem",
                  }}
                >
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
                      transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      minHeight: "400px",
                    }}
                  />
                </div>

                {/* Dot Indicators */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    justifyContent: "center",
                    marginTop: "1.5rem",
                  }}
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      style={{
                        width: index === currentImageIndex ? "32px" : "12px",
                        height: "12px",
                        borderRadius: "20px",
                        border: "none",
                        background:
                          index === currentImageIndex
                            ? "var(--color-burgundy-primary)"
                            : "var(--color-tan)",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        boxShadow:
                          index === currentImageIndex
                            ? "0 2px 8px rgba(216, 101, 72, 0.3)"
                            : "none",
                      }}
                      onMouseEnter={(e) => {
                        if (index !== currentImageIndex) {
                          e.currentTarget.style.background =
                            "var(--color-gray-light)";
                          e.currentTarget.style.transform = "scale(1.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (index !== currentImageIndex) {
                          e.currentTarget.style.background = "var(--color-tan)";
                          e.currentTarget.style.transform = "scale(1)";
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
                  background: "var(--color-burgundy-primary)",
                  color: "var(--color-cream)",
                  border: "none",
                  borderRadius: "50%",
                  width: "56px",
                  height: "56px",
                  fontSize: "24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  flexShrink: 0,
                  boxShadow: "0 4px 16px rgba(74, 14, 30, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "scale(1.1) translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(74, 14, 30, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(74, 14, 30, 0.2)";
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
