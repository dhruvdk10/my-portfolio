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

          <a
            href="mailto:dhruvkapoor2002100@gmail.com?subject=Career%20Opportunity&body=Hello%20Dhruv%2C%20this%20is%20(XYZ)%20from%20(XYZ%20Company).%20I%20came%20across%20your%20profile%20and%20was%20impressed%20with%20your%20skills%20and%20experience.%20I%20would%20love%20to%20connect%20and%20discuss%20potential%20career%20opportunities.%20Please%20let%20me%20know%20a%20time%20that%20is%20convenient%20for%20you.%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0AThank%20you."
            className="contact-item"
            data-aos="zoom-in"
          >
            <FaEnvelope />
          </a>

            <a
            href="https://wa.me/9667480693?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you%20regarding%20potential%20career%20opportunities.%20I%20came%20across%20your%20profile%20and%20would%20love%20to%20have%20a%20discussion%20at%20a%20convenient%20time.%20Please%20let%20me%20know%20when%20you%20are%20available."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            data-aos="zoom-in"
          >
            <FaWhatsapp />
          </a>

          <a href="https://www.linkedin.com/in/dhruv-kapoor-dk10/" target="_blank" className="contact-item" data-aos="zoom-in">
            <FaLinkedin />
          </a>

           <a href="https://www.instagram.com/dhruv_dk10/" target="_blank" className="contact-item" data-aos="zoom-in">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/dhruv.kapoor.54943/" target="_blank" className="contact-item" data-aos="zoom-in">
            <FaFacebookF />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
