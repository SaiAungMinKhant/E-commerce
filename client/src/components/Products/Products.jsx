import React from 'react';
import ProductCards from './ProductCards';
import img1 from '../img/img1.jpg';
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.jpg";
import './Products.scss';

function Products() {
  return (
    <div className='container'>
      <h1>Featured Products</h1>
      <div className='products'>
        <ProductCards
          image={img1}
          productName={"Dress"}
          category={"Women"}
          price={"$150"}
        />
          <ProductCards
          image={img2}
          productName={"Hoodie"}
          category={"Men"}
          price={"$100"}
        />
          <ProductCards
          image={img3}
          productName={"Sunglasses"}
          category={"Uni"}
          price={"$100"}
        />
          <ProductCards
          image={img4}
          productName={"Jacket"}
          category={"Women"}
          price={"$200"}
        />
          <ProductCards
          image={img5}
          productName={"Shirt"}
          category={"Men"}
          price={"$120"}
        />
          <ProductCards
          image={img6}
          productName={"Dress"}
          category={"Women"}
          price={"$210"}
        />
          <ProductCards
          image={img7}
          productName={"Jacket"}
          category={"Men"}
          price={"$250"}
        />
          <ProductCards
          image={img8}
          productName={"Sweater"}
          category={"Women"}
          price={"$100"}
        />
                <ProductCards
          image={img9}
          productName={"Shirt"}
          category={"Men"}
          price={"$120"}
        />
                <ProductCards
          image={img10}
          productName={"Dress"}
          category={"Women"}
          price={"$500"}
        />
      </div>
    </div>
  )
}

export default Products
