import ProcessCard from "./ProcessCard";

const processSteps = [
  {
    title: "A1: Needfinding",
    description: "Fill in later.",
    image: "/images/elliott.png",
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
    description: "Fill in later.",
    image: "/images/elliott.png",
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
    description: "Fill in later.",
    image: "/images/elliott.png",
    tags: [
      { label: "Prototype", href: "#" },
      { label: "Mockups", href: "#" },
    ],
  },
  {
    title: "A4: Concept Video",
    description: "Fill in later.",
    image: "/images/elliott.png",
    tags: [
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
    description: "Fill in later.",
    image: "/images/elliott.png",
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
        label: "Sketching Report (pdf)",
        href: "https://docs.google.com/document/d/1sYXHoygkW3-q4XB-aZBr8WDWcQ71JNX4T5GjyzPnQ5I/edit?usp=sharing",
      },
    ],
  },
  {
    title: "A6: Interactive Medium-Fi Prototype",
    description: "Fill in later.",
    image: "/images/elliott.png",
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
    title: "A7: Heuristic Evaluation",
    description: "Fill in later.",
    image: "/images/elliott.png",
    tags: [
      {
        label: "Slides (pdf)",
        href: "#",
      },
      {
        label: "Slides (pptx)",
        href: "#",
      },
    ],
  },
  {
    title: "A8: Hi-fi Portotype",
    description: "Fill in later.",
    image: "/images/elliott.png",
    tags: [
      {
        label: "Slides (pdf)",
        href: "#",
      },
      {
        label: "Slides (pptx)",
        href: "#",
      },
    ],
  },
  {
    title: "A10: Poster, Pitch, Demo Video",
    description: "Fill in later.",
    image: "/images/elliott.png",
    tags: [
      {
        label: "Slides (pdf)",
        href: "#",
      },
      {
        label: "Slides (pptx)",
        href: "#",
      },
    ],
  },
  {
    title: "A11: Final Report",
    description: "Fill in later.",
    image: "/images/elliott.png",
    tags: [
      {
        label: "Slides (pdf)",
        href: "#",
      },
      {
        label: "Slides (pptx)",
        href: "#",
      },
    ],
  },
];

export default function OurProcess() {
  return (
    <section
      id="process"
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
            marginBottom: "1.5rem",
          }}
        >
          Our Design Process
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#555555",
            textAlign: "center",
            marginBottom: "3rem",
            maxWidth: "750px",
            margin: "0 auto 3rem auto",
            lineHeight: "1.6",
          }}
        >
          Fill in later.
        </p>

        {/* Responsive Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              title={step.title}
              description={step.description}
              image={step.image}
              tags={step.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
