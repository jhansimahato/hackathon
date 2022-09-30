import React, { useState } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>
            <img src={require('../../TOG-Logo.png')} alt="logo"  className="logoimg"/>
        </h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/student' className='student'>
            <li>Student</li>
          </Link>
          <Link to='/mentor' className='mentor'>
            <li>Mentor</li>
          </Link>
          <Link to='/volunteer' className='volunteer'>
            <li>Volunteer</li>
          </Link>
          <Link to='/sessions' className='sessions'>
            <li>Sessions</li>
          </Link>
          <Link to='/donors' className='donors'>
            <li>Donors</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
