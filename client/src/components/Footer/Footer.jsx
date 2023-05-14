import React from 'react';
import './Footer.scss';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGoogleCircle
} from 'react-icons/ai';

function PrimaryFooter() {
  return (
    <div className='primary'>
      <div className='links-list'>
        <div className="links">
          <h4>COMPANY INFO</h4>
          <ul>
            <li>About SHEIS</li>
            <li>Social responsibility</li>
            <li>Fashion Blogger</li>
            <li>Supply Chain</li>
            <li>Careers</li>
            <li>Student Discount</li>
          </ul>
        </div>
        <div className="links">
          <h4>HELP & SUPPORT</h4>
          <ul>
            <li>Shipping info</li>
            <li>Returns</li>
            <li>Refund</li>
            <li>How to Order</li>
            <li>How to Track</li>
            <li>Size Guide</li>
            <li>SHEIS VIP</li>
          </ul>
        </div>
        <div className="links">
          <h4>CUSTOMER CARE</h4>
          <ul>
            <li>Contact Us</li>
            <li>Payment & Tax</li>
            <li>Bonus Point</li>
          </ul>
        </div>
      </div>
      <div className='contacts'>
        <div className='contact-icons'>
          <p>FIND US ON</p>
          <div className='icons'>
            <AiFillFacebook className='icon' />
            <AiFillTwitterSquare className='icon' />
            <AiFillInstagram className='icon' />
            <AiFillYoutube className='icon' />
            <AiFillGoogleCircle className='icon' />
          </div>
        </div>
        <div className="form">
            <h3>Subscribe</h3>
            <input type="text" placeholder='Your email address...' />
            <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default PrimaryFooter
