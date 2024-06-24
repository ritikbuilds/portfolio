import React from 'react'
import '../styles/Projects.scss'
import SingleProject from './SingleProject'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const projectsArr = [
    {
    img:"assets/significo.png",
    title:"Significo(Desktop Version)",
    gitLink:"https://www.google.com",
    liveLink:"https://appdev-significo.netlify.app/",
    },
    {
    img:"assets/rejouice.png",
    title:"Rejouice(Responsive)",
    gitLink:"",
    liveLink:"https://appdev-rejouice.netlify.app/",
    },
    {
    img:"assets/firstinmath.png",
    title:"FirstInMath(Responsive)",
    gitLink:"https://github.com/ritikbuilds/travel-world",
    liveLink:"https://appdev-firstinmath.netlify.app/",
    },

]

function Projects() {

  gsap.registerPlugin(ScrollTrigger)


  useGSAP(()=>{
    gsap.from(".animate-p,.animate-h",{
      opacity:0,
      scale:0,
      duration:1,
      ease:"power1.out",
      scrollTrigger:{
        trigger:".animate-p",
        start:"top 60%",
        end:"bottom bottom",
      }
    })

    gsap.from(".projects-con",{
      opacity:0,
      scale:0,
      duration:1,
      ease:"power1.out",
      scrollTrigger:{
        trigger:".animate-p",
        start:"top 60%",
        end:"bottom bottom",
      }
    })
  })
  
  return (
    <section className='projects' id='projects'>
        <p className='animate-p'>Explore My</p>
        <h1 className='animate-h'>Projects</h1>
        <section className='projects-con'>
            {projectsArr.map((elem,index)=><SingleProject {...elem} key={index}/>)}
        </section>
    </section>
  )
}

export default Projects