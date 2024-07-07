import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import './Shopp.css'
import Landing from '../../components/Landing'
import Category from '../../components/Category'

const Shop = () => {
  return (
    <div className='shop'>
     <Landing/>
     <Category/>
      <div className='products'>
        {" "}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop