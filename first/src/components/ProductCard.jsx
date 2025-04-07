import React from 'react'
import './ProductCard.css'
const ProductCard = (props) => {
  return (
    <div className='product_box'>
      <img src={props.image} alt="burger" />
      <div className="desciption">
        <h2>{props.name}</h2>
        <p className='price'>{props.price}<span>{props.og_Price}</span> </p>
        <p className='para'>{props.para}</p>
        <button className='btn'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard