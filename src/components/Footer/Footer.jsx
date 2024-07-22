import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
        <div className='footer-content-left'>
            
            <div className="our food">Our Food</div>
            <p>simple dummy text to give what content i have in my  ecommerce project so just read it and get info about the project what and  how it works </p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>

        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
            <li>Home</li>
            <li>Aboutus</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            </ul>
        </div>

        <div className='footer-content-right'>
            <h2>Get in touch</h2>
            <ul>
                <li>+1-213-556-1234</li>
                <li>contact@ourfood.com</li>
            </ul>
        </div>
        
    </div>
     <hr/>
     <p className='footer-copy-right'>Copyright 2024 at OurFood.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer