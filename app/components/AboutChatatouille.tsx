"use client";

import { getImagePath } from '@/app/lib/getBasePath'
import { useIntersection } from '@/app/lib/useIntersection'

export default function AboutChatatouille() {
  const { elementRef, isVisible } = useIntersection({ threshold: 0.1 })

  return (
    <section
      ref={elementRef}
      id="about"
      style={{
        padding: "3rem 1rem",
        backgroundColor: "#F8F3ED",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
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

        {/* Text Content */}
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "#555555",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
            }}
          >
            Chatatouille aims to help novice cooks who want to try new recipes
            and feel calm, confident, and in control as they master every step
            in the kitchen.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555555",
              lineHeight: "1.8",
            }}
          >
            Chatatouille is your personal sous-chef that turns any recipe—video
            or written—into a clear, step-by-step guide users can follow at
            their own pace. Chatatouille combines video playback, fully
            customizable written instructions, and a responsive AI voice
            assistant to make our users feel in control.
          </p>
        </div>
      </div>
    </section>
  );
}
