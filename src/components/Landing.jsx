import React from 'react'
import pic1 from "../assets/hero_desktop.png"

import pic4 from "../assets/hero_mobile.png"
import {useNavigate} from 'react-router-dom'

const Landing = () => {
      const navigate = useNavigate();
      const handleScrollToSection = ()=>{
        navigate("/", {state: {scrollToSection: true}});
      }
  return (
  <div className='hero-container mt-5 '>
    <div className='hero-image-container'>
      
      <div className="hero1 desktop-image"><img src={pic1} alt="sach pic" className='pic1'/></div>

     <div className='mobile-image'><img src={pic4} alt="" /></div>
    </div>
    <div className='hero-text'>
     <h1><b>2024/2025 JERSEY ARRIVALS</b></h1>
      <p>Your destination for top-quality football jerseys. Designed for players and fans alike, our jerseys combine performance, comfort, and style. Show your team spirit and elevate your game with Kickoff Kits!</p>
      <div className='button' onClick={handleScrollToSection}>Shop Now</div>
    </div>
  </div>
  )
}

export default Landing