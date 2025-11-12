"use client";

import { useIntersection } from "@/app/lib/useIntersection";

export default function Footer() {
  const { elementRef, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <footer
      ref={elementRef}
      style={{
        backgroundColor: "#121211",
        color: "#F8F3ED",
        padding: "4rem 1rem",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
      className="md:py-16"
    >
      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <h4
              style={{
                fontSize: "20px",
                fontFamily: "DM Serif Text, serif",
                fontWeight: "bold",
                marginBottom: "0.75rem",
                color: "#F1E3D3",
              }}
            >
              Chatatouille
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#CCCCCC",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              A Stanford CS 147 project exploring user-centered design for
              cooking.
            </p>
          </div>

          {/* Column 2: Project */}
          <div>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#F1E3D3",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Project
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li style={{ marginBottom: "0.75rem" }}>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("hero");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    color: "#CCCCCC",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F1E3D3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#CCCCCC")
                  }
                >
                  Home
                </a>
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    color: "#CCCCCC",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F1E3D3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#CCCCCC")
                  }
                >
                  About
                </a>
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <a
                  href="#concept"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("concept");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    color: "#CCCCCC",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F1E3D3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#CCCCCC")
                  }
                >
                  Video
                </a>
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <a
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("process");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    color: "#CCCCCC",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F1E3D3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#CCCCCC")
                  }
                >
                  Process
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Course Info */}
          <div>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#F1E3D3",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Course
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#CCCCCC",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Stanford University
              <br />
              CS 147: Human-Computer Interaction
              <br />
              Fall 2025
            </p>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(248, 243, 237, 0.2)",
            marginTop: "3rem",
            paddingTop: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "#999999",
              margin: 0,
            }}
          >
            &copy; 2025 Chatatouille. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
