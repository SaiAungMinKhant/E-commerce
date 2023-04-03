import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Promo from "../../components/Promo/Promo";
import Products from "../../components/Products/Products";
import Features from "../../components/Features/Features";
import "./Home.scss";
import PrimaryFooter from "../../components/Footer/PrimaryFooter";
import BtmFooter from "../../components/Footer/BtmFooter";

const Home = () =>{
  return(
    <div className="home">
      <div className="bgimg">
      <Navbar />
      <Promo />
      </div>
      <Products />
      <Features />
      <PrimaryFooter />
      <BtmFooter />
    </div>
  )
}

export default Home;