import React, { useRef } from "react";
import "../styles/Hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import linkedin from "/assets/linkedin.webp";
import github from "/assets/github.webp";

function Hero() {
  const imgRef = useRef();
  const descRef = useRef();

  function handleContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  useGSAP(() => {
    gsap.from(imgRef.current, {
      xPercent: -200,
      delay: 0.1,
      duration: 1.5,
    });

    gsap.from(descRef.current, {
      xPercent: 200,
      delay: 0.1,
      duration: 1.5,
    });
  }, []);
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <section className="img-section" ref={imgRef}></section>
        <section className="desc-section" ref={descRef}>
          <div className="desc-section-content">
            <p>Hello, I'm</p>
            <h1>Ritik Prajapati</h1>
            <h2>Full Stack Developer</h2>
            <div>
              <a
                download={"Ritik Prajapati Resume"}
                href="/assets/Ritik_Prajapati_Resume.pdf"
                className="btn-cv"
              >
                Download CV
              </a>
              <button className="btn-contact" onClick={handleContact}>
                Contact Info
              </button>
            </div>
            <div className="social-icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ritik-prajapati-666a8823a/"
              >
                <img src={linkedin} alt="icon" />
              </a>
              <a href="https://www.github.com/ritikbuilds" target="_blank">
                <img src={github} alt="icon" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Hero;
