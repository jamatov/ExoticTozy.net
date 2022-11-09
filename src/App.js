import About from './pages/AboutPage';
import Footer from './Components/Footer';
import Contact from './pages/ContactPage';
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import "./Components/NavBar/Navbar.css";
import logo from './img/logo.png'
import { useState } from 'react';
import AllCars from './pages/AllCarsPage';
import Xome from "./pages/HomePage"
import ReadMore from './Components/Readmore'
import LearnMorePage from './pages/LearnMorePage';


function App() {
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
    <>
      <nav>
        <div className="container nav">
          <Link className='nav-logo' to='/'>
            <img className='site_logo' src={logo} alt="site logo" />
            <h2>EXOTIC TOYZ</h2>
          </Link>
          <ul className={active}>
            <li className='nav__item'><Link onClick={navToggler} className='nav__link' to='/'>Home</Link></li>
            <li className='nav__item'><Link onClick={navToggler} className='nav__link' to='/about'>About</Link></li>
            <li className='nav__item'><Link onClick={navToggler} className='nav__link' to='/contact'>Contact</Link></li>
            <li className='nav__item'><Link onClick={navToggler} className='nav__link' to='/allcars'>Inventory</Link></li>
          </ul>
          <div onClick={navToggler} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
          </div>
        </div>
      </nav>

        <Routes>
          <Route path="/" element={<Xome/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/allcars" element={<AllCars/>}/>
          <Route path="/readmore/:id" element={<ReadMore/>}/>
          <Route path='/learnmore/:id' element={<LearnMorePage/>}/>

        </Routes>
      <Footer/>
    </>

  );
}


export default App;
