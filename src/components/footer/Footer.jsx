import React from 'react';
import './footer.css';
import LogoFooter from '../../assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className='full-bleed'>
      <div>
        <img src={LogoFooter} alt="" className='logo-footer'/>
      </div>
      <div className='nav-links'>
      <div>
        <h4>Navigation</h4>
        <p><a href="/home">Home</a></p>
        <p><a href="/about">About</a></p>
        <p><a href="/menu">Menu</a></p>
        <p><a href="/reservations">Reservations</a></p>
        <p><a href="/order">Order Online</a></p>
        <p><a href="/login">Login</a></p>
      </div>
      <div>
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
      <div>
        <h4>Social Media</h4>
        <p><a href="#">Instagram</a></p>
        <p><a href="#">Facebook</a></p>
        <p><a href="#">Tiktok</a></p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
