import React from 'react'

import "../styles/ExperienceDetail.scss"

function ExperienceDetail({name,url}) {
  return (
    <div className='experience-detail'>
        <img src={url} alt="icon" />
        <h2>{name}</h2>
    </div>
  )
}

export default ExperienceDetail