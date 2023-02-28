import React from 'react'
import './Hero.css'
import Crypto from '../assests/hero-img.png'

function Hero() {
  return (
    <div className="hero">
        <div className='container'>

          {/* left side */}
          <div className='left'>
            <p> Buy & Sell Crypto 24/7 using your retirement account</p>
            <h1> Invest in Crypto with your IRA</h1>
            <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
            <div className='input-container'>
              <input type="email" placeholder='Enter your email address' />
              <button className='btn'>Get Started</button>
            </div>
          </div>

          {/* right side */}
          <div className='right'>
             <img src={Crypto} alt="crypto" />
          </div>

        </div>
    </div>
  )
}

export default Hero