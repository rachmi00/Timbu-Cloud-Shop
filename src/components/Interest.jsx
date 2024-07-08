import React from 'react'
import { PRODUCTS } from '../products'
import '.././pages/Shop/Shopp.css'
import Product from '../pages/Shop/Product';
import  heart from "../assets/Heart.png"
import cart from '../assets/ShoppingCart.png'
import { NavLink } from 'react-router-dom';

const Interest = () => {

    const interestProducts = PRODUCTS.slice(5,9);
  return (
      
    <div className='product'>
         <h5 >You Might Also like</h5>
         <div className='interest-list'>
           
            {interestProducts.map(product=>(
                <div key={product.id}>
                       <div className="product-contain">
                <img src={product.productImage} alt="product image" />
                <div className='buttons'>
                    <button className='cart-button '><img src={heart} alt="like" className='cart-image' /></button>
                   <NavLink to='/cart'><button className='heart-button' onClick={()=>addToCart(id)}><img src={cart} alt="Shopping Cart" className='cart-image' /></button></NavLink>
                  
                </div>
            </div>
            <div className='price-container'>
                <p className='price'>${product.price}</p>
              
            </div>
            <div className='product-info'>
                <p className='product-name'>
                    {product.productName}
                </p>
                <p className='product-category'>
                    {product.category}
                </p>
            </div>
                </div>
            ))}
         </div>
        </div>
   
  )
}

export default Interest