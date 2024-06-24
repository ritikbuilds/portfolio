import React from 'react'
import '../styles/SingleProject.scss'

function SingleProject({title,img,liveLink,gitLink}) {
  return (
    <div className='single-project'>
        <div className='img-con'>
            <img src={img} alt="image" />

        </div>
            <h2>{title}</h2>

            <div className='link-con'>
            <a href={gitLink} target='_blank'>Github</a>
            <a href={liveLink} target='_blank'>Live Demo</a>
            </div>
        </div>
  )
}

export default SingleProject