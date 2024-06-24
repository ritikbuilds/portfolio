import React from 'react'
import checkMark from "/assets/checkmark.png"
import "../styles/ExperienceDetail.scss"

function ExperienceDetail({detail}) {
  return (
    <div className='experience-detail'>
        <img src={checkMark} alt="icon" />
        <h2>{detail}</h2>
    </div>
  )
}

export default ExperienceDetail