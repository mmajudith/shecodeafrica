import React, { useState } from 'react'
import Logo from '../images/she-code-africa-logo.svg'
import Illust from '../images/shecodeafrica-landing-img.jpg'
import HamBurger from '../images/icon-hamburger.svg'

function Header() {

    const [ toggle, setToggle] = useState(false)

    const toggleMenu = () =>{
        setToggle(!toggle)
    }

  return (

    <header>
        <div className="header-container">

            <div className={ toggle ? "openMenu" : "closeMenu"}>
                <nav className="header-nav" >
                        <div className="header-logo">
                            <img src={Logo} alt="She Code Africa Logo" className="logo" width="80px" height="70px"/>
                        </div>
                        <div className="toggle-wrapper">
                            <img src={HamBurger} alt="hamburger menu" onClick={toggleMenu}/>
                        </div>
                        <div className="list-items">  
                            <ul>
                                <li className="home">Home</li>
                                <li className="item">About</li>
                                <li className="item">Partner/Sponsor</li>
                                <li className="item">Chapters</li>
                                <li className="item">Events</li>
                                <li className="item">Blog</li>
                            </ul>
                        </div>
                </nav>
           </div>
            
           <div className="header-title">
                <div className="title">
                    <h1>She Code Africa</h1>
                    <p>...celebrating and empowering Women in Tech across Africa</p>
                    <div className="join-us">
                        <button>Join Us!</button>
                    </div>
                </div>
                <div className="illustration-wrapper">
                    <img src={Illust} alt="Illustration of woman on desktop" className="illustration" width="450px" height="450px"/>
                </div>
           </div>

        </div>
    </header>
    
  )
}

export default Header
