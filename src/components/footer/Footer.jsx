import React from 'react';
import './footer.css';
import LogoFooter from '../../assets/logo-footer.png';

const Footer = () => {
  return (
    <footer>
      <img src={LogoFooter} alt="" className='logo-footer'/>
      <div>
          <p>© Copyright Little Lemon</p>
      </div>
    </footer>
  )
}

export default Footer