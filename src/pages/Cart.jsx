import React from 'react'
import Product from './Shop/Product'
import { PRODUCTS } from '../products'
import Interest from '../components/Interest'
import "./Cart.css"

const Cart = () => {

  const cartProducts = PRODUCTS.slice(0, 4)
  return (
    <div className='carts'>

     <div className="cart-container">
     <div className='items'>
      <p className='des'>Your Items</p>
        {cartProducts.map(product => (
          <div key={product.id} className='product-item'>
            <img src={product.productImage} alt="" />

            <div className="details">
            <div className='product-info'>
              <p className='product-name'>
                {product.productName}
              </p>
              <p className='product-category'>
                {product.category}
              </p>
            </div>
            <div className='price-container'>
              <p className='price'>${product.price}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className='summary'>
        <p>Order Summary</p>
        <p><span>Items</span> <span>4</span></p>
        <p><span>Items</span> <span>4</span></p>
        <p><span>Items</span> <span>4</span></p>
        <p><span>Items</span> <span>4</span></p>
        <p>Do you have a Coupon Code?</p>
       <div className='coupon'>
       <input type="text" placeholder='Enter Coupon Code' />
       <p>Apply</p>

       </div>
       <br />
       <button>Proceed to Checkout</button>
      </div>
     </div>
      <Interest/>
    </div>
  )
}

export default Cart