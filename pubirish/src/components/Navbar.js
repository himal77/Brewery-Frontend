import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({toggle}) => {
  return (
    <nav className="navbar">
			<Link className="navlink" to="/">
				<div className="desktop">Irish Pub</div>
			</Link>
			<div className="navicon" onClick={toggle}>
				<FaBars className="icon"></FaBars>
			</div>
		</nav>
  );
};

export default Navbar;
