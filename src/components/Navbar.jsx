import React from 'react'
import list from '../assets/List.svg'
import search from "../assets/MagnifyingGlass.svg"
import user from "../assets/Vector.svg"
import content from "../assets/Cart Content Indicator.svg"
import cart from "../assets/Cart vector.svg"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
function hideSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}


  return (
    <header className='header'>
      <nav className='navbar'>
        <h2>Kickoff Kits</h2>
        <ul className='sidebar'>
          <li onClick={hideSideBar}><img src={list} alt="" /></li>
        {/* <li className='flex'><span><img src={list} alt="" /></span> Menu</li> */}
          <li className='input-wrapper'>
            <input type="text" placeholder='search for anything' />
            <img src={search} alt="" />
          </li>
        <Link to='/'> <li className='text-black fw-medium'>Home</li></Link>
          <li className='text-muteds'>help</li>
          <li className='user text-muted'><span><img src={user} alt="" /></span>  Account</li>

          <Link to="/cart"> <li className='cart' ><span><img src={cart} alt="" /></span> Cart <span><img src={content} alt="" /></span></li></Link>
        </ul>


         <ul>
          {/* <li className='flex hide-mobile'><span><img src={list} alt="" /></span> Menu</li> */}
          <li className='input-wrapper hide-mobile'>
            <input type="text" placeholder='search for anything' />
            <img src={search} alt="" />
          </li>
        <Link to='/'> <li className='text-black fw-medium hide-mobile'>Home</li></Link>
          <li className='text-muteds hide-mobile'>help</li>
          <li className='user text-muted hide-mobile'><span><img src={user} alt="" /></span>  Account</li>

          <Link to="/cart"> <li className='cart hide-mobile' ><span><img src={cart} alt="" /></span> Cart <span><img src={content} alt="" /></span></li></Link>
          <li className='menu-button' onClick={showSideBar}><img src={list} alt="" /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar