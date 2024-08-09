import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <div className="nav-logo">The VacaySpot</div>
        <ul className="nav-menu">
          <li><Link  to='/home'>Home</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link to='/bookings'>Bookings</Link></li>
        </ul>
        <ul className='nav-contact'>
          <li><Link to='/login' className='navi'>Login</Link></li>
          <li><Link to='/signup' className='nava'>Sign In</Link></li>
        </ul>
      </div> 
      <div className='close-nav'><IoCloseCircleSharp className='icon'/></div>
      <div className="toggle-nav"><TbGridDots className='icon'/></div>
    </div>
  );
}
 
export default Navbar;