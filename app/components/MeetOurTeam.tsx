"use client";

import TeamCard from "./TeamCard";
import { useIntersection } from "@/app/lib/useIntersection";

const teamMembers = [
  {
    name: "Reyna Duffy",
    role: "UI/UX Designer",
    image: "/images/reyna.png", // Replace with reyna.png when available
    linkedinUrl: "https://www.linkedin.com/in/reynaduffy/",
  },
  {
    name: "Evan Robinson",
    role: "Product Manager",
    image: "/images/evan.png", // Replace with evan.png when available
    linkedinUrl: "https://www.linkedin.com/in/evanrobinsonstanford/",
  },
  {
    name: "Elliott Douglass Rodgers Jr.",
    role: "Mobile Developer",
    image: "/images/eli.png",
    linkedinUrl: "https://www.linkedin.com/in/elliott-rodgers-jr-b477a9241/",
  },
  {
    name: "Lour Drick Valsote",
    role: "Product Engineer",
    image: "/images/lour.png", // Replace with lourdrick.png when available
    linkedinUrl: "https://www.linkedin.com/in/lourdrick",
  },
];

export default function MeetOurTeam() {
  const { elementRef, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <section
      ref={elementRef}
      id="team"
      style={{
        padding: "2rem 1rem",
        backgroundColor: "#F8F3ED",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
      className="md:py-24"
    >
      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "36px",
            fontFamily: "DM Serif Text, serif",
            fontWeight: "bold",
            color: "#121211",
            textAlign: "center",
            marginBottom: "2rem",
          }}
          className="md:text-5xl md:mb-12"
        >
          Meet Our Team
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.25rem",
            maxWidth: "900px",
            margin: "0 auto",
            justifyContent: "center",
          }}
          id="team-flex-container"
          className="md:gap-1"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 auto",
                minWidth: "150px",
                maxWidth: "calc(50% - 0.125rem)",
              }}
              id="team-card-wrapper"
            >
              <TeamCard
                name={member.name}
                role={member.role}
                image={member.image}
                linkedinUrl={member.linkedinUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .md\\:py-24 {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          .md\\:text-5xl {
            font-size: 48px;
          }
          .md\\:mb-12 {
            margin-bottom: 3rem;
          }
          .md\\:gap-1 {
            gap: 0.25rem;
          }
          #team-card-wrapper {
            flex: 1 1 auto !important;
            maxWidth: calc(33.333% - 0.167rem) !important;
          }
        }

        @media (min-width: 1024px) {
          #team-card-wrapper {
            flex: 1 1 auto !important;
            maxWidth: calc(25% - 0.1875rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
