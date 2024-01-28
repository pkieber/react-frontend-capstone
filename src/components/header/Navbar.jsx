import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <Link to="/home" className='logo'> <img src={Logo} alt="logo" className='logo' /></Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/reservations">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/order">Order Online</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
