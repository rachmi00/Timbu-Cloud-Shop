import React, { useState } from 'react'
// import 'bootstrap/dist/css/boostrap.min.css'
import './Footer.css'
import facebook from "../assets/FacebookLogo.svg"
import instagram from "../assets/InstagramLogo.svg"
import twitter from "../assets/XLogo.svg"
import snapchat from '../assets/SnapchatLogo.svg'
import telegram from '../assets/MessageLogo.svg'


const Footer = () => {
  const [inputValue, setInputValue] = useState('')
  return (
     
      
    <footer className="my-5 pt-5 text-muted text-center text-small container-fluid">
      <div className="row">
        <div className="col-md-3 fs-3 text-success kits col-sm-12"><h2>Kickoff Kits</h2></div>
        <div className="col-md-2 col-4">
          <p className='fw-bold text-black'>At a glance</p>
          <ul >
            <li className='list-group-item'>New Arrivals</li>
            <li className='list-group-item'>Top Sellers</li>
            <li className='list-group-item'>All Products</li>
          </ul>
        </div>
        <div className="col-md-2 col-4">
          <p className='fw-bold text-black'>Support</p>
          <ul >
            <li className='list-group-item'>FAQs</li>
            <li className='list-group-item'>Return Policy</li>
            <li className='list-group-item'>Payments</li>
            <div className="list-group-item">Contact Us</div>
          </ul>
        </div>
        <div className="col-md-2 col-4">
          <p className='fw-bold text-black'>Shop Info</p>
          <ul >
            <li className='list-group-item'>Blog</li>
            <li className='list-group-item'>Promotion</li>
            <li className='list-group-item'>News</li>
            <li className="list-group-item">Careers</li>
            <li className='list-group-item'>Affiliates</li>
          </ul>
        </div>
        <div className="col-md-3 kits col-12 pe-4">
         <h3 className='text-black'>Sign Up for your Kickoff Kits</h3>
         <ul>
          <li className="list-group-item">
          <input type="text" className="form-control bg-success-subtle border-black" id="LastName" placeholder={`\u2709 Enter Your email             \u2192`} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
          </li>
          <li className="list-group-item pt-2">
            <h4 className='text-black'>Follow Us</h4>
            <ul className='d-flex justify-content-between'>
              <li className="list-group-item "><img src={snapchat} alt="" /></li>
              <li className="list-group-item "><img src={instagram} alt="" /></li>
              <li className="list-group-item "><img src={twitter} alt="" /></li>
              <li className="list-group-item "><img src={facebook} alt="" /></li>
              <li className="list-group-item "><img src={telegram} alt="" /></li>
            </ul>
          </li>
         </ul>
        </div>
      </div>
    <div className='mt-4 d-flex justify-content-between ms-4 me-4'>
    <p className="pe-1 text-muted ">&copy; 2024 Kickoff Kits. All Rights reserved</p>
     <p className='pe-1'>Privacy Policy</p>
     <p className='pe-1'>Terms of Use</p>
     <p className='pe-1'>Supply Chain</p>
     <p className='pe-1'>Site Map</p>
     <p className='pe-1'>Cookie Policy</p>
    </div>

    </footer>
     
  )
}

export default Footer