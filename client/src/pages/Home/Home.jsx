import React from "react";
import Promo from "../../components/Promo/Promo";
import Products from "../../components/Products/Products";
import Features from "../../components/Features/Features";
import "./Home.scss";
import PrimaryFooter from "../../components/Footer/PrimaryFooter";

const Home = () =>{
  return(
    <div className="home">
      <Promo />
      <Products />
      <Features />
      <PrimaryFooter />
    </div>
  )
}

export default Home;