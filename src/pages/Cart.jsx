import React from 'react'
import Product from './Shop/Product'
import { PRODUCTS } from '../products'
import Interest from '../components/Interest'
import { NavLink } from 'react-router-dom'
import trash from '../assets/Trash.svg'
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
                  <p className='product-category pt-2'>
                    {product.category}
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                <select name="form-select" id="size" className='me-5'>
                  <option value="">Size: M </option>
                  <option value="">Size: S </option>
                  <option value="">Size: L </option>
                </select>
                <select name="form-select" id="size">
                  <option value="">Quantity: 1</option>
                  <option value="">Quantity: 2</option>
                  <option value="">Quantity: 3 </option>
                </select>
              </div>
                <div className='trash'>
                  <img src={trash} alt="" />
                </div>
                </div>
                <div className='price-container'>
                  <p className='price'>₦{product.price}</p>
                </div>
              </div>
          
            </div>
          ))}
        </div>
        <div className='summary'>
          <p>Order Summary</p>
          <div className="">
            <ul className=" mb-3 width pe-5 me-3 ">
              <li className="list-group-item d-flex justify-content-between lh-sm p-2">
                <div>
                  <h6 className="my-0">Items</h6>
                </div>
                <span className="text-muted">4</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm p-2">
                <div>
                  <h6 className="my-0">Delivery</h6>

                </div>
                <span className="text-muted">₦50</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm p-2">
                <div>
                  <h6 className="my-0">Services</h6>
                </div>
                <span className="text-muted">₦230</span>
              </li>

              <li className="list-group-item d-flex justify-content-between p-2" >
                <span>Total</span>
                <strong>₦20</strong>
              </li>
              <li className='list-group-item d-flex justify-content-between p-2'>
                <form className="card p-2">
                <p>Do you have a Coupon Code?</p>
                  <div className="d-flex justify-content-between">
                    <input type="text" className="form-control" placeholder="Promo code" />
                    <button type="submit" className="btn btn-outline-success mx-2">apply</button>
                  </div>
                </form>
              </li>
               <hr></hr>           
              <li className="list-group-item d-flex justify-content-center align-self-center pt-4">
              <NavLink to='/checkout'>   <button className='btn btn-success'>Proceed to Checkout</button></NavLink>
              </li>
            </ul>
          </div>
       
        </div>
      </div>
      <Interest />
    </div>
  )
}

export default Cart