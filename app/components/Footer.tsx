"use client";

import { useIntersection } from "@/app/lib/useIntersection";

export default function Footer() {
  const { elementRef, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <footer
      ref={elementRef}
      style={{
        backgroundColor: "var(--color-charcoal)",
        color: "var(--color-cream)",
        padding: "5rem 1.5rem 3rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "rgba(105, 11, 34, 0.2)",
        }}
      />

      <div
        style={{
          maxWidth: "90rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "350px" }}>
            <h4
              style={{
                fontFamily: "Spectral, serif",
                fontSize: "32px",
                fontWeight: "800",
                marginBottom: "1rem",
                color: "var(--color-tan)",
                letterSpacing: "-0.02em",
              }}
            >
              Chatatouille
            </h4>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                color: "var(--color-tan)",
                lineHeight: "1.7",
                margin: 0,
                letterSpacing: "-0.01em",
                opacity: 0.85,
              }}
            >
              An innovative cooking companion designed through human-centered design principles at Stanford University. Empowering novice cooks with confidence.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "1.25rem",
                color: "var(--color-terracotta)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              Explore
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {[
                { label: "About", id: "about" },
                { label: "Concept Video", id: "concept" },
                { label: "Our Team", id: "team" },
                { label: "Design Process", id: "process" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "0.875rem" }}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(item.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      color: "var(--color-tan)",
                      textDecoration: "none",
                      fontSize: "16px",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "inline-block",
                      opacity: 0.85,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-terracotta)";
                      e.currentTarget.style.transform = "translateX(4px)";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-tan)";
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.opacity = "0.85";
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Info Column */}
          <div>
            <h4
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "1.25rem",
                color: "var(--color-terracotta)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              Academic Context
            </h4>
            <div
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                color: "var(--color-tan)",
                lineHeight: "1.8",
                letterSpacing: "-0.01em",
              }}
            >
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: "600", color: "var(--color-tan)" }}>
                Stanford University
              </p>
              <p style={{ margin: "0 0 0.5rem 0", opacity: 0.85 }}>
                CS 147: Human-Computer Interaction
              </p>
              <p style={{ margin: 0, opacity: 0.85 }}>
                Fall 2025
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(232, 213, 196, 0.15)",
            marginBottom: "2.5rem",
          }}
        />

        {/* Bottom Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
          id="footer-bottom"
        >
          {/* Team initials */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "Spectral, serif",
                fontSize: "13px",
                fontWeight: "600",
                color: "var(--color-tan)",
                letterSpacing: "0.5px",
                opacity: 0.6,
              }}
            >
              Crafted with care by RD • ER • ELR • LDV
            </span>
          </div>

          {/* Copyright */}
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "14px",
              color: "var(--color-tan)",
              margin: 0,
              textAlign: "center",
              opacity: 0.5,
            }}
          >
            © 2025 Chatatouille. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          #footer-bottom {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </footer>
  );
}
