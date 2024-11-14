import React from 'react'
import'./Hero.css'
//import profile from '../../assets/profile.svg';
const Hero = () => {
  return (
    <div id="home" className='Hero'>
     
        <h1>I'm <span>DineshKumar </span></h1>
        <p>I am a Fullstack Developer </p>
    
    <div className='hero-action'>
        <div className='hero-connect'>connect with me </div>
        <div className='hero-resume'>My Resume</div>
    </div>
    </div>
  )
}

export default Hero