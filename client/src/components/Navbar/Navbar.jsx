import React from "react";
import "./Navbar.scss";
import {AiFillShopping} from "react-icons/ai";
import logo from "../img/logo.png";

const Navbar = () => {
  return(
  <div className="navbar">
    <div className="logo">
      <img src={logo} alt="" />
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
        <li><AiFillShopping style={{width:"20px",height:"20px",color:"white",cursor:"pointer"}} /></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar;