import React, { useContext, useState } from 'react';
import cart from '../../assets/ShoppingCart.png';
import heart from '../../assets/Heart.png';
import star from '../../assets/Star.svg';
import success from '../../assets/CartSuccess.svg';
import { ShopContext } from '../../context/shop-context';
import { NavLink } from 'react-router-dom';
import './Shopp.css';

const Product = (props) => {
    const { id, productName, price, productImage, category } = props.data;
    const { addToCart } = useContext(ShopContext);
    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = () => {
        addToCart(id);
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 2000); // Hide modal after 2 seconds
    };

    return (
        <div className='product'>
            {showModal && (
                <div className='modal'>
                    <img src={success} alt="Cart Success" />
                </div>
            )}
            <div className="product-contain">
                <img src={productImage} alt="product image" />
                <div className='buttons'>
                    <button className='cart-button'>
                        <img src={heart} alt="like" className='cart-image' />
                    </button>
                    <button className='heart-button' onClick={handleAddToCart}>
                        <img src={cart} alt="Shopping Cart" className='cart-image' />
                    </button>
                </div>
            </div>
            <div className='price-container'>
                <p className='price'>₦{price}</p>
                <p className='p-flex'>
                    <span>4.5</span>
                    <span><img src={star} alt="" className='star mt-1' /></span>
                </p>
            </div>
            <div className='product-info'>
                <p className='product-name'>{productName}</p>
                <p className='product-category pt-2'>{category}</p>
            </div>
        </div>
    );
};

export default Product;