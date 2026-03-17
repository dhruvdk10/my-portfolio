import { FaEnvelope, FaFacebookF, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-bg"></div>
      <div className="contact-container container text-center">

        <h1 className="contact-title">
          Connect with <span>me.</span>
        </h1>

        <p className="contact-subtitle">

        </p>

        <div className="contact-links">

          <a href="mailto:yourmail@gmail.com" className="contact-item" data-aos="zoom-in">
            <FaEnvelope />
          </a>

          <a href="https://linkedin.com/" target="_blank" className="contact-item" data-aos="zoom-in">
            <FaLinkedin />
          </a>

          <a href="https://facebook.com/" target="_blank" className="contact-item" data-aos="zoom-in">
            <FaFacebookF />
          </a>

          <a href="https://instagram.com/" target="_blank" className="contact-item" data-aos="zoom-in">
            <FaInstagram />
          </a>

          <a href="https://wa.me/1234567890" target="_blank" className="contact-item" data-aos="zoom-in">
            <FaWhatsapp />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
