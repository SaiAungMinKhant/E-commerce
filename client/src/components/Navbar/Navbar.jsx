import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return(
  <div className="navbar">
    <div className="logo">
      DSG
    </div>
    <div className="leftnav">
      <ul>
        <li>EVERYTHING</li>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>ACCESSORIES</li>
      </ul>
    </div>
    <div className="rightnav">
    <ul>
        <li>ABOUT</li>
        <li>CONTACT US</li>
        <li>$0.00</li>
        <li>shop icon</li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar;