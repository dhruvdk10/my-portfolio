import { MdDownload } from "react-icons/md";

function Navbar() {

  return (

    <nav className="custom-navbar fixed-top">

      <div className="container nav-top">

        <a className="brand-logo" href="#">
          DHRUV KAPOOR
        </a>

        <a
          href="./Resume-Dhruv-Kapoor.pdf"
          download
          className="resume-btn"
        >
          <MdDownload />
          <span>RESUME</span>
        </a>

      </div>

    </nav>

  )

}

export default Navbar;
