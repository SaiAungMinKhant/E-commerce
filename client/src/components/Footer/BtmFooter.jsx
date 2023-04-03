import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGoogleCircle
} from 'react-icons/ai';
import "./BtmFooter.scss";

function BtmFooter() {
  return (
    <div className='footer'>
      <div className="left">
      Copyright © 2023 Brandstore. Powered by Brandstore.
      </div>
      <div className="right">
        <AiFillFacebook className='icons' />
        <AiFillTwitterSquare className='icons'/>
        <AiFillInstagram className='icons'/>
        <AiFillYoutube className='icons' />
        <AiFillGoogleCircle className='icons' />
      </div>
    </div>
  )
}

export default BtmFooter
