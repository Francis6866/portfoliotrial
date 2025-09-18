import React from 'react'
import "./hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        {/* profile image */}
      <img src="" alt="" />
      <h1><span>I'm Iboloke Francis,</span> frontend developer based in Nigeria</h1>
      <p>I am a frontend developer from Calabar, Nigeria with 2 years of experience with frontend design</p>
      <div className="hero-action">
        <button className='hero-connect'>
          <AnchorLink offset={50} href='#contact' className="anchor-link">
            Connect with me
          </AnchorLink>
        </button>
        <button className='hero-resume'>My resume</button>
      </div>
    </div>
  )
}

export default Hero
