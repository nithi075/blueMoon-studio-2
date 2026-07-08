import "./Team.css";

// import akash from "../../assets/akash.jpg";
import jeganathan from "../../assets/jegan.jpg";
import sharath from "../../assets/sharath.jpeg";
import pavithra from "../../assets/pavithra.jpg";
import vinoth from "../../assets/vinoth.jpg";
import dravid from "../../assets/dravid.jpg";
import sudharsan from "../../assets/sudharsan.jpg";

const members = [
  // {
  //   image: akash,
  //   name: "Akash Haridass",
  //   role: "CEO & Director",
  //   description:
  //     "Meet Akash Haridass, the visionary CEO and Director driving Bluemoon Media's end-to-end production. Renowned for turning brand concepts into powerful cinematic stories, he won the prestigious 2023 Best Ad Film Award at the Addplus Contest, setting new benchmarks in commercial filmmaking.",
  // },

  {
    image: jeganathan,
    name: "Jeganathan Thangam",
    role: "Founder & Creative Director",
    description:
      "Meet Jeganathan Thangam, the Founder and Creative Director shaping our brand's visual legacy. Bringing elite cinematic expertise from the Kollywood film industry—where he served as Associate Director on major films like NOVP and Athomugam—he meticulously establishes our design standards and brand aesthetics. Today, Jeganathan mentors our creative team to translate big-screen storytelling into innovative, award-winning content for your brand.",
  },

  {
    image: sharath,
    name: "Sharath Dhayalan",
    role: "Managing Director (MD)",
    description:
      "Meet Sharath Dhayalan, the powerhouse Managing Director driving the operational excellence of Bluemoon Media. Sharath masterfully bridges high-level strategy with daily execution, ensuring flawless departmental coordination and robust financial health across our entire ecosystem. A true dual-threat professional, he pairs his strict business acumen with technical mastery as a highly successful professional drone operator, lifting our aerial visuals to spectacular heights.",
  },

  {
    image: pavithra,
    name: "Pavithra S.K.",
    role: "Chief Marketing Officer (CMO) & CRM Lead",
    description:
      "Meet Pavithra S.K., the strategic Chief Marketing Officer and CRM Lead driving Bluemoon Media's market expansion. A highly talented digital marketing force, Pavithra masterfully crafts the brand strategies that keep our audience deeply engaged while expanding our market footprint. By cultivating meaningful, long-term client partnerships, she ensures every brand receives an unparalleled client experience.",
  },
 {
    image: dravid,
    name: "Dravid",
    role: "Chief Editor",
    description:
      "Meet Dravid, the Chief Editor anchoring the entire post-production pipeline at Bluemoon Media. A master of pacing and visual architecture, he directs post-production to ensure flawless continuity, razor-sharp timing, and compelling storytelling that meets the highest industry standards.",
  },
  {
    image: vinoth,
    name: "Vinoth V.M.",
    role: "Director of Photography (DOP)",
    description:
      "Meet Vinoth V.M., Director of Photography shaping the visual identity of Bluemoon Media. A virtuoso of lighting and composition, Vinoth expertly translates raw directorial vision into stunning cinematic visuals. His technical brilliance behind the lens defines our signature storytelling style.",
  },
  {
  image: sudharsan,
  name: "Sudharsan",
  role: "Team Manager",
  description:
    "Meet Sudharsan, the Team Manager ensuring every project at Bluemoon Media runs seamlessly. He expertly manages shoot schedules, coordinates creative teams, and oversees post-production workflows. With his organized approach and sharp attention to detail, Sudharsan helps deliver every project on time while maintaining the highest quality standards.",
},

 
];

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-bg-text">TEAM</div>

      <div className="team-container">

        <div className="team-header">

          <span className="team-tag">
            OUR LEADERSHIP
          </span>

          <h2 className="team-title">
            Meet Our
            <br />
            <span>Creative Team</span>
          </h2>

          <p className="team-description">
            Behind every cinematic frame is a passionate team of visionary
            filmmakers, strategists, editors and creators committed to building
            unforgettable brand stories.
          </p>

        </div>

        <div className="team-grid">

          {members.map((member, index) => (

            <div className="team-card" key={index}>

              <div className="team-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

              </div>

              <div className="team-content">

                <span className="team-role">
                  {member.role}
                </span>

                <h3>
                  {member.name}
                </h3>

                <p>
                  {member.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}