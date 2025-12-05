"use client";

import { getImagePath } from "@/app/lib/getBasePath";
import { useIntersection } from "@/app/lib/useIntersection";

export default function ConceptVideo() {
  const { elementRef, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <section
      ref={elementRef}
      id="concept"
      style={{
        padding: "8rem 1.5rem",
        background: "#FBF8F3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative organic blob */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "var(--color-terracotta)",
          opacity: 0.04,
          filter: "blur(100px)",
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
        {/* Refined Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: "800",
              color: "var(--color-burgundy)",
              marginBottom: "1rem",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
            }}
          >
            Concept Video
          </h2>
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "var(--color-burgundy-primary)",
              margin: "0 auto 1.5rem auto",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Two-Column Layout with Cinematic Video */}
        <div
          style={{
            display: "grid",
            gap: "3rem",
            alignItems: "start",
            gridTemplateColumns: "1fr",
          }}
          id="concept-grid"
        >
          {/* Left Column - Cinematic Video Player */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateX(0) scale(1)"
                : "translateX(-40px) scale(0.98)",
              transition:
                "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow:
                  "0 24px 72px rgba(105, 11, 34, 0.18), 0 8px 24px rgba(105, 11, 34, 0.12)",
                background: "var(--color-charcoal)",
              }}
            >
              <video
                width="100%"
                height="auto"
                controls
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                poster={getImagePath("/images/elliott.png")}
                title="Chatatouille Concept Video - CS 147 Film Festival"
                aria-label="Chatatouille concept video showcasing the app's features for helping novice cooks master recipes"
              >
                <source
                  src={getImagePath("/images/conceptvideo_final.mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right Column - Story & Awards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transition:
                "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          >
            {/* Story Container */}
            <div>
              <p
                style={{
                  fontFamily: "Source Sans 3, sans-serif",
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "var(--color-charcoal)",
                  lineHeight: "1.8",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                This concept video shares the story of a young college student
                eager to impress his date, but his bad cooking is the only thing
                holding him back. He meets a mysterious rat that might just be
                able to solve his problems and give him the confidence to master
                any recipe.
              </p>
              <p
                style={{
                  fontFamily: "Source Sans 3, sans-serif",
                  fontSize: "17px",
                  fontWeight: "400",
                  color: "var(--color-gray)",
                  lineHeight: "1.8",
                  letterSpacing: "-0.01em",
                }}
              >
                This video was featured in the CS 147 Film Festival, a showcase
                of the most outstanding concept videos of the cohort.
              </p>
            </div>

            {/* Awards Showcase */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--color-accent-gold)"
                  stroke="var(--color-burgundy)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <h3
                  style={{
                    fontFamily: "DM Serif Display, serif",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--color-burgundy)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Award-Winning
                </h3> */}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: "1.5rem",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src={getImagePath("/images/bestacting.png")}
                    alt="Best Acting Award"
                    style={{
                      width: "110px",
                      height: "auto",
                      objectFit: "contain",
                      transition:
                        "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "scale(1.1) rotate(5deg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    }}
                  />
                  {/* <span
                    style={{
                      fontFamily: "Source Sans 3, sans-serif",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "var(--color-gray)",
                      textAlign: "center",
                    }}
                  >
                    Best Acting
                  </span> */}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src={getImagePath("/images/bestoverall.png")}
                    alt="Best Overall Award"
                    style={{
                      width: "110px",
                      height: "auto",
                      objectFit: "contain",
                      transition:
                        "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "scale(1.1) rotate(-5deg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    }}
                  />
                  {/* <span
                    style={{
                      fontFamily: "Source Sans 3, sans-serif",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "var(--color-gray)",
                      textAlign: "center",
                    }}
                  >
                    Best Overall
                  </span> */}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src={getImagePath("/images/besthumor.png")}
                    alt="Best Humor Award"
                    style={{
                      width: "110px",
                      height: "auto",
                      objectFit: "contain",
                      transition:
                        "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "scale(1.1) rotate(5deg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    }}
                  />
                  {/* <span
                    style={{
                      fontFamily: "Source Sans 3, sans-serif",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "var(--color-gray)",
                      textAlign: "center",
                    }}
                  >
                    Best Humor
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          #concept-grid {
            grid-template-columns: 1.2fr 1fr !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
