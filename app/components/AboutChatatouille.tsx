"use client";

export default function AboutChatatouille() {
  return (
    <section
      id="about"
      style={{ padding: "3rem 1rem", backgroundColor: "#F8F3ED" }}
    >
      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontFamily: "DM Serif Text, serif",
            fontWeight: "bold",
            color: "#121211",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          About Chatatouille
        </h2>

        {/* Two Column Layout: Left Text, Right Video */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Left: Text Content */}
          <div>
            <h3
              style={{
                fontSize: "24px",
                fontFamily: "DM Serif Text, serif",
                fontWeight: "bold",
                color: "#121211",
                marginBottom: "1.5rem",
              }}
            >
              Chatatouille
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "#555555",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Fill in later.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#555555",
                lineHeight: "1.8",
              }}
            >
              Fill in later.
            </p>
          </div>

          {/* Right: Video Container */}
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
              poster="/images/elliott.png"
            >
              <source src="/images/conceptvideo_final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
