import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Promo from "../../components/Promo/Promo";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

const Home = () =>{
  return(
    <div className="home">
      <Navbar />
      <Promo />
      {/* <Slider /> */}
    </div>
  )
}

export default Home;