import React from 'react';
import './footer.css';
import LogoFooter from '../../assets/img/logo-footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='full-bleed'>
      <div>
        <img src={LogoFooter} alt="" className='logo-footer'/>
      </div>
      <div className='nav-links'>
      <div>
        <h4>Navigation</h4>
        <p>
          <Link to="/home">
            Home
          </Link>
        </p>
        <p>
          <Link to="/about">
            About
          </Link>
        </p>
        <p>
          <Link to="/menu">
            Menu
          </Link>
        </p>
        <p>
          <Link to="/reservations">
            Reservations
          </Link>
        </p>
        <p>
          <Link to="/order">
            Order Online
          </Link>
        </p>
        <p>
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
      <div>
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
      <div>
        <h4>Social Media</h4>
        <p>
          <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
        </p>
        <p>
          <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </Link>
        </p>
        <p>
          <Link to="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            Tiktok
          </Link>
        </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
