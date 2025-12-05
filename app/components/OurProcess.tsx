"use client";

import ProcessCard from "./ProcessCard";
import { useIntersection } from "@/app/lib/useIntersection";

const processSteps = [
  {
    title: "A1: Needfinding",
    description:
      "Our needfinding journey in the adulting space. We conducted interviews with a diverse group of participants to uncover real emotions and pain points.",
    image: "/images/needfinding1.png",
    tags: [
      {
        label: "Slides (pdf)",
        href: "https://drive.google.com/file/d/1Kx-cuv45G7JBEcz31HAWiHeljSDQvioa/view?usp=sharing",
      },
      {
        label: "Slides (pptx)",
        href: "https://docs.google.com/presentation/d/17Dl3hMpXYBaAP-Oq_OLSf2Fsvac9NgZt/edit?usp=sharing&ouid=113402074502964276518&rtpof=true&sd=true",
      },
    ],
  },
  {
    title:
      "A2: Additional Needfinding, POVs, HMWs, Brainstorming & Experience Prototypes",
    description:
      "We generated POVs and 'How Might We?' questions from our interviews to look deeper into common problems. Then, we brainstormed solutions and picked three to experience prototype, testing the critical assumptions we made in each.",
    image: "/images/needfinding2.png",
    tags: [
      {
        label: "Slides (pdf)",
        href: "https://drive.google.com/file/d/1bIyutojuuxQma1VhDt4jFA2cEvi0gs9O/view?usp=sharing",
      },
      {
        label: "Slides (pptx)",
        href: "https://docs.google.com/presentation/d/1M55VtpGsPwEySfba0GqMJVFG5vq5trEz/edit?usp=sharing&ouid=113402074502964276518&rtpof=true&sd=true",
      },
    ],
  },
  {
    title: "A3: Website",
    description: "You're looking at it!",
    image: "/images/website2.png",
    tags: [{ label: "Website", href: "#hero" }],
  },
  {
    title: "A4: Concept Video",
    description:
      "We landed on a solution that best addressed our users' problems: Chatatouille! We conducted market research and discussed ethical implications to confirm the novelty and inclusivity of our solution. Watch our concept video to understand Chatatouille's value (with no UI in sight)!",
    image: "/images/elliott.png",
    tags: [
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=gEbLrs14IjA",
      },
      {
        label: "Video (mp4)",
        href: "https://drive.google.com/file/d/1XxTXsa3faUgLn-ic_eFm3hS-6TAAckh9/view?usp=sharing",
      },
      {
        label: "Slides (pdf)",
        href: "https://drive.google.com/file/d/10YL-yKVGlClhGQ-P4x1u6wia66eXtnJy/view?usp=sharing",
      },
      {
        label: "Slides (pptx)",
        href: "https://docs.google.com/presentation/d/1NgJhpgyp_WyrbCaP20Sm0zWDUH2mI4dX/edit?usp=sharing&ouid=113402074502964276518&rtpof=true&sd=true",
      },
    ],
  },
  {
    title: "A5: Sketching, Low-fi Prototyping & Pilot Usability Testing",
    description:
      "Our low-fi prototype of Chatatouille. We created task flows and sketched them onto paper to test basic design choices on potential users, grounding our evolving design in real user experiences.",
    image: "/images/lowfi.png",
    tags: [
      {
        label: "Slides (pdf)",
        href: "https://drive.google.com/file/d/11PtIrFi1bAtM8FFRFrwM1L6flPxiTV6J/view?usp=sharing",
      },
      {
        label: "Slides (pptx)",
        href: "https://docs.google.com/presentation/d/11k5PcJJE1-vq_3PMgAZo-NI7RpXi1DJN/edit?usp=sharing&ouid=113402074502964276518&rtpof=true&sd=true",
      },
      {
        label: "Sketch Report (pdf)",
        href: "https://docs.google.com/document/d/1sYXHoygkW3-q4XB-aZBr8WDWcQ71JNX4T5GjyzPnQ5I/edit?usp=sharing",
      },
    ],
  },
  {
    title: "A6: Interactive Medium-Fi Prototype",
    description:
      "Our Medium-Fi Prototype of Chatatouille. We used Figma to implement a prototype of Chatatouille with our intended design elements and transitions. The Medium-Fi prototype does not have a backend, but it demonstrates our task flows in a higher fidelity than before.",
    image: "/images/mediumfi.png",
    tags: [
      {
        label: "Prototype (Figma)",
        href: "https://www.figma.com/proto/9DG9mbpaLZATdm5rEOfaPA/Medium-Fi-Prototype?node-id=131-303&t=hzQKMhcCpZd8thYD-1&starting-point-node-id=131%3A303",
      },
      {
        label: "Slides (pdf)",
        href: "https://drive.google.com/file/d/1GVSctcl1Ve59n3H40OElSvJZ5wJ-zTFP/view?usp=sharing",
      },
      {
        label: "Slides (pptx)",
        href: "https://docs.google.com/presentation/d/10zGJz--J89g77cNYmvdj05hX2JOB9LaY/edit?usp=sharing&ouid=113402074502964276518&rtpof=true&sd=true",
      },
      {
        label: "README (pdf)",
        href: "https://docs.google.com/document/d/1rPq9DPEhS5siktlLNJsG-Dnchnw2ZiqNT1U--Fy0bw8/edit?usp=sharing",
      },
    ],
  },
  {
    title: "A8: Hi-fi Prototype",
    description: "This section is still under construction.",
    image: "/images/hifi.png",
    tags: [
      {
        label: "Prototype",
        href: "#",
      },
      {
        label: "Slides (pdf)",
        href: "https://drive.google.com/file/d/1g8ezVLxgPWoyEVtQABfs_e8lEKcT1n8k/view?usp=sharing",
      },
      {
        label: "Slides (pptx)",
        href: "https://docs.google.com/presentation/d/1uVEQ2wyR04jQFNW1yYcxzL1A6ta17Tu0/edit?usp=sharing&ouid=113402074502964276518&rtpof=true&sd=true",
      },
      {
        label: "README (pdf)",
        href: "#",
      },
    ],
  },
  {
    title: "A9: Heuristic Evaluation",
    description:
      "Members of another team evaluated our Medium-Fi prototype using Nielsen's heuristics (plus two more). They compiled violations organized by severity for each task, and we synthesized their feedback to improve our design.",
    image: "/images/heuristic.png",
    tags: [
      {
        label: "Sheet (pdf)",
        href: "https://drive.google.com/file/d/1TATe61E4LSTZvTZmYwUf4_wSKt5XMtdd/view?usp=sharing",
      },
      {
        label: "Sheet (xlsx)",
        href: "https://docs.google.com/spreadsheets/d/1tlfSXQkwl9RMmr5BB_Dso7PMHCWQvgGdElvzpg4vgqI/edit?usp=sharing",
      },
    ],
  },
  {
    title: "A10: Poster, Pitch, Demo Video",
    description: "This section is still under construction.",
    image: "/images/pitch1.png",
    tags: [
      {
        label: "Demo",
        href: "#",
      },
      {
        label: "Demo (mp4)",
        href: "#",
      },
      {
        label: "Script (pdf)",
        href: "#",
      },
      {
        label: "Pitch (pdf)",
        href: "https://drive.google.com/file/d/1KfHfxKJWjoR-uMVH112iqvE_zvDDRwUO/view?usp=sharing",
      },
      {
        label: "Poster (pdf)",
        href: "https://drive.google.com/file/d/1bUXDblFURR_sRtIKm5VXllRrYyl7RzhQ/view?usp=sharing",
      },
    ],
  },
  {
    title: "A11: Final Report",
    description: "This section is still under construction.",
    image: "/images/underconstruction.jpeg",
    tags: [
      {
        label: "Final Report (pdf)",
        href: "#",
      },
    ],
  },
];

export default function OurProcess() {
  const { elementRef, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <section
      ref={elementRef}
      id="process"
      style={{
        padding: "8rem 1.5rem",
        background: "#FBF8F3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-8%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "var(--color-burgundy)",
          opacity: 0.03,
          filter: "blur(120px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "-8%",
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
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4.5rem",
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
            Our Design Process
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

        {/* Process Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
            gap: "2rem",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {processSteps.map((step, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${
                  0.15 + index * 0.08
                }s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${
                  0.15 + index * 0.08
                }s`,
              }}
            >
              <ProcessCard
                title={step.title}
                description={step.description}
                image={step.image}
                tags={step.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
