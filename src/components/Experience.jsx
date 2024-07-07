import React, { useRef, useState } from "react";
import "../styles/Experience.scss";
import ExperienceDetail from "./ExperienceDetail";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experienceArr = [
  { name: "HTML", url: "/assets/html.webp" },
  { name: "CSS", url: "/assets/css.webp" },
  { name: "JAVASCRIPT", url: "/assets/js.webp" },
  { name: "REACT", url: "/assets/react.webp" },
  { name: "REDUX", url: "/assets/redux.webp" },
  { name: "SASS", url: "/assets/sass.webp" },
  { name: "TAILWIND CSS", url: "/assets/tailwind.webp" },
  { name: "BOOTSTRAP", url: "/assets/bootstrap.webp" },
  { name: "GIT", url: "/assets/git.webp" },
  { name: "GITHUB", url: "/assets/github.webp" },
  { name: "GSAP", url: "/assets/gsap.webp" },
  { name: "FRAMER MOTION", url: "/assets/motion.webp" },

];

function Experience() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".experience-content", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".explore",
        start: "top 60%",
        end: "bottom bottom",
      },
    });

    gsap.from(".explore", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".explore",

        start: "top 60%",
        end: "bottom bottom",
      },
    });
  });

  return (
    <section className="experience" id="experience">
      <p className="explore">Explore My</p>
      <h1 className="explore">SKILLS</h1>
      <section className="experience-content">
        {experienceArr.map(({name,url}, index) => (
          <ExperienceDetail name={name} url = {url} key={index} />
        ))}
      </section>
    </section>
  );
}

export default Experience;
