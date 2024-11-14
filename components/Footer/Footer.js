import React from 'react'
import './Footer.css'
import footer from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={footer} alt=''/>
                <p>I am a Fullstack developer from ,dgl with 5 years.</p>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
                <img src={user_icon} alt=''/>
                <input type='email' placeholder='enter your email'/>

            </div>
            <div className='footer-subscribe'>Subscribe</div>

        </div>
    </div>
    <hr/>
    <div className='footer-bottom'>
        <p className='footer-bottom-left'> 2024 dkdinesh7398. All rights Reserved</p>
        <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>connect with me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer