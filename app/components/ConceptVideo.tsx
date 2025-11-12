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
        padding: "2rem 1rem",
        backgroundColor: "#F8F3ED",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
      className="md:py-24"
    >
      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "32px",
            fontFamily: "DM Serif Text, serif",
            fontWeight: "bold",
            color: "#121211",
            textAlign: "center",
            marginBottom: "2rem",
          }}
          className="md:text-5xl md:mb-12"
        >
          Concept Video
        </h2>

        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left Column - Context Text and Badges */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div>
              <p
                style={{
                  fontSize: "15px",
                  color: "#333333",
                  lineHeight: "1.8",
                  marginBottom: "1rem",
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
                  fontSize: "15px",
                  color: "#333333",
                  lineHeight: "1.8",
                }}
              >
                This video was featured in the CS 147 Film Festival, a showcase
                of the most outstanding concept videos of the cohort.
                Chatatouille was fortunate to win awards in multiple categories.
              </p>
            </div>

            {/* Award Badges */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Best Acting Award */}
              <img
                src={getImagePath("/images/bestacting.png")}
                alt="Best Acting Award - CS 147 Film Festival"
                style={{
                  width: "130px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />

              {/* Best Overall Award */}
              <img
                src={getImagePath("/images/bestoverall.png")}
                alt="Best Overall Award - CS 147 Film Festival"
                style={{
                  width: "160px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />

              {/* Best Humor Award */}
              <img
                src={getImagePath("/images/besthumor.png")}
                alt="Best Humor Award - CS 147 Film Festival"
                style={{
                  width: "130px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* Right Column - Video */}
          <div
            style={{
              backgroundColor: "#121211",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
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
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
