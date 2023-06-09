import React from "react";
import Promo from "../../components/Promo/Promo";
import Products from "../../components/Products/Products";
import Features from "../../components/Features/Features";
import "./Home.scss";

const Home = () =>{
  return(
    <div className="home">
      <Promo />
      <Products />
      <Features />
    </div>
  )
}

export default Home;