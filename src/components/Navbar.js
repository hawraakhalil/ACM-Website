import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./Button";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // toggle between the bars and X on the menu
  const changeMenuIcon = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    } else {
        setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={'/images/acm_white.jpg'} style={{width:'60px'}} /> 
            <h3> chapter at AUB  </h3>
            </Link>
            <div className="menu-icon" onClick={changeMenuIcon}>
                <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Committees' className='nav-links' onClick={closeMobileMenu}>
                        Committees
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Events' className='nav-links' onClick={closeMobileMenu}>
                        Events
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Board' className='nav-links' onClick={closeMobileMenu}>
                        Board
                    </Link>
                </li>
                <li>
              <Link
                to='/OpenSources'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Open Sourses
              </Link>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' whereTo='/OpenSources'>Open Sourses</Button>} 
        </div>
      </nav>
    </>
  )
}

export default Navbar;
