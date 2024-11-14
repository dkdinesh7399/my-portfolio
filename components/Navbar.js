import React, { useState } from 'react'
import './nav.css'
//import logo from "../assets/logo.svg"
import underline from "../assets/nav_underline.svg"
//import AnchorLink from "react-anchor-link-smooth-scroll"


const Navbar = () => {

  const [menu,setMenu] =useState("home");

  return (
    <div className='navbar'>
        
    <ul className='nav-menu'>
        
        <li><a className="anchor-link" offset={50} href="#home"><p onClick={()=> setMenu("home")}>Home</p></a>{menu === "home" ?<img src= {underline} alt=""/>:<></>}</li>
        <li><a className="anchor-link" offset={50} href="#about"><p onClick={()=> setMenu("about")}>About us</p></a>{menu === "about" ?<img src= {underline} alt=""/>:<></>}</li>
        <li><a className="anchor-link" offset={50} href="#service"><p onClick={()=> setMenu("service")}>Service</p></a>{menu === "service" ?<img src= {underline} alt=""/>:<></>}</li>
        <li>< a className="anchor-link" offset={50} href="#work"><p onClick={()=> setMenu("work")}>Portfolio </p></a>{menu === "work" ?<img src= {underline} alt=""/>:<></>}</li>
        <li><a className="anchor-link" offset={50} href="#contact as"><p onClick={()=> setMenu("contact as")}>Contact As</p></a>{menu === "contact as" ?<img src= {underline} alt=""/>:<></>}</li>

        </ul>    
        <div className='nav-connect'>connect with me</div>
    </div>
  )
}

export default Navbar