import React from 'react'
import {Footer} from './style'
import vehicleimage from '../../Images/footerimage.png'
import linkdn from '../../Images/linkedin.png'
import utube from '../../Images/utube.png'
import fb from '../../Images/facebook.png'
import twitter from '../../Images/twitter.png'
function FooterPart() {
  return (
   <Footer>
    <div className='footersection'>
        <div className='footer-part'>
        <div className='firstsection'>
        <div className='frstsection-image'>
        <img src={vehicleimage}/>
        </div>
       <p>fast delivery in 3-5 days</p>
        </div>
        <div className='second-section'>
            <h1>Quick links</h1>
            <ul>
                <li>Gift Card</li>
                <li>Lookbook 2022</li>
                <li>Privacy policy</li>
                <li>Shipping & Refund</li>
            </ul>
        </div>
        <div className='second-section'>
            <h1>Company</h1>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Pricing plan</li>
                <li>Knowledge Base</li>
            </ul>
        </div>
        <div className='second-section'>
            <h1>News Letter</h1>
            <ul>
                <li>Sign up & get all our latest updates and specialoffers</li>
                <li ><input type='text' className='input' placeholder='enter your email address'/>
                <button className='btn'>Subscribe</button>
                </li>
                <div  className='icons' >
                <li>
                    <img src={utube}/>
                </li>
                <li>
                    <img src={linkdn}/>
                </li>
                <li>
                    <img src={fb}/>
                </li>
                <li>
                    <img src={twitter}/>
                </li>
                </div>
                
        
            </ul>
        </div>
        </div>
    <p style={{color:'grey'}}>© 2021 Alba. All Rights Reserved.</p>
    </div>
   </Footer>
  )
}

export default FooterPart