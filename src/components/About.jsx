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
              <p className="line line1">&gt; <span>Hey</span> <span>there</span></p>
              <p className="line line2">&gt; <span>I'm</span> <span>Dhruv</span> <span>Kapoor,</span> <span>a</span> <span>curious</span> <span>web</span> <span>developer</span></p>
              <p className="line line3">&gt; <span>I</span> <span>love</span> <span>turning</span> <span>ideas</span> <span>into</span> <span>interactive</span> <span>web</span> <span>projects</span></p>
              <p className="line line4">&gt; <span>My</span> <span>tools:</span> <span>HTML,</span> <span>CSS,</span> <span>JavaScript,</span> <span>Bootstrap</span> <span>and</span> <span>React</span></p>
              <p className="line line5">&gt; <span>Currently</span> <span>exploring</span> <span>the</span> <span>MERN</span> <span>stack</span> <span>world</span></p>
              <p className="line line6">&gt; <span>Outside</span> <span>coding</span> <span>I</span> <span>play</span> <span>football</span> <span>and</span> <span>chess</span></p>
              <p className="line line7">&gt; <span>Always</span> <span>learning</span> <span>new</span> <span>things</span> <span>about</span> <span>web</span> <span>development</span></p>
              <p className="line line8">&gt; <span>Let's</span> <span>create</span> <span>something</span> <span>awesome</span> <span>together</span></p>
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
