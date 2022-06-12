import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className='desktop'>Marshmalleo and cakes</div>
      </Link>
      <div className='navicon'>
          <FaBars className="icon"></FaBars>
        </div>
    </nav>
  );
}

export default Navbar;
