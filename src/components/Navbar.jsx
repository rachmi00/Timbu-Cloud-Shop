import React, { useContext } from 'react';
import list from '../assets/List.svg';
import search from "../assets/MagnifyingGlass.svg";
import user from "../assets/Vector.svg";
import content from "../assets/Cart Content Indicator.svg";
import cart from "../assets/Cart vector.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from '../context/shop-context';

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  const showSideBar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  };

  const hideSideBar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  return (
    <header className='header'>
      <nav className='navbar'>
        <Link to="/" style={{textDecoration: 'none'}} className='no-underline'> <h2>Kickoff Kits</h2></Link>
        <ul className='sidebar'>
          <li onClick={hideSideBar}><img src={list} alt="" /></li>
          <li className='input-wrapper'>
            <input type="text" placeholder='search for anything' />
            <img src={search} alt="" />
          </li>
          <Link to='/' style={{textDecoration: 'none'}} className='no-underline'> <li className='text-black fw-medium'>Home</li></Link>
          <li className='text-muted'>help</li>
          <li className='user text-muted'><span><img src={user} alt="" /></span> Account</li>
          <Link to="/cart">
            <li className='cart'>
              <span><img src={cart} alt="" /></span>
              Cart
              <span className="badge rounded-pill bg-success">{getTotalItems()}</span>
            </li>
          </Link>
        </ul>

        <ul>
          <li className='input-wrapper hide-mobile'>
            <input type="text" placeholder='search for anything' />
            <img src={search} alt="" />
          </li>
          <Link to='/'> <li className='text-black fw-medium hide-mobile'>Home</li></Link>
          <li className='text-muted hide-mobile'>help</li>
          <li className='user text-muted hide-mobile'><span><img src={user} alt="" /></span> Account</li>
          <Link to="/cart">
            <li className='cart hide-mobile'>
              <span><img src={cart} alt="" /></span>
              Cart
              <span className="badge rounded-pill bg-success">{getTotalItems()}</span>
            </li>
          </Link>
          <li className='menu-button' onClick={showSideBar}><img src={list} alt="" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;