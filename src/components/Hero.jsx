import React, { useRef } from 'react'
import '../styles/Hero.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import linkedin from "/assets/linkedin.png"
import github from "/assets/github.png"

function Hero() {

  const imgRef = useRef()
  const descRef = useRef()


  function handleContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"})
  }

  useGSAP(()=>{
gsap.from(imgRef.current,{
  xPercent:-200,
  delay:0.1,
  duration:1.5
}
)

gsap.from(descRef.current,{
  xPercent:200,
  delay:0.1,
  duration:1.5
}
)
  })
  return (
    <section className='hero'>
        <div className='hero-content'>
                <section className="img-section" ref={imgRef}></section>
                <section className="desc-section" ref={descRef}>
                    <div className='desc-section-content'>
                    <p>Hello, I'm</p>
                    <h1>Ritik Prajapati</h1>
                    <h2>Frontend Developer</h2>
                    <div>
                        <button className='btn-cv'>Download CV</button>
                        <button className='btn-contact' onClick={handleContact}>Contact Info</button>
                    </div>
                    <div className='social-icons'><a target='_blank' href='https://www.linkedin.com/in/ritik-prajapati-666a8823a/'><img src={linkedin} alt="icon" /></a><a href='https://www.github.com' target='_blank'><img src={github} alt="icon" /></a></div>

                    </div>
                </section>
        </div>
    </section>
  )
}

export default Hero