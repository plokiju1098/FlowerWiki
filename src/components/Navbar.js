import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../svg/bars.svg';
import '../css/navbar.css';

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleMobileMenu = () => {
    console.log(mobileActive);
    setMobileActive(!mobileActive);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    console.log(offset);
    if (offset > 100) setScroll(true);
    else setScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <>
      <div className='nav-wrapper'>
        <nav className={scroll ? 'navbar scrolled' : 'navbar '}>
          <div className='nav-center'>
            <Link to='/'>
              <h1 className='logo'>Encyklopedia roślin</h1>
            </Link>

            <ul className='nav-links'>
              <li>
                <Link to='/'>Strona Główna</Link>
              </li>
              <li>
                <Link to='/about'>Informacje</Link>
              </li>
              <li>
                <Link to='/contact'>Kontakt</Link>
              </li>
            </ul>

            <span className='hamburger-icon' onClick={handleMobileMenu}>
              <img src={Hamburger} alt='' />
            </span>
          </div>

          <div className={mobileActive ? 'mobile-active' : 'mobile-off'}>
            <ul className='nav-links-mobile'>
              <li onClick={handleMobileMenu}>
                <Link to='/'>Strona Główna</Link>
              </li>
              <li onClick={handleMobileMenu}>
                <Link to='/about'>Informacje</Link>
              </li>
              <li onClick={handleMobileMenu}>
                <Link to='/contact'>Kontakt</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
