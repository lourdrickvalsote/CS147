import { getImagePath } from "@/app/lib/getBasePath";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F8F3ED",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1rem 3rem 1rem",
      }}
      className="md:px-16 md:pt-32 md:pb-20"
    >
      <div
        style={{
          maxWidth: "90rem",
          width: "100%",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="hero-container"
      >
        {/* Left Content Column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Large Hero Title */}
          <div style={{ marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "64px",
                fontFamily: "DM Serif Text, serif",
                fontWeight: "bold",
                color: "#121211",
                marginBottom: "0",
                lineHeight: "1",
                letterSpacing: "-2px",
              }}
              className="md:text-8xl lg:text-9xl"
            >
              Chatatouille
            </h1>
            <div style={{ marginTop: "0" }}>
              <p
                style={{
                  fontSize: "26px",
                  fontFamily: "Source Sans 3, sans-serif",
                  color: "#121211",
                  fontWeight: "300",
                  marginBottom: "0.5rem",
                }}
                className="md:text-4xl"
              >
                cook your cravings with confidence.
              </p>
            </div>
          </div>

          {/* Descriptive tagline */}
          <div
            style={{
              marginBottom: "2.5rem",
              maxWidth: "600px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                color: "#333333",
                fontStyle: "italic",
                lineHeight: "1.7",
                margin: 0,
              }}
              className="md:text-lg"
            >
              This app was designed by an independent team of Stanford students
              as part of the CS 147: Introduction to Human-Computer Interaction
              course.
            </p>
          </div>

          {/* Stanford Branding */}
          <div style={{ marginBottom: "3rem" }}>
            <img
              src={getImagePath("/images/stanfordlogo.png")}
              alt="Stanford University Logo"
              style={{
                height: "80px",
                width: "auto",
                objectFit: "contain",
              }}
              className="md:h-32"
            />
          </div>

          {/* Scroll Indicator */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.75rem",
              animation: "bounce 2s infinite",
            }}
          >
            <p
              style={{
                fontSize: "17px",
                color: "#333333",
                fontFamily: "Source Sans 3, sans-serif",
                fontWeight: "500",
              }}
            >
              click through to see more
            </p>
            <svg
              style={{ width: "32px", height: "32px", color: "#690B22" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        {/* Right Image Column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          className="hidden md:flex"
        >
          <img
            src={getImagePath("/images/chatatouillescreens.png")}
            alt="Chatatouille App Screens"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        #hero-container {
          flex-direction: column;
        }
        @media (max-width: 767px) {
          #hero-container {
            flex-direction: column;
          }
          .hidden {
            display: none;
          }
        }
        @media (min-width: 768px) {
          #hero {
            padding-left: 64px;
            padding-right: 64px;
            padding-top: 128px;
            padding-bottom: 80px;
          }
          #hero-container {
            flex-direction: row;
            gap: 2rem;
            align-items: center;
            justify-content: space-between;
          }
          .md\\:flex {
            display: flex !important;
          }
          .md\\:text-lg {
            font-size: 18px;
          }
          .md\\:text-8xl {
            font-size: 64px;
          }
          .md\\:text-4xl {
            font-size: 36px;
          }
          .md\\:h-32 {
            height: 128px;
          }
          .lg\\:text-9xl {
            font-size: 128px;
          }
        }
      `}</style>
    </section>
  );
}
