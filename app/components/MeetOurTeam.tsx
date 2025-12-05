"use client";

import TeamCard from "./TeamCard";
import { useIntersection } from "@/app/lib/useIntersection";

const teamMembers = [
  {
    name: "Reyna Duffy",
    role: "Lead UI/UX Designer",
    image: "/images/reyna.png",
    linkedinUrl: "https://www.linkedin.com/in/reynaduffy/",
  },
  {
    name: "Evan Robinson",
    role: "Lead Product Manager",
    image: "/images/evan.png",
    linkedinUrl: "https://www.linkedin.com/in/evanrobinsonstanford/",
  },
  {
    name: "Elliott Rodgers",
    role: "Lead Software Engineer",
    image: "/images/eli.png",
    linkedinUrl: "https://www.linkedin.com/in/elliott-rodgers-jr-b477a9241/",
  },
  {
    name: "Lour Drick Valsote",
    role: "Lead Product Engineer",
    image: "/images/lour.png",
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
        padding: "8rem 1.5rem",
        background: "#FBF8F3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob on the right */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "var(--color-accent-gold)",
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
            Meet Our Team
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

        {/* Team Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
          id="team-grid"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${
                  0.2 + index * 0.1
                }s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${
                  0.2 + index * 0.1
                }s`,
              }}
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
        @media (min-width: 1024px) {
          #team-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
