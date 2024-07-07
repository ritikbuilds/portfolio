import React from "react";
import "../styles/Projects.scss";
import SingleProject from "./SingleProject";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectsArr = [
  {
    img: "assets/significo.png",
    title: "Significo",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    desc: "significo is an animated website created using following technologies ",
    liveLink: "https://ritikbuilds-significo.netlify.app/",
  },
  {
    img: "assets/rejouice.png",
    title: "Rejouice",
    desc: "Rejouice is an animated  website created using following technologies",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    liveLink: "https://ritikbuilds-rejouice.netlify.app/",
  },
  {
    img: "assets/firstinmath.png",
    title: "FirstInMath",
    desc: "First in math is an  edutech website created using following technologies.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    liveLink: "https://ritikbuilds-firstinmath.netlify.app/",
  },
  {
    img: "assets/ecommerce.webp",
    title: "E-Commerce App",
    desc: "This is an  e-commerce website based on amazon which includes various functionalities of an e-commerce app.",
    technologies: ["REACT","TAILWIND CSS","REDUX"],
    liveLink: "https://ritikbuilds-ecommerce.netlify.app/",
  },
  {
    img: "assets/daily-digest.webp",
    title: "Daily Digest",
    desc: "Daily Digest is a news website which provides user with the latest news developed using following technologies.",
    technologies: ["REACT","TAILWIND CSS","NEWSDATA API"],
    liveLink: "https://ritikbuilds-dailydigest.netlify.app/",
  },
  {
    img: "assets/retro.webp",
    title: "Retro",
    desc: "Retro is a retro theme based  website developed using following technologies.",
    technologies: ["HTML","CSS","JAVASCRIPT"],
    liveLink: "https://ritikbuilds-retro.netlify.app/",
  },
  {
    img: "assets/portfolio.webp",
    title: "Portfolio",
    desc: "Portfolio website to showcase projects and skills website developed using following technologies.",
    technologies: ["REACT","SCSS"],
    liveLink: "https://ritikbuilds-retro.netlify.app/",
  },
];

function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
    gsap.from(".animate-p,.animate-h", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".animate-p",
        start: "top 60%",
        end: "bottom bottom",
      },
    });

    gsap.from(".projects-con", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".animate-p",
        start: "top 60%",
        end: "bottom bottom",
      },
    });
  });

  return (
    <section className="projects" id="projects">
      <p className="animate-p">Explore My</p>
      <h1 className="animate-h">Projects</h1>
      <section className="projects-con">
        {projectsArr.map((elem, index) => (
          <SingleProject {...elem} key={index} />
        ))}
      </section>
    </section>
  );
}

export default Projects;
