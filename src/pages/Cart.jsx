import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import Interest from '../components/Interest';
import { NavLink } from 'react-router-dom';
import trash from '../assets/Trash.svg';
import "./Cart.css";

const Cart = () => {
  const { getCartProducts, removeFromCart, updateCartItemQuantity } = useContext(ShopContext);
  const cartProducts = getCartProducts();

  const handleQuantityChange = (e, productId) => {
    const newQuantity = parseInt(e.target.value);
    updateCartItemQuantity(productId, newQuantity);
  };

  return (
    <div className='carts container-fluid mt-5'>
      <div className="cart-container mt-4">
        <div className='items'>
          <p className='des'>Your Items</p>
          {cartProducts.map(product => (
            <div key={product.id} className='product-item'>
              <img src={product.productImage} alt="" />
              <div className="details">
                <div className='product-info'>
                  <p className='product-name'>{product.productName}</p>
                  <p className='product-category pt-2'>{product.category}</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <select name="form-select" id="size" className='me-5'>
                      <option value="">Size: M</option>
                      <option value="">Size: S</option>
                      <option value="">Size: L</option>
                    </select>
                    <select
                      name="form-select"
                      id="quantity"
                      value={product.quantity}
                      onChange={(e) => handleQuantityChange(e, product.id)}
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          Quantity: {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='trash' onClick={() => removeFromCart(product.id)}>
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
            <ul className="mb-3 width pe-5 me-3">
              <li className="list-group-item d-flex justify-content-between lh-sm p-2">
                <div>
                  <h6 className="my-0">Items</h6>
                </div>
                <span className="text-muted">{cartProducts.length}</span>
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
              <li className="list-group-item d-flex justify-content-between p-2">
                <span>Total</span>
                <strong>₦{cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)}</strong>
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
                <NavLink to='/checkout'>
                  <button className='btn btn-success'>Proceed to Checkout</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Interest />
    </div>
  );
};

export default Cart;