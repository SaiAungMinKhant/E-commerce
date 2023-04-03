import React from 'react';
import './PrimaryFooter.scss';
import logo from '../img/logo.png';

function PrimaryFooter() {
  return (
    <div className='primary'>
      <div className="logo">
        <img src={logo} alt="" />
        <span>The best look anytime, anywhere!</span>
      </div>
      <div className="links">
        <h4>For Women</h4>
        <ul>
          <li>Women Jeans</li>
          <li>Tops and Skirts</li>
          <li>Women Jackets</li>
          <li>Heels and Flats</li>
          <li>Women Accessories</li>
        </ul>
      </div>
      <div className="links">
        <h4>For Men</h4>
        <ul>
          <li>Men Jeans</li>
          <li>Men Shirts</li>
          <li>Men Shoes</li>
          <li>Men Accessories</li>
          <li>Men Jackets</li>
        </ul>
      </div>
      <div className="form">
        <h3>Subscribe</h3>
        <input type="text" placeholder='Your email address...' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default PrimaryFooter
