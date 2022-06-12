import React, {useState} from 'react'
import Navbar from './Navbar'
import './Hero.css'
import Sidebar from './Sidebar'

const Hero = () => {

  const[show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show)
  }

  return (
    <div className="container">
      <Navbar toggle={toggle}></Navbar>
      <Sidebar show={show} toggle={toggle}></Sidebar>
      <div className="content">
        <div className="contentItems">
          <h1 className='navHead'>Locally crafted beer</h1>
          <p>
            This is grain, which any fool can eat,but for which the lord has intended a more divine form of consumption.Let us give praise to our maker and glory to His bounty by learning about beer.
          </p>
          <div className="btn">Book Now</div>
        </div>
      </div>
    </div>
  )
}

export default Hero