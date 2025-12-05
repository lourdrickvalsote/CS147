"use client";

import Link from "next/link";
import { getImagePath } from "@/app/lib/getBasePath";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ["hero", "about", "concept", "team", "process"];
      const scrollPosition = window.scrollY + 100; // Add offset for nav height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "concept", label: "Video" },
    { id: "team", label: "Team" },
    { id: "process", label: "Process" },
  ];

  return (
    <header
      style={{
        backgroundColor: "var(--color-burgundy)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: scrolled
          ? "var(--shadow-heavy)"
          : "var(--shadow-medium)",
      }}
      className="fixed w-full top-0 z-50"
    >
      <div
        style={{
          maxWidth: "90rem",
          margin: "0 auto",
          padding: scrolled ? "0.75rem 1.5rem" : "1rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "padding 0.3s ease",
        }}
        id="nav-container"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            textDecoration: "none",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <img
            src={getImagePath("/images/chatatouille-logo.png")}
            alt="Chatatouille"
            style={{
              height: scrolled ? "40px" : "50px",
              width: "auto",
              objectFit: "contain",
              transition: "height 0.3s ease",
            }}
          />
          <span
            style={{
              color: "var(--color-cream)",
              fontSize: scrolled ? "24px" : "28px",
              fontWeight: "700",
              fontFamily: "DM Serif Display, serif",
              display: "none",
              transition: "font-size 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              letterSpacing: "-0.02em",
            }}
            className="logo-text"
          >
            Chatatouille
          </span>
        </Link>

        {/* Navigation Links */}
        <nav
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  background: isActive
                    ? "rgba(216, 101, 72, 0.25)"
                    : "transparent",
                  color: "var(--color-cream)",
                  padding: "0.625rem 1.5rem",
                  borderRadius: "16px",
                  fontWeight: 600,
                  fontSize: "15px",
                  border: isActive
                    ? "1.5px solid rgba(216, 101, 72, 0.5)"
                    : "1.5px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  fontFamily: "Source Sans 3, sans-serif",
                  position: "relative",
                  overflow: "hidden",
                  letterSpacing: "-0.01em",
                  boxShadow: isActive ? "0 4px 16px rgba(216, 101, 72, 0.25)" : "none",
                }}
                className="nav-link"
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background =
                      "rgba(216, 101, 72, 0.15)";
                    e.currentTarget.style.borderColor =
                      "rgba(216, 101, 72, 0.3)";
                  }
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .logo-text {
            display: block !important;
          }

          #nav-container {
            padding: ${scrolled ? "1rem 2rem" : "1.25rem 2rem"} !important;
          }

          .nav-link {
            font-size: 16px !important;
            padding: 0.625rem 1.5rem !important;
          }
        }

        @media (min-width: 1024px) {
          #nav-container {
            padding: ${scrolled ? "1rem 3rem" : "1.5rem 3rem"} !important;
          }

          nav {
            gap: 0.75rem !important;
          }
        }

        @media (max-width: 767px) {
          .nav-link {
            font-size: 14px !important;
            padding: 0.5rem 0.75rem !important;
          }
        }
      `}</style>
    </header>
  );
}
