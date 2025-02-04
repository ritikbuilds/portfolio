import React from "react";
import "../styles/AboutMe.scss";
import experience from "/assets/experience.webp";
import education from "/assets/education.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

function AboutMe() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".animate-aboutme-p,.animate-aboutme-h", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".animate-aboutme-p",
        start: "top 60%",
        end: "bottom bottom",
      },
    });

    gsap.from(".about-me", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".animate-aboutme-p",
        start: "top 60%",
        end: "bottom bottom",
      },
    });
  }, []);

  return (
    <section className="about-me-con container" id="about">
      <p className="animate-aboutme-p">Get to know More</p>
      <h1 className="animate-aboutme-h">About Me</h1>

      <section className="about-me">
        <section className="about-me-img"></section>
        <section className="about-me-desc">
          <div className="about-me-desc-top">
            <div>
              <img src={experience} alt="icon" />
              <h2>Experience</h2>
              <p>Fresher</p>
              <p>Full Stack Development</p>
            </div>
            <div>
              <img src={education} alt="icon" />
              <h2>Education</h2>
              <p>B.Tech</p>
              <p>Computer Science</p>
            </div>
          </div>
          <section className="about-me-desc-bottom">
            <p>
              Ritik Prajapati is an enthusiastic full-stack developer
              specializing in building interactive and responsive web and mobile
              applications using modern technologies. Proficient in React.js and
              React Native for frontend development, he also has expertise in
              Node.js, Express.js, and MongoDB for developing scalable and
              efficient backend systems. With a strong commitment to continuous
              learning and a passion for full-stack development, he is eager to
              apply his skills in a dynamic environment. Driven by a desire to
              innovate and improve his craft, he aims to contribute to
              cutting-edge projects, ensuring seamless integration between
              frontend and backend while delivering exceptional user
              experiences.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default AboutMe;
