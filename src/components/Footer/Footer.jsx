import React from 'react'
import "./footer.css"
import footer_logo from "../../assets/logo.svg"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I am frontend developer from, Nigeria with 2 years of experience and practice in companies like Harvoxx, isong Tech</p>
        </div>

        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">
                Subcribe
            </div>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2025 Iboloke Francis.All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
