import React from 'react';
import './nav.css';
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/icons/burger_icon.svg';

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" className='logo' />
      <ul className='m-hide'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
      <div className='m-show'>
        <img src={Burger} alt="" className='burger'/>
      </div>
    </nav>
  )
}

export default Nav
