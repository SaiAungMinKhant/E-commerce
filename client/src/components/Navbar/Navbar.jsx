import React from "react";
import "./Navbar.scss";
import {BsPerson,BsHeadset,BsCart2} from "react-icons/bs";

const Navbar = () => {
  return(
  <div className="navbar">
    <div className="leftnav">
      <ul>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>
        <li>ACCESSORIES</li>
      </ul>
    </div>
    <div className="rightnav">
    <ul>
        <li><BsPerson className="icons" /></li>
        <li><BsCart2 className="icons" /></li>
        <li><BsHeadset className="icons" /></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar;