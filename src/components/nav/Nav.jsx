import React from 'react';
import './nav.css';
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/icons/burger_icon.svg';

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" className='logo' />
      <ul className='m-hide'>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <div className='m-show'>
        <img src={Burger} alt="" className='burger'/>
      </div>
    </nav>
  )
}

export default Nav
