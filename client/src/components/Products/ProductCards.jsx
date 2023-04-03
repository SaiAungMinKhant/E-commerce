import React from 'react';
import './ProductCards.scss';
import {BiCartAlt} from 'react-icons/bi';

function ProductCards({image,productName,category,price}) {
  return (
    <div className='card'>
      <img src={image} alt='#' />
      <div className='container'>
        <div>
          <h4>{productName}</h4>
          <span>{category}</span>
          <p>{price}</p>
        </div>
        <button><BiCartAlt style={{width:'20px',height:'20px',textAlign:'center'}} /></button>
      </div>
    </div>
  )
}

export default ProductCards
