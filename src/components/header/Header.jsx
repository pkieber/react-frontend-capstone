import React from 'react';
import './header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="me" className='logo' />
    </header>
  )
}

export default Header