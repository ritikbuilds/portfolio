import React from 'react'
import "../styles/GetInTouch.scss"
import email from "/assets/email.png"
import linkedin from "/assets/linkedin.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function GetInTouch() {
  gsap.registerPlugin(ScrollTrigger)


  useGSAP(()=>{
    gsap.from(".animate-contact-p,.animate-contact-h",{
      opacity:0,
      scale:0,
      duration:0.7,
      ease:"power1.out",
      scrollTrigger:{
        trigger:".animate-contact-p",
        start:"top 60%",
        end:"bottom bottom",
      }
    })

    gsap.from(".contact-details-con",{
      opacity:0,
      scale:0,
      duration:0.7,
      ease:"power1.out",
      scrollTrigger:{
        trigger:".animate-contact-p",
        start:"top 60%",
        end:"bottom bottom",
      }
    })
  })
  return (
    <section className='get-in-touch' id='contact'>
        <p className='animate-contact-p'>Get in Touch</p>
        <h1 className='animate-contact-h'>Contact Me</h1>

        <section className='contact-details-con'>
            <a target="_blank" href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ritikprajapati2704@gmail.com'>
            <img src={email} alt="icon" />
            <h2>RitikPrajapati2704@gmail.com</h2>
            </a>

            <a target='_blank' href='https://www.linkedin.com/in/ritik-prajapati-666a8823a/'>
                <img src={linkedin} alt="icon" />
                <h2>LinkedIn</h2>
            </a>
        </section>

        <p className='footer-text'>Made with 🤍 by me</p>
    </section>
  )
}

export default GetInTouch
