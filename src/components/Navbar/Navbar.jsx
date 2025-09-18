import React, { useRef, useState } from 'react'
import "./navbar.css"
import logo from "../../assets/logo.svg"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuCloseIcon from "../../assets/menu_close.svg"
import menuOpenIcon from "../../assets/menu_open.svg"

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      
      <img src={menuOpenIcon} alt="" className='nav-mob-open' onClick={openMenu} />

      <ul ref={menuRef} className='nav-menu'>
        <img src={menuCloseIcon} alt="" className="nav-mob-close" onClick={closeMenu} />

        <li>
          <AnchorLink href='#home' className="anchor-link">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          
          {menu === "home" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink offset={50} href='#about' className="anchor-link">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          
          {menu === "about" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink offset={50} href='#services' className="anchor-link">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          
          {menu === "services" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink offset={50} href='#work' className="anchor-link">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          
          {menu === "work" && <img src={underline} alt="" />}
        </li>
        <li>
          <AnchorLink offset={50} href='#contact' className="anchor-link">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink offset={50} href='#contact' className="anchor-link">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
