import { FaEye, FaCode } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "KC Football Academy",
      tech: "HTML, CSS",
      image: "./KC-card.png",
      github: "#"
    },
    {
      title: "Cartzon",
      tech: "HTML, CSS, Bootstrap",
      image: "./cartzon-card.png",
      github: "#"
    },
    {
      title: "Karo Pitch",
      tech: "HTML, CSS, Javascript, Bootstrap",
      image: "./Pitch-card.png",
      github: "#"
    },
    {
      title: "Manchitra Design Studio",
      tech: "React, HTML, CSS, Javascript Bootstrap",
      image: "./MDS-card.png",
      github: "#"
    },
    {
      title: "Swash Jwellers",
      tech: "React, HTML, CSS, Javascript Bootstrap",
      image: "./swash-card.png",
      github: "#"
    },
    {
      title: "vibe",
      tech: "MERN Full Stack",
      image: "./vibe-card.png",
      github: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h1 className="projects-title">
          Crafted with <span>love</span>
        </h1>

        <p className="projects-subtitle">
          these are few of my recent projects
        </p>

        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-4" key={i}>
              <div className="project-card" data-aos="fade-up">
                <img src={p.image} alt={p.title} />

                {/* Overlay with icons */}
                <div className="project-overlay-icons">
                  <a href={p.image} target="_blank" className="icon">
                    <FaEye />
                  </a>
                  <a href={p.github} target="_blank" className="icon">
                    <FaCode />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
