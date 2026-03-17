import { FaFutbol, FaChess, FaMusic } from "react-icons/fa";
import { MdSportsEsports } from "react-icons/md";

function Skills() {
  return (

    <section id="skills">

      <div className="container">

        <h1 className="skills-title">
          Things I'm <span>good</span> at
        </h1>

        <p className="skills-subtitle">
          skills and hobbies
        </p>


        {/* Development */}
        <div className="skill-category">Skills</div>

        <div className="skills-grid">

          <div className="skill-item" data-aos="zoom-in">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <span>HTML5</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="100">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <span>CSS3</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <span>JavaScript</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
            <span>jQuery</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
            <span>Bootstrap</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <span>React</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="600">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <span>Node.js</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="700">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            <span>Express.js</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="800">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <span>MongoDB</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="900">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <span>Git</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="1000">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <span>GitHub</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="1100">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
            <span>VS Code</span>
          </div>

        </div>


        {/* Interests */}
        <div className="skill-category mt-5">Hobbies</div>

        <div className="skills-grid">

          <div className="skill-item" data-aos="zoom-in">
            <FaFutbol className="interest-icon football" />
            <span>Football</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="100">
            <FaChess className="interest-icon chess" />
            <span>Chess</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="200">
            <MdSportsEsports className="interest-icon gaming" />
            <span>Gaming</span>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="300">
            <FaMusic className="interest-icon music" />
            <span>Music</span>
          </div>

        </div>

      </div>

    </section>

  )
}

export default Skills
