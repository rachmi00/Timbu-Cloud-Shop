import React, { useContext } from 'react'
import cart from '../../assets/ShoppingCart.png'
import heart from '../../assets/Heart.png'
import star from '../../assets/Star.svg'
import { ShopContext } from '../../context/shop-context';
import { NavLink } from 'react-router-dom';
import './Shopp.css'

const Product = (props) => {
    const { id, productName, price, productImage, category } = props.data;

    const {addToCart} = useContext(ShopContext);
    return (
        <div className='product'>
            <div className="product-contain">
                <img src={productImage} alt="product image" />
                <div className='buttons'>
                    <button className='cart-button '><img src={heart} alt="like" className='cart-image' /></button>
                  <button className='heart-button' onClick={()=>addToCart(id)}><img src={cart} alt="Shopping Cart" className='cart-image' /><span>nnj</span></button>
                  
                </div>
            </div>
            <div className='price-container'>
                <p className='price'>₦{price}</p>
                <p className='p-flex'>  <span>4.5</span> <span><img src={star} alt="" className='star' /></span></p>
            </div>
            <div className='product-info'>
                <p className='product-name'>
                    {productName}
                </p>
                <p className='product-category pt-2'>
                    {category}
                </p>
            </div>
        </div>
    )
}

export default Product