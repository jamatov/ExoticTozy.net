import React from 'react';
import "./Navbar.css"
import { useState } from 'react';
import logo from "../../img/logo.png"


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggler = () => {
    active === "nav__menu" 
    ? setActive('nav__menu nav__active') 
    : setActive ("nav__menu");

    toggleIcon === "nav__toggler" 
    ? setToggleIcon ('nav__toggler toggle')
    : setToggleIcon('nav__toggler')

  }
  return (
     <nav>
        <a href="#">
          <img className='site_logo' src={logo} alt="site logo" />
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a className='nav__link' href="#">Home</a>
          </li>
          <li className="nav__item">
            <a className='nav__link' href="#about">About</a>
          </li>
          <li className="nav__item">
            <a className='nav__link' href="#cars">Cars</a>
          </li>
          <li className="nav__item">
            <a className='nav__link' href="#carusel">Carusel</a>
          </li>
          <li className="nav__item">
            <a className='nav__link' href="#contact">Contact</a>
          </li>
        </ul>
        <div onClick={navToggler} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          
        </div>
     </nav>
  );
}

export default Navbar;