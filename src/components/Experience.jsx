import React, { useRef, useState } from 'react'
import '../styles/Experience.scss'
import ExperienceDetail from './ExperienceDetail'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const experienceArr = ["HTML","CSS","JAVASCRIPT","REACT","GIT","GITHUB","SASS","TAILWIND CSS","GSAP","FRAMER MOTION"]

function Experience() {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.from(".experience-content",{
      opacity:0,
      scale:0,
      duration:1,
      ease:"power1.out",
      scrollTrigger:{
        trigger:".explore",
        start:"top 60%",
        end:"bottom bottom"
      }
    })

    gsap.from(".explore",{
      opacity:0,
      scale:0,
      duration:1,
      ease:"power1.out",
      scrollTrigger:{
        trigger:".explore",

        start:"top 60%",
        end:"bottom bottom"
      }
    })
  })


  return (
    <section className='experience' id='experience'>
        <p className='explore'>Explore My</p>
        <h1 className='explore'>SKILLS</h1>
        <section className='experience-content' >
        {experienceArr.map((detail,index)=><ExperienceDetail detail={detail} key={index}/>)}
        </section>
    </section>
  )
}

export default Experience