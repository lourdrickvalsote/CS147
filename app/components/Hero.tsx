export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F8F3ED",
        paddingTop: "8rem",
        paddingBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Top decorative text */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p
          style={{
            fontSize: "14px",
            color: "#121211",
            letterSpacing: "2px",
            fontWeight: "400",
          }}
        >
          HCI DESIGN • STANFORD CS 147 • INNOVATION
        </p>
      </div>

      {/* Large Hero Title */}
      <div
        style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "900px" }}
      >
        <h1
          style={{
            fontSize: "120px",
            fontFamily: "DM Serif Text, serif",
            fontWeight: "bold",
            color: "#121211",
            marginBottom: "2rem",
            lineHeight: "1",
            letterSpacing: "-2px",
          }}
        >
          Chatatouille
        </h1>
        <div style={{ marginTop: "1.5rem" }}>
          <p
            style={{
              fontSize: "28px",
              fontFamily: "Source Sans 3, sans-serif",
              color: "#121211",
              fontWeight: "300",
              marginBottom: "0.5rem",
            }}
          >
            cook your cravings with confidence.
          </p>
        </div>
      </div>

      {/* Award Badges with Laurel Wreath Style */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
          marginBottom: "4rem",
          flexWrap: "wrap",
        }}
      >
        {/* Best Concept */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "0.5rem" }}>🏆</div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#121211",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Award loading
          </p>
          <p
            style={{ fontSize: "11px", color: "#555555", marginTop: "0.25rem" }}
          >
            Stanford CS147
          </p>
        </div>

        {/* Best Overall Project */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "0.5rem" }}>🎯</div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#121211",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Award loading
          </p>
          <p
            style={{ fontSize: "11px", color: "#555555", marginTop: "0.25rem" }}
          >
            Stanford CS147
          </p>
        </div>

        {/* Most Novel */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "0.5rem" }}>✨</div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#121211",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Award loading
          </p>
          <p
            style={{ fontSize: "11px", color: "#555555", marginTop: "0.25rem" }}
          >
            Stanford CS147
          </p>
        </div>
      </div>

      {/* Stanford Branding */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ fontSize: "32px", marginBottom: "0.5rem" }}>🏫</div>
        <p
          style={{
            fontSize: "18px",
            color: "#690B22",
            fontWeight: "bold",
            fontFamily: "DM Serif Text, serif",
          }}
        >
          Stanford University
        </p>
      </div>

      {/* Descriptive tagline */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          maxWidth: "600px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#555555",
            fontStyle: "italic",
            lineHeight: "1.6",
          }}
        >
          Designed by an independent team of Stanford students as part of the CS
          147 Human-Computer Interaction course
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animation: "bounce 2s infinite",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#555555",
            fontFamily: "Source Sans 3, sans-serif",
          }}
        >
          click through to see more
        </p>
        <svg
          style={{ width: "24px", height: "24px", color: "#690B22" }}
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

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
