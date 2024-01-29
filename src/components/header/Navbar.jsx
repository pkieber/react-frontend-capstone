import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/home" className='logo'>
        <img src={Logo} alt="logo" className='logo' />
      </Link>
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'cross' : ''}></span>
        <span className={menuOpen ? 'cross' : ''}></span>
        <span className={menuOpen ? 'cross' : ''}></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" onClick={closeMenu}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations" onClick={closeMenu}>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" onClick={closeMenu}>
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={closeMenu}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
