import React from 'react'
import pic1 from "../assets/sach.png"
import pic2 from "../assets/torso pic.png"
import pic3 from "../assets/Neck pic.png"

const Landing = () => {

  return (
  <div className='hero-container'>
    <div className='hero-image-container'>
      
      <div className="hero1"><img src={pic1} alt="sach pic" className='pic1'/></div>
      <div className="hero2">    <img src={pic2} alt="torso pic" className='pic2'/></div>
      <div className="hero3"> <img src={pic3} alt=" neck pic" className='pic3'/></div>
     
    </div>
    <div className='hero-text'>
     <h1><b>2024/2025 JERSEY ARRIVALS</b></h1>
      <p>Your destination for top-quality football jerseys. Designed for players and fans alike, our jerseys combine performance, comfort, and style. Show your team spirit and elevate your game with Kickoff Kits!</p>
      <div className='button'>Shop Now</div>
    </div>
  </div>
  )
}

export default Landing