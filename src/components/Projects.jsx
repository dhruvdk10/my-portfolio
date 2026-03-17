import { FaEye, FaCode } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "KC Football Academy",
      tech: "HTML, CSS",
      image: "./KC-card.png",
      link: "https://dhruvdk10.github.io/KC_Football_Academy/",
      github: "https://github.com/dhruvdk10/KC_Football_Academy"
    },
    {
      title: "Cartzon",
      tech: "HTML, CSS, Bootstrap",
      image: "./cartzon-card.png",
      link: "https://dhruvdk10.github.io/BS-Cartzon.in/",
      github: "https://github.com/dhruvdk10/BS-Cartzon.in"
    },
    {
      title: "Karo Pitch",
      tech: "HTML, CSS, Javascript, Bootstrap",
      image: "./Pitch-card.png",
      link: "https://dhruvdk10.github.io/Karo-Pitch/",
      github: "https://github.com/dhruvdk10/Karo-Pitch"
    },
    {
      title: "Manchitra Design Studio",
      tech: "React, HTML, CSS, Javascript Bootstrap",
      image: "./MDS-card.png",
      link: "https://dhruvdk10.github.io/MDS-app_React/",
      github: "https://github.com/dhruvdk10/MDS-app_React"
    },
    {
      title: "Swash Jwellers",
      tech: "React, HTML, CSS, Javascript Bootstrap",
      image: "./swash-card.png",
      link: "https://dhruvdk10.github.io/Swash_React/",
      github: "https://github.com/dhruvdk10/Swash_React"
    },
    {
      title: "vibe",
      tech: "MERN Full Stack",
      image: "./vibe-card.png",
      link: "https://dhruvdk10.github.io/vibe.Inc_React/",
      github: "https://github.com/dhruvdk10/vibe.Inc_React"
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
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="icon">
                    <FaEye />
                  </a>

                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="icon">
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
