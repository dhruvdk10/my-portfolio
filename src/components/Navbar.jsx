import { MdDownload } from "react-icons/md";

function Navbar() {

  const navbarData = {
    name: "./portfolio-logo.png",
    resume: {
      text: "RESUME",
      file: "./Resume-Dhruv-Kapoor.pdf"
    }
  };

  return (
    <nav className="custom-navbar fixed-top">
      <div className="container nav-top">

        <a className="brand-logo" href="#">
          <img src={navbarData.name} className="logo-img" alt="DK Logo" />
        </a>

        <a
          href={navbarData.resume.file}
          download
          className="resume-btn"
        >
          <MdDownload />
          <span>{navbarData.resume.text}</span>
        </a>

      </div>
    </nav>
  );
}

export default Navbar; 
