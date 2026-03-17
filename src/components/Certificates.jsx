import { FaEye, FaAward } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

function Certificates() {
  const certificates = [
    {
      title: "Web Design",
      issuer: "Croma Campus",
      image: "/Webdesign-card.png",
      link: "#"
    },
    {
      title: "MERN Full Stack Development",
      issuer: "Croma Campus",
      image: "/MERN-card.png",
      link: "#"
    },
  ];

  return (
    <section id="certificates">
      <div className="container">
        <h1 className="certificates-title">
          Earned with <span>pride</span>
        </h1>

        <p className="certificates-subtitle">
          these are some of my certifications
        </p>

        <div className="row g-4">
          {certificates.map((c, i) => (
            <div className="col-md-4" key={i}>
              <div className="certificate-card" data-aos="fade-up">

                <div className="certificate-badge">
                  <FaAward />
                </div>

                <img src={c.image} alt={c.title} />

                <div className="certificate-overlay-icons">
                  <a href={c.image} target="_blank" className="icon">
                    <FaEye />
                  </a>
                  <a href={c.link} download className="icon">
                    <MdDownload />
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

export default Certificates;
