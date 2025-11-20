"use client";

import Link from "next/link";
import { getImagePath } from "@/app/lib/getBasePath";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{ backgroundColor: "#690B22" }}
      className="fixed w-full top-0 z-50 shadow-lg"
    >
      <div
        style={{
          maxWidth: "90rem",
          margin: "0 auto",
          padding: "0.75rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "auto",
          minHeight: "60px",
        }}
        id="nav-container"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            height: "100%",
          }}
        >
          <img
            src={getImagePath("/images/chatatouille-logo.png")}
            alt="Chatatouille"
            style={{
              height: "45px",
              width: "auto",
              objectFit: "contain",
            }}
            className="md:h-20 lg:h-24 xl:h-28"
          />
          <span
            style={{
              color: "#F8F3ED",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "DM Serif Text, serif",
              display: "none",
              alignItems: "center",
              height: "100%",
            }}
            className="md:flex md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Chatatouille
          </span>
        </Link>

        {/* Navigation Links */}
        <nav
          style={{
            display: "flex",
            gap: "0.25rem",
            alignItems: "center",
            height: "100%",
          }}
          className="md:gap-2"
        >
          <button
            onClick={() => scrollToSection("about")}
            style={{
              backgroundColor: "rgba(248, 243, 237, 0.2)",
              color: "#F8F3ED",
              padding: "0.35rem 0.75rem",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "13px",
              border: "none",
              cursor: "pointer",
              transition: "all 250ms ease",
              fontFamily: "Source Sans 3, sans-serif",
              display: "flex",
              alignItems: "center",
              minHeight: "32px",
            }}
            className="md:px-4 md:py-2 md:text-base lg:px-5 lg:py-3 lg:text-lg xl:px-6 xl:py-3 xl:text-xl"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F1E3D3";
              e.currentTarget.style.color = "#690B22";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(248, 243, 237, 0.2)";
              e.currentTarget.style.color = "#F8F3ED";
            }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("concept")}
            style={{
              backgroundColor: "rgba(248, 243, 237, 0.2)",
              color: "#F8F3ED",
              padding: "0.35rem 0.75rem",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "13px",
              border: "none",
              cursor: "pointer",
              transition: "all 250ms ease",
              fontFamily: "Source Sans 3, sans-serif",
              display: "flex",
              alignItems: "center",
              minHeight: "32px",
            }}
            className="md:px-4 md:py-2 md:text-base lg:px-5 lg:py-3 lg:text-lg xl:px-6 xl:py-3 xl:text-xl"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F1E3D3";
              e.currentTarget.style.color = "#690B22";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(248, 243, 237, 0.2)";
              e.currentTarget.style.color = "#F8F3ED";
            }}
          >
            Video
          </button>
          <button
            onClick={() => scrollToSection("team")}
            style={{
              backgroundColor: "rgba(248, 243, 237, 0.2)",
              color: "#F8F3ED",
              padding: "0.35rem 0.75rem",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "13px",
              border: "none",
              cursor: "pointer",
              transition: "all 250ms ease",
              fontFamily: "Source Sans 3, sans-serif",
              display: "flex",
              alignItems: "center",
              minHeight: "32px",
            }}
            className="md:px-4 md:py-2 md:text-base lg:px-5 lg:py-3 lg:text-lg xl:px-6 xl:py-3 xl:text-xl"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F1E3D3";
              e.currentTarget.style.color = "#690B22";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(248, 243, 237, 0.2)";
              e.currentTarget.style.color = "#F8F3ED";
            }}
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection("process")}
            style={{
              backgroundColor: "rgba(248, 243, 237, 0.2)",
              color: "#F8F3ED",
              padding: "0.35rem 0.75rem",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "13px",
              border: "none",
              cursor: "pointer",
              transition: "all 250ms ease",
              fontFamily: "Source Sans 3, sans-serif",
              display: "flex",
              alignItems: "center",
              minHeight: "32px",
            }}
            className="md:px-4 md:py-2 md:text-base lg:px-5 lg:py-3 lg:text-lg xl:px-6 xl:py-3 xl:text-xl"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F1E3D3";
              e.currentTarget.style.color = "#690B22";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(248, 243, 237, 0.2)";
              e.currentTarget.style.color = "#F8F3ED";
            }}
          >
            Process
          </button>
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) {
          #nav-container {
            padding: 1.25rem 2rem;
            min-height: 80px;
          }
          #nav-container img {
            height: 80px;
          }
          #nav-container span {
            font-size: 28px;
          }
          #nav-container button {
            padding: 0.5rem 1rem;
            font-size: 16px;
            min-height: 40px;
          }
          #nav-container nav {
            gap: 0.5rem;
          }
        }

        @media (min-width: 1024px) {
          #nav-container {
            padding: 1.5rem 3rem;
            min-height: 96px;
          }
          #nav-container img {
            height: 96px;
          }
          #nav-container span {
            font-size: 32px;
          }
          #nav-container button {
            padding: 0.75rem 1.25rem;
            font-size: 18px;
            min-height: 48px;
          }
          #nav-container nav {
            gap: 0.75rem;
          }
        }

        @media (min-width: 1280px) {
          #nav-container {
            padding: 1.5rem 3rem;
            min-height: 112px;
          }
          #nav-container img {
            height: 112px;
          }
          #nav-container span {
            font-size: 40px;
          }
          #nav-container button {
            padding: 1rem 1.5rem;
            font-size: 20px;
            min-height: 56px;
          }
          #nav-container nav {
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
}
