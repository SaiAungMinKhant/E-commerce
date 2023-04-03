import React from 'react';
import globe from '../img/globe-free-img.png';
import quality from '../img/quality-free-img.png';
import lock from '../img/lock-free-img.png';
import tag from '../img/tag-free-img.png';
import "./Features.scss";

function Features() {
  return (
      <div className="features">
        <div className='feature'>
          <img src={globe} alt='#' />
          <h3>Worldwide Shipping</h3>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='feature'>
          <img src={quality} alt='#' />
          <h3>Best Quality</h3>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='feature'>
          <img src={tag} alt='#' />
          <h3>Best Offers</h3>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='feature'>
          <img src={lock} alt='#' />
          <h3>Secure Payment</h3>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>
  )
}

export default Features;
