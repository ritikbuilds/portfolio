import React from "react";
import "../styles/Projects.scss";
import SingleProject from "./SingleProject";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectsArr = [
  {
    img: "assets/daily-digest.webp",
    title: "Daily Digest",
    desc: "Daily Digest is a news website providing users with the latest news. It leverages the following technologies, including the NewData API, to deliver timely updates and a seamless user experience.",
    technologies: ["REACT", "TAILWIND CSS", "NEWSDATA API"],
    liveLink: "https://ritikbuilds-dailydigest.netlify.app/",
  },
  {
    img: "assets/portfolio.webp",
    title: "Portfolio",
    desc: "Portfolio Website is diligently designed to showcase projects and skills, leveraging React and Sass to enhance maintainability, scalability, and design consistency.",
    technologies: ["REACT", "SCSS"],
    liveLink: "",
  },
  {
    img: "assets/significo.png",
    title: "Significo",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "GSAP"],
    desc: "Significo is a dynamic, animated, and responsive website. It showcases advanced animation techniques and responsive design principles to deliver an engaging user experience, using the following technologies.",
    liveLink: "https://ritikbuilds-significo.netlify.app/",
  },
  {
    img: "assets/firstinmath.png",
    title: "FirstInMath",
    desc: "First in Math is a modern edutech website's frontend, featuring captivating animations aimed at enhancing student engagement and learning experiences. It utilizes the following technologies.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "GSAP"],
    liveLink: "https://ritikbuilds-firstinmath.netlify.app/",
  },
  {
    img: "assets/rejouice.png",
    title: "Rejouice",
    desc: "Rejouice is an animated website crafted to showcase sophisticated animations and responsive design. It utilizes following technologies to deliver a visually engaging and interactive user experience.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "GSAP"],
    liveLink: "https://ritikbuilds-rejouice.netlify.app/",
  },
  {
    img: "assets/retro.webp",
    title: "Retro",
    desc: "Retro is a complex design-based website with a retro theme, featuring minimal animations to enhance its nostalgic and vintage appeal, utilizing the following technologies.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
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
