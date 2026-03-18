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
              <p className="line line3">&gt; <span>I</span> <span>enjoy</span> <span>building</span> <span>clean</span> <span>and</span> <span>responsive</span> <span>websites</span></p>

              <p className="line line4">&gt; <span>I</span> <span>focus</span> <span>on</span> <span>creating</span> <span>smooth</span> <span>user</span> <span>experiences</span></p>

              <p className="line line5">&gt; <span>My</span> <span>skills</span> <span>include</span> <span>HTML,</span> <span>CSS,</span> <span>JavaScript,</span> <span>and</span> <span>React</span></p>

              <p className="line line6">&gt; <span>I</span> <span>am</span> <span>currently</span> <span>improving</span> <span>my</span> <span>frontend</span> <span>development</span> <span>skills</span></p>

              <p className="line line7">&gt; <span>Outside</span> <span>coding,</span> <span>I</span> <span>love</span> <span>playing</span> <span>football</span> <span>and</span> <span>chess</span></p>

              <p className="line line8">&gt; <span>Let’s</span> <span>build</span> <span>something</span> <span>amazing</span> <span>together</span></p>
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
