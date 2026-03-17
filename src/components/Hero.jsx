import { TypeAnimation } from "react-type-animation";
import { FaFolderOpen, FaGithub } from "react-icons/fa";

function Hero() {
  return (

    <section className="hero">

      <div className="hero-bg"></div>

      <div className="hero-container container">

        <p className="hero-intro">Hello! dev freaks 👋</p>

        <h1 className="hero-name">
          I'm <span>Dhruv Kapoor</span>
        </h1>

        <p className="hero-typing">

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "I build responsive web applications",
              2000,
              "I turn ideas into web experiences",
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

        </p>

        <a href="#projects" className="btn hero-btn project-btn">
          <FaFolderOpen className="btn-icon" />
          <span>Projects</span>
        </a>

        <a
          href="https://github.com/dhruvdk10"
          target="_blank"
          rel="noopener noreferrer"
          className="btn hero-btn github-btn"
        >
          <FaGithub className="btn-icon" />
          <span>Repo</span>
        </a>

      </div>

    </section>

  )
}

export default Hero;
