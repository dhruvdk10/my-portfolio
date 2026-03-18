import { useEffect, useRef, useState } from "react";

function About() {

  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className={visible ? "start" : ""}>
      <div className="container">
        <h2 className="about-title">Know <span>me</span> more</h2>

        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
            <div className="terminal-text">
              <p className="line line1">&gt; <span>Hey</span> <span>again</span></p>
              <p className="line line2">&gt; <span>Here’s</span> <span>a</span> <span>quick</span> <span>intro</span> <span>about</span> <span>me</span></p>
              <p className="line line3">&gt; <span>I</span> <span>enjoy</span> <span>crafting</span> <span>clean</span> <span>and</span> <span>modern</span> <span>designs</span></p>
              <p className="line line4">&gt; <span>I</span> <span>focus</span> <span>on</span> <span>detail</span> <span>and</span> <span>visual</span> <span>quality</span></p>
              <p className="line line5">&gt; <span>Always</span> <span>learning</span> <span>new</span> <span>things</span> <span>in</span> <span>tech</span></p>
              <p className="line line6">&gt; <span>I</span> <span>like</span> <span>solving</span> <span>real</span> <span>world</span> <span>problems</span></p>
              <p className="line line7">&gt; <span>Football</span> <span>and</span> <span>chess</span> <span>keep</span> <span>me</span> <span>sharp</span></p>
              <p className="line line8">&gt; <span>Let’s</span> <span>build</span> <span>something</span> <span>unique</span> <span>together</span></p>
            </div>
          </div>

          {/* Right side typing animation */}
          <div className="col-lg-5 col-md-12 d-flex justify-content-center">
            <div className="typing-dots">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
