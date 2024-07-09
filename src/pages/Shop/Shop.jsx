import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import './Shopp.css'
import Landing from '../../components/Landing'
import Category from '../../components/Category'
import Footer from '../../components/Footer'
import { useEffect, useRef } from 'react'
import {useLocation} from 'react-router-dom'

const Shop = () => {
     const targetRef = useRef(null);
     const location = useLocation();
     useEffect(()=>{
      if(location.state?.scrollToSection){
        targetRef.current.scrollIntoView({behaviour: 'smooth'})
      }
     }, [location]);

  return (
    <div className='shop'>
     <Landing/>
     <Category/>
      <div className='products' ref={targetRef}>
        {" "}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      
    </div>
  )
}

export default Shop