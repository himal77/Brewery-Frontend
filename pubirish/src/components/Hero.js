import React from 'react'
import Navbar from './Navbar'
import './Hero.css'

const Hero = () => {
  return (
    <div className="container">
      <Navbar></Navbar>

      <div className="content">
        <div className="contentItems">
          <h1>Locally crafted beer</h1>
          <p>
            This is grain, which any fool can eat,
            but for which the lord has intended a more divine form of consumption.
            Let us give praise to our maker and glory to His bounty by learning about beer.
          </p>
          <div className="btn">Book Now</div>
        </div>
      </div>
    </div>
  )
}

export default Hero