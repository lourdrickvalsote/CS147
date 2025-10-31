import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Reyna Duffy",
    role: "HCI Design",
    image: "/images/elliott.png", // Replace with reyna.png when available
    linkedinUrl: "https://www.linkedin.com/in/reynaduffy/",
  },
  {
    name: "Evan Robinson",
    role: "User Research",
    image: "/images/elliott.png", // Replace with evan.png when available
    linkedinUrl: "https://www.linkedin.com/in/evanrobinsonstanford/",
  },
  {
    name: "Elliott Douglass Rodgers Jr.",
    role: "Design & Prototyping",
    image: "/images/elliott.png",
    linkedinUrl: "https://www.linkedin.com/in/elliott-rodgers-jr-b477a9241/",
  },
  {
    name: "Lour Drick Valsote",
    role: "Strategy & Ideation",
    image: "/images/elliott.png", // Replace with lourdrick.png when available
    linkedinUrl: "www.linkedin.com/in/lourdrick",
  },
];

export default function MeetOurTeam() {
  return (
    <section
      id="team"
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
            marginBottom: "2rem",
          }}
        >
          Meet Our Team
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
