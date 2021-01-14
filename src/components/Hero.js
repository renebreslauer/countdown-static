import React from 'react'
import Countdown from './Countdown'
import '../App.scss'

function Hero() {
  return (
    <div class="hero-wrapper">
      <div class="image-container">
        <div className="wrapper">
          <Countdown date="January 18 2021 08:06 GMT-5" />
        </div>
      </div>
    </div>
  )
}

export default Hero
