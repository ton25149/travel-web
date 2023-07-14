import React from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
      <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
    </section>
  )
}

export default Footer