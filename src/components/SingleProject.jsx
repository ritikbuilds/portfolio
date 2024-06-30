
import React from 'react'
import '../styles/SingleProject.scss'

function SingleProject({title,img,liveLink,desc,technologies}) {
  return (
    <div className='single-project'>
        <div className="single-project-content">
          <a href={liveLink} target='_blank' className='img-section'>
          <img src={img} alt="image" />
          </a>
          <section className='desc-section'>
          <div className='desc-top'>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          <div className='desc-bottom'>
           { technologies.map((elem,index)=><span key={index}> {elem} </span>)}
          </div>
          </section>
        </div>
        </div>
  )
}

export default SingleProject