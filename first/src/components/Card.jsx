import React from 'react'
import ProductCard from './ProductCard'
import Burger from '../assets/burger.jpeg'
import Meatballs from '../assets/meatballs.jpeg'
import Sallad from '../assets/sallad.jpeg'
const Card = () => {
  let para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, exuijhuihu.'
  return (
    <div className='product'>
      <ProductCard
      image = {Burger}
      name = {'Burger'}
      para = {para}
      price = {'$5.00'}
      og_Price = {'$7.00'}
      />
      <ProductCard
      image = {Meatballs}
      name = {'Meatballs'}
      para = {para}
      price = {'$8.00'}
      og_Price = {'$10.00'}
      />
      <ProductCard
      image = {Sallad}
      name = {'Sallad'}
      para = {para}
      price = {'$3.00'}
      og_Price = {'$4.00'}
      />
    </div>
  )
}

export default Card