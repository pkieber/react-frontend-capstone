import React from 'react';
import './nav.css';
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/icons/burger_icon.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" className='logo' />
      <ul className='m-hide'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <div className='m-show'>
        <img src={Burger} alt="" className='burger'/>
      </div>
    </nav>
  )
}

export default Nav
