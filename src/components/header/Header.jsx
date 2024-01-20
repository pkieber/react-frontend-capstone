import React from 'react'
import './header.css'
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/icons/burger_icon.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" className='logo' />
      <div className='m-show'>
        <img src={Burger} alt="" className='burger'/>
      </div>
      <Nav />
    </nav>
  )
}

export default Header
