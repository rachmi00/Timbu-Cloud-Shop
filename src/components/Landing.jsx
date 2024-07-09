import React from 'react'
import pic1 from "../assets/sach.png"
import pic2 from "../assets/torso pic.png"
import pic3 from "../assets/Neck pic.png"
import pic4 from "../assets/mobile image.png"
import {useNavigate} from 'react-router-dom'

const Landing = () => {
      const navigate = useNavigate();
      const handleScrollToSection = ()=>{
        navigate("/", {state: {scrollToSection: true}});
      }
  return (
  <div className='hero-container'>
    <div className='hero-image-container'>
      
      <div className="hero1 desktop-image"><img src={pic1} alt="sach pic" className='pic1'/></div>
      <div className="hero2 desktop-image">    <img src={pic2} alt="torso pic" className='pic2'/></div>
      <div className="hero3 desktop-image"> <img src={pic3} alt=" neck pic" className='pic3'/></div>

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