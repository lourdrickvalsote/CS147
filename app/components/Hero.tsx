"use client";

import { getImagePath } from "@/app/lib/getBasePath";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#FBF8F3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7rem 1.5rem 4rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Organic blob backgrounds */}
      <div
        className="blob-background"
        style={{
          top: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "var(--color-terracotta)",
        }}
      />
      <div
        className="blob-background"
        style={{
          bottom: "15%",
          right: "-5%",
          width: "350px",
          height: "350px",
          background: "var(--color-accent-gold)",
        }}
      />

      <div
        style={{
          maxWidth: "90rem",
          width: "100%",
          display: "grid",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        id="hero-container"
      >
        {/* Left Content Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          {/* Decorative label with enhanced styling */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2.5rem",
              padding: "0.75rem 1.5rem",
              background: "var(--color-warm-beige)",
              borderRadius: "50px",
              border: "1.5px solid rgba(216, 101, 72, 0.2)",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded
                ? "translateY(0) scale(1)"
                : "translateY(-10px) scale(0.95)",
              transition:
                "opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
          >
            <span
              style={{
                fontSize: "24px",
              }}
            >
              🎓
            </span>
            <span
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--color-burgundy)",
              }}
            >
              CS 147 Project
            </span>
          </div>

          {/* Massive Hero Title with Fraunces */}
          <h1
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "clamp(64px, 13vw, 160px)",
              fontWeight: "900",
              color: "var(--color-burgundy-primary)",
              marginBottom: "1.5rem",
              lineHeight: "0.9",
              letterSpacing: "-0.04em",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded
                ? "translateY(0) scale(1)"
                : "translateY(50px) scale(0.95)",
              transition:
                "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              position: "relative",
            }}
          >
            Chatatouille
          </h1>

          {/* Elegant tagline */}
          <p
            style={{
              fontFamily: "DM Serif Text, serif",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              color: "var(--color-terracotta-dark)",
              fontWeight: "600",
              fontStyle: "italic",
              marginBottom: "3rem",
              maxWidth: "750px",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(40px)",
              transition:
                "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          >
            Cook your cravings with confidence
          </p>

          {/* Description */}
          <div
            style={{
              marginBottom: "3.5rem",
              maxWidth: "620px",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition:
                "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
            }}
          >
            <p
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "var(--color-charcoal)",
                lineHeight: "1.75",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              An intuitive mobile cooking companion designed by Stanford
              students to help novice cooks master recipes with confidence every
              step of the way. Created as part of CS 147: Introduction to
              Human-Computer Interaction.
            </p>
          </div>

          {/* Stanford Logo with premium container */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.25rem",
              padding: "1.75rem 2.5rem",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              border: "2px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "var(--shadow-heavy)",
              marginBottom: "4rem",
              maxWidth: "fit-content",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded
                ? "scale(1) translateY(0)"
                : "scale(0.95) translateY(20px)",
              transition:
                "opacity 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.8s, transform 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.8s, box-shadow 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 16px 56px rgba(74, 14, 30, 0.16), 0 0 1px rgba(74, 14, 30, 0.15)";
              e.currentTarget.style.transform = isLoaded
                ? "scale(1.02) translateY(-2px)"
                : "scale(0.95) translateY(20px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 12px 48px rgba(74, 14, 30, 0.12), 0 0 1px rgba(74, 14, 30, 0.1)";
              e.currentTarget.style.transform = isLoaded
                ? "scale(1) translateY(0)"
                : "scale(0.95) translateY(20px)";
            }}
          >
            <img
              src={getImagePath("/images/stanfordlogo.png")}
              alt="Stanford University"
              style={{
                height: "64px",
                width: "auto",
                objectFit: "contain",
              }}
            />
            <div>
              <p
                style={{
                  fontFamily: "Source Sans 3, sans-serif",
                  fontSize: "15px",
                  fontWeight: "800",
                  color: "var(--color-burgundy)",
                  margin: 0,
                  letterSpacing: "1px",
                }}
              >
                STANFORD UNIVERSITY
              </p>
              <p
                style={{
                  fontFamily: "Source Sans 3, sans-serif",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "var(--color-gray)",
                  margin: 0,
                  marginTop: "2px",
                }}
              >
                Human-Computer Interaction
              </p>
            </div>
          </div>

          {/* Scroll Indicator with refined animation */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1rem",
              opacity: isLoaded ? 1 : 0,
              animation: isLoaded
                ? "gentleBounce 2.5s ease-in-out infinite"
                : "none",
              transition: "opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1.1s",
            }}
          >
            <p
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                fontSize: "13px",
                color: "var(--color-gray)",
                fontWeight: "600",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Scroll to explore
            </p>
            <svg
              style={{
                width: "32px",
                height: "32px",
                color: "var(--color-terracotta)",
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        {/* Right Image Column - Floating and styled */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded
              ? "translateX(0) scale(1)"
              : "translateX(60px) scale(0.95)",
            transition:
              "opacity 1.2s ease-out 0.4s, transform 1.2s ease-out 0.4s",
          }}
          id="hero-image-container"
        >
          <div
            style={{
              position: "relative",
              animation: "float 6s ease-in-out infinite",
              filter: "drop-shadow(0 20px 60px rgba(0, 0, 0, 0.15))",
            }}
          >
            <img
              src={getImagePath("/images/chatatouillescreens4.png")}
              alt="Chatatouille App Screens"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gentleBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        #hero-container {
          grid-template-columns: 1fr;
        }

        #hero-image-container {
          display: none;
        }

        @media (min-width: 768px) {
          #hero {
            padding: 9rem 3rem 5rem 3rem;
          }

          #hero-container {
            grid-template-columns: 1fr 0.9fr;
            gap: 3rem;
          }

          #hero-image-container {
            display: flex;
          }
        }

        @media (min-width: 1024px) {
          #hero-container {
            grid-template-columns: 1.2fr 1fr;
            gap: 4rem;
          }
        }

        @media (min-width: 1280px) {
          #hero {
            padding: 10rem 4rem 6rem 4rem;
          }
        }
      `}</style>
    </section>
  );
}
